import React, { Component } from 'react';
import { Form, Input, Message, Button } from 'semantic-ui-react';
import Campaign from '../ethereum/Test';
import web3 from '../ethereum/web3';
import { Link, Router } from '../routes';

class ContributeForm extends Component {
  state = {
      wallet_address: '',
      question: '',
      value: '',
      errorMessage: '',
      loading:false
  };

  onSubmit = async (event) => {
    event.preventDefault();
    this.setState({ loading: true, errorMessage: '' });
    const campaign = Campaign(this.props.address);
    try {
      const accounts = await web3.eth.getAccounts();
      //sending answer to be complete
      await campaign.methods.answermytest(this.state.wallet_address,this.state.question,String(this.state.value)).send({
        from: accounts[0]
      });
      Router.pushRoute(`/test/at/${this.props.address}/attempt`);
    } catch (err) {
      this.setState({ errorMessage: err.message });
    }
    this.setState({ loading: false });
  };

  render() {
    return (
      <Form onSubmit={this.onSubmit} error={!!this.state.errorMessage}>
        <Form.Field>
          <label>Question to answer:</label>
          <Input
            value = {this.setState.wallet_address}
            onChange={event => this.setState({ wallet_address: event.target.value })}
            label = "address"
            labelPosition = "right"
          />
          <Input
            value = {this.setState.question}
            onChange={event => this.setState({ question: event.target.value })}
            label = "uint"
            labelPosition = "right"
          />
          <Input
            value = {this.state.value}
            onChange={event => this.setState({ value: event.target.value })}
            label="Answer"
            labelPosition="right"
          />
        </Form.Field>
        <Message error header="Oops!" content={this.state.errorMessage} />
        <Button loading={this.state.loading} primary>Submit this question</Button>
      </Form>
    );
  }
}

export default ContributeForm;