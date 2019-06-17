import React, { Component } from 'react';
import { Form, Input, Message, Button } from 'semantic-ui-react';
import Campaign from '../ethereum/Test';
import web3 from '../ethereum/web3';

class EnrollForm extends Component {
  state = {
      wallet_address: '',
      errorMessage: '',
      loading: false
  };
// incomplete
  onSubmit = async (event) => {
    event.preventDefault();
    const campaign = Campaign(this.props.address);
    try {
      //const accounts = await web3.eth.getAccounts();
      //sending answer to be complete
      //await campaign.methods.answermytest().call();
      console.log(this.state.wallet_address);
    } catch (err) {}
  };

  render() {
    return (
      <Form onSubmit={this.onSubmit}>
        <Form.Field>
          <label>Question to answer:</label>
          <Input
            value = {this.setState.wallet_address}
            onChange={event => this.setState({ wallet_address: event.target.value })}
            label = "address"
            labelPosition = "right"
          />
        </Form.Field>
        <Button primary>Submit answer!</Button>
      </Form>
    );
  }
}

export default EnrollForm;