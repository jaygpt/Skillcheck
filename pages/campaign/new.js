
import React, { Component } from 'react';
import Layout from '../../components/Layout';
import { Form, Button, Input } from 'semantic-ui-react';
import factory from '../../ethereum/factory';
import web3 from '../../ethereum/web3';

class CampaignNew extends Component {
    state = {
        name : ''
    };

    onSubmit = async event => {
        event.preventDefault();
        const accounts = await web3.eth.getAccounts();
        console.log(accounts);
        accounts.push(0xdE4996d020808f261c13eab13Ff04FF744aE7d57);
        await factory.methods.createwallet().send({
          from: accounts[0]
        });
      };
    
    render() {
    return (
    <Layout>
        <h3>Create new wallet and Register yourself</h3>

        <Form onSubmit={this.onSubmit}>
          <Form.Field>
            <label>Your Account Address</label>
            <Input 
                label = "string"
                labelPosition = "right"
                value = {this.state.name}
                onChange =  {event =>
                    this.setState({ name : event.target.value })}
            />
          </Form.Field>

          <Button primary>Create!</Button>
        </Form>
      </Layout>
    );
  }
}

export default CampaignNew;