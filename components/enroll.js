import React, { Component } from 'react';
import { Form, Input, Message, Button } from 'semantic-ui-react';
import Campaign from '../ethereum/Test';
import Wallet from '../ethereum/Test';
import web3 from '../ethereum/web3';
import { Link, Router } from '../routes';

class EnrollForm extends Component {
  state = {
      wallet_address: '',
      errorMessage: '',
      loading: false
  };
// incomplete
  onSubmit = async (event) => {
    event.preventDefault();
    this.setState({ loading: true, errorMessage: '' });
    const campaign = Campaign(this.props.address);
    try {
      const accounts = await web3.eth.getAccounts();
      //sending answer to be complete
      const mywallet = Wallet(this.props.wallet_address);
      const examiner = campaign.methods.examineradd().call();

      await campaign.methods.enrollintest(this.state.wallet_address).send({
        from: accounts[0]
      });
      
      await campaign.methods.starteval(this.state.wallet_address).send({
        from: accounts[0]
      });



    } catch (err) {
      this.setState({ errorMessage: err.message });
    }
    this.setState({ loading: false });
  };

  render() {
    return (
      <Form onSubmit={this.onSubmit}>
        <Form.Field>
          <label>Enroll Yourself for Test:</label>
          <Input
            value = {this.setState.wallet_address}
            onChange={event => this.setState({ wallet_address: event.target.value })}
            label = "address"
            labelPosition = "right"
          />
        </Form.Field>
        <Message error header="Oops!" content={this.state.errorMessage} />
        <Button loading={this.state.loading} primary>Enroll!</Button>
      </Form>
    );
  }
}

export default EnrollForm;
