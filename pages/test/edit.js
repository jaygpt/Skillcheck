import React, { Component } from 'react';
import Campaign from '../../ethereum/Test';
import Layout from '../../components/Layout';
import { Form, Button, Input ,Message } from 'semantic-ui-react';
import web3 from '../../ethereum/web3';
import { Router } from '../../routes';

class CampaignShow extends Component {
    state = {
        question : '',
        errorMessage: '',
        loading: false
    };
    
    static async getInitialProps(props) {
        const { address } = props.query;

        return { address }
      }
    
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

  render() {
    return (
        <Layout>
            <h3>Add new question if you are examiner</h3>
    
            <Form onSubmit={this.onSubmit} error={!!this.state.errorMessage}>
              <Form.Field>
                <label>Add Question</label>
                <Input 
                    label = "string"
                    labelPosition = "right"
                    value = {this.state.question}
                    onChange =  {event =>
                        this.setState({ question : event.target.value })}
                />
              </Form.Field>
              <Message error header="Oops!" content={this.state.errorMessage} />
              <Button loading={this.state.loading} primary >Create!</Button>
            </Form>
          </Layout>
        );
  }
}

export default CampaignShow;