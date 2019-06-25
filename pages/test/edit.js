import React, { Component } from 'react';
import Campaign from '../../ethereum/Test';
import Layout from '../../components/Layout';
import { Form, Button, Input ,Message, Card, Grid} from 'semantic-ui-react';
import web3 from '../../ethereum/web3';
import { Router } from '../../routes';
import Prob from '../../components/prob';


class CampaignShow extends Component {
    state = {
        question : '',
        errorMessage: '',
        errormessage: '',
        loading: false
    };
    
    static async getInitialProps(props) {
        const { address } = props.query;
        const campaign = Campaign(props.query.address);
        const Studadd = await campaign.methods.StudentsAddress().call();
        const count = Studadd.length;
        const quest = await campaign.methods.numberofQ().call();
        //sendresponse
        const Responses = [];
        var i,j;
        for(i=0;i<count;i++){
          const addres = Studadd[i];
          const mytest = [];
          for(j = 0;j<quest;j++){
            const detail = await campaign.methods.sendresponse(addres,j).call();
            const myres = {
              hisaddress: addres,
              question: detail[0],
              answer: detail[1]
            }
            mytest.push(myres);
          }
          Responses.push(mytest);
        }
        console.log(Responses[0]);
        // return properly
        return { 
          address,
          Responses 
        }
      }
    
    renderCampaigns() {
      const items = []
      var l = 0;
      for(l = 0;l< this.props.Responses.length;l++){
        var k;
        for(k=0;k<this.props.Responses[l].length;k++){
          const thisitem = {
            header: this.props.Responses[l][k].question,
            meta: this.props.Responses[l][k].hisaddress,
            description: (
            <p>
              {this.props.Responses[l][k].answer}
            </p>
            ),
            fluid: true
          };
          items.push(thisitem);
        }
      }
      return <Card.Group items={items} />;
      }
    // add dot render function for render respnses and add Prob paper
    onSubmit = async event => {
        event.preventDefault();
        this.setState({ loading: true, errorMessage: '' });
        try {
            const campaign = Campaign(this.props.address);
            const accounts = await web3.eth.getAccounts();
            console.log(accounts);
            await campaign.methods.addQuestion(String(this.state.question)).send({
            from: accounts[0]
          });
          Router.pushRoute(`/test/at/${this.props.address}`);
        } catch (err) {
          this.setState({ errorMessage: err.message });
        }
        this.setState({ loading: false });
      };
 /// error : edit.js is not working properly  
      onsubmit = async event =>{
        event.preventDefault();
        this.setState({ errormessage: '' });
        try {
          const campaign = Campaign(this.props.address);
          const accounts = await web3.eth.getAccounts();
          const examiner = await campaign.methods.examineradd().call();
          console.log(examiner);
          if(examiner == accounts[0]){
            console.log('tRUE');
            Router.pushRoute(`/test/at/${this.props.address}/finalize`);
          }else{
            console.log('False');
            this.setState({ errormessage: 'You are not examiner' });
          }
        } catch (err) {
          this.setState({ errormessage: err.message });
        }
      }
  render() {
    return (
        <Layout>
            <h3>Add new question if you are examiner</h3>
            <Grid>
            <Grid.Column width = {10}>
            {this.renderCampaigns()}

            <Form onSubmit = {this.onsubmit} error={!!this.state.errormessage}>
            <Message error header="Oops!" content={this.state.errormessage} />
            <Button primary >Finalize Marks</Button>
            </Form>

            </Grid.Column>
            <Grid.Column width={6}>
            <Form onSubmit={this.onSubmit} error={!!this.state.errorMessage}>
              <Form.Field>
                <label>Add Questions</label>
                <Input 
                    label = "string"
                    labelPosition = "right"
                    value = {this.state.question}
                    onChange =  {event =>
                        this.setState({ question : event.target.value })}
                />
              </Form.Field>
              <Message error header="Oops!" content={this.state.errorMessage} />
              <Button loading={this.state.loading} primary >Add!</Button>
            </Form>
            <Prob address = {this.props.address} />            
            
            </Grid.Column>
            </Grid>
          </Layout>
        );
  }
}

export default CampaignShow;