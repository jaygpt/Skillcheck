import React, { Component } from 'react';
import Layout from '../../components/Layout';
import { Form, Button, Input ,Message } from 'semantic-ui-react';
import factory from '../../ethereum/factory2';
import web3 from '../../ethereum/web3';
import { Router } from '../../routes';

class CampaignNew extends Component {
    state = {
        instructions : '',
        errorMessage: '',
        loading: false
    };

    onSubmit = async event => {
        event.preventDefault();
        this.setState({ loading: true, errorMessage: '' });
        try {
          const accounts = await web3.eth.getAccounts();
          console.log(accounts);
          //accounts.push(0xdE4996d020808f261c13eab13Ff04FF744aE7d57);
          await factory.methods.creatorTest(String(this.state.instructions)).send({
            from: accounts[0]
          });
          Router.pushRoute('/test/test');
        } catch (err) {
          this.setState({ errorMessage: err.message });
        }
        this.setState({ loading: false });
      };
    
    render() {
    return (
    <Layout>
        <h3>Create new Test and get started</h3>

        <Form onSubmit={this.onSubmit} error={!!this.state.errorMessage}>
          <Form.Field>
            <label>Add Instruction and Description</label>
            <Input 
                label = "string"
                labelPosition = "right"
                value = {this.state.name}
                onChange =  {event =>
                    this.setState({ instructions : event.target.value })}
            />
          </Form.Field>
          <Message error header="Oops!" content={this.state.errorMessage} />
          <Button loading={this.state.loading} primary >Create!</Button>
        </Form>
      </Layout>
    );
  }
}

export default CampaignNew;