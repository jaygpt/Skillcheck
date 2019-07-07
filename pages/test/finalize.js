import React, { Component } from 'react';
import { Card, Grid ,Button, Form} from 'semantic-ui-react';
import Layout from '../../components/Layout';
import Campaign from '../../ethereum/Test';
import factory from '../../ethereum/factory2';
import ContributeForm from '../../components/answer';
import EnrollForm from '../../components/enroll';
import { Link, Router } from '../../routes';
import Attempt from '../../components/testattempt';
import Wallet from '../../ethereum/wallet';


class CampaignShow extends Component {
  static async getInitialProps(props) {
        //console.log(props.query.address);
        const campaign = Campaign(props.query.address);
        const examiner = await campaign.methods.examineradd().call();
        const questioncount = await campaign.methods.numberofQ().call();
        const inst = await factory.methods.totalinstruction(props.query.address).call();
        const Students = await campaign.methods.StudentsAddress().call();
        //console.log(Students.length);
        var marks = [];
        var i,j;
        var marksofevaluator = [];
        //console.log(Students);
        for(i=0;i<Students.length;i++){
          const numberofevaluter = await campaign.methods.number_of_evaluator(Students[i]).call();
          var marksg = [];
          //console.log(numberofevaluter);
          for(j = 0;j<numberofevaluter;j++){
            const detail = await campaign.methods.sendmarks(Students[i],j).call();
            var bais = 0;
            var marksg2 = [];
            var m;
            var lengtha = 0;
            //console.log(detail);
            for(m = 0;m<questioncount;m++){
              //console.log(props.query.address);
              const marksprob = await campaign.methods.sendresponse(Students[i],m).call();
              //console.log(typeof(marksprob[2]));
              if(marksprob[2] != '-1'){
                
                bais = (bais + parseInt(marksprob[2],10) - parseInt(detail[1][m],10));
                lengtha++;
                //console.log(bais);
              }
              var gh = parseInt(detail[1][m],10);
              marksg2.push(gh);
            }
            
            for(var k = 0;k<questioncount;k++){
              if(lengtha > 0){
                marksg2[k] = marksg2[k] + bais/lengtha;
              }
            }
            marksg.push(marksg2);
            //console.log(marksg);
            if(bais<0){bais = bais*(-1)}
            var flag = false;
            for(m = 0;m<marksofevaluator.length;m++){
              if(marksofevaluator[m].addr == detail[0]){
                marksofevaluator[m].mark = marksofevaluator.mark + 1 - bais/10;
                flag = true;
              }
            }
            if(!flag){
              var newscore = {
                addr: detail[0],
                mark: 1 - bais/10
              }
              marksofevaluator.push(newscore);
            }
          }
          var final_score = [];
          for(var k = 0 ; k<questioncount;k++){
            var marks2 = 0;
            for(var p = 0;p<numberofevaluter;p++){
              marks2 = marks2 + marksg[p][k];
            }
            final_score.push(marks2/numberofevaluter);
          }
          marks.push(final_score);
        }
        //console.log(marksofevaluator);
        //console.log(marks);
        var consta = [];
        for(var i = 0;i<marks.length;i++){
          const thisa = marks[i];
          var sum = 0;
          for(var l = 0;l<thisa.length;l++)
          {
            sum = sum + thisa[l];
          }
          const maarks = {
            addre: Students[i],
            sum: sum
          }
          consta.push(maarks);
          
        }
        console.log(consta);
        return {
          consta : consta,
          marks_final: marks,
          marks_of_eval: marksofevaluator,
          Studentscount: Students.length,
          number: questioncount,
          address: props.query.address,
          examineradd: examiner,
          instructions: inst,
          Student : Students
        };
      }
      onSubmit = async event => {
        event.preventDefault();
        console.log(this.props.examineradd);
        for(var i = 0;i<this.props.consta.length;i++){
          const mywallet = Wallet(this.props.consta[i].addre);
          await mywallet.methods.setscoretest(this.props.consta[i].sum).send({
            from: this.props.examineradd
          });
        }
        for(var i = 0;i<this.props.marks_of_eval.length;i++ ){
          const mywallet = Wallet(this.props.marks_of_eval[i].addr);
          await mywallet.methods.setscoretest(this.props.marks_of_eval[i].mark).send({
            from: this.props.examineradd
          });
        }
      }
      newrender(){
        const items = this.props.consta.map(details => {
          const add = details.addre;
          return {
            header: add,
            description: details.sum,
            fluid: true
          };
        });
    
        return <Card.Group items={items} />;
      }
      renderCards() {
        const {
          cosnta,
          marks_final,
          marks_of_eval,
          Studentscount,
          number,
          address,
          examineradd,
          instructions,
          Student
        } = this.props;
        
        const items = this.props.marks_of_eval.map(details => {
          const add = details.addr;
          return {
            header: add,
            description: details.mark,
            fluid: true
          };
        });
    
        return <Card.Group items={items} />;
       }
    render() {
        return (
          <Layout>
          <h3>This Test</h3>
          <Grid>
            <Grid.Column width={10}>
            </Grid.Column>
          </Grid>
          <Grid>
            {this.renderCards()}
            <h3>Marks</h3>
            {this.newrender()}
          <Form onSubmit={this.onSubmit}>
            <a>
              <Button primary>Finalize Score</Button>
            </a>
          </Form>
          </Grid>
        </Layout>
        );
      }
}

export default CampaignShow;