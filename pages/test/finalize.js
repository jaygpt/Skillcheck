import React, { Component } from 'react';
import { Card, Grid ,Button} from 'semantic-ui-react';
import Layout from '../../components/Layout';
import Campaign from '../../ethereum/Test';
import factory from '../../ethereum/factory2';
import ContributeForm from '../../components/answer';
import EnrollForm from '../../components/enroll';
import { Link, Router } from '../../routes';
import Attempt from '../../components/testattempt';

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
        console.log(Students);
        for(i=0;i<Students.length;i++){
          const numberofevaluter = await campaign.methods.number_of_evaluator(Students[i]).call();
          var marksg = [];
          console.log(numberofevaluter);
          for(j = 0;j<numberofevaluter;j++){
            const detail = await campaign.methods.sendmarks(Students[i],j).call();
            var bais = 0;
            var marksg2 = [];
            var m;
            console.log(detail);
            for(m = 0;m<detail[1].length;m++){
              //console.log(props.query.address);
              const marksprob = await campaign.methods.sendresponse(Students[i],m).call();
              //console.log(marksprob);
              if(marksprob[2] != -1){
                bais = (bais + marksprob[2] - detail[1][k])/2;
              }
              marksg2.push(detail[1][k]);
            }
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
            for(var k = 0;k<detail[1].length;k++){
              marksg2[k] = marksg2[k] + bais;
            }
            marksg.push(marksg2);
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
        //console.log(marks);
        return {
          marks_final: marks,
          marks_of_eval: marksofevaluator,
          Studentscount: Students.length,
          number: questioncount,
          address: props.query.address,
          examineradd: examiner,
          instructions: inst
        };
      }
      
      renderCards() {
    //     const {
    //       Studentscount,
    //       number,
    //       address,
    //       examineradd,
    //       instructions
    //     } = this.props;

    //     const items = [
    //       {
    //         header: examineradd,
    //         meta: 'Address of Examiner',
    //         description:(
    //           <Link route={`/test/at/${address}/addnew`}>
    //             <a>'Examiner have right to  access your test-score'</a>
    //           </Link>
    //           ),
    //         style: { overflowWrap: 'break-word' }
    //       },
    //       {
    //         header: "Instruction",
    //         meta: 'Read instruction carefuly',
    //         description:
    //           instructions,
    //         style: { overflowWrap: 'break-word' }
    //       },
    //       {
    //         header: number,
    //         meta: 'Total Number of Question',
    //         description:
    //           'All are compulsory to answer',
    //         style: { overflowWrap: 'break-word' }
    //       },
    //       {
    //         header: Studentscount,
    //         meta: 'Total Number of Students',
    //         description:
    //           'Number of Students enrolled in Test',
    //         style: { overflowWrap: 'break-word' }
    //       }
    //     ];

    //     return <Card.Group items={items} />;
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
          <Link route={`/test/at/${this.props.address}/response`}>
              <a>
                <Button primary>Responses</Button>
              </a>
          </Link>
          </Grid>
        </Layout>
        );
      }
}

export default CampaignShow;