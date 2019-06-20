import React, { Component } from 'react';
import { Form, Input, Message, Button } from 'semantic-ui-react';
import Campaign from '../ethereum/Test';
import factory from '../ethereum/factory';
import web3 from '../ethereum/web3';
import { Link , Router } from '../routes';

class Grader extends Component {
  state = {
      //wallet_address: '',
      //index: '',
      errorMessage: '',
      loading:false
  };

  onSubmit = async (event) => {
    event.preventDefault();
    this.setState({ loading: true, errorMessage: '' });
    const campaign = Campaign(this.props.address);
    console.log(this.props.personal);
    try {
      const accounts = await web3.eth.getAccounts();
      //sending answer to be complete
      const myWallet = await factory.methods.mywallet().call({
          from: accounts[0]
      });
      console.log(myWallet);
      await campaign.methods.becomegrader(myWallet,this.props.personal).send({
        from: accounts[0]
      });
      //Router.pushRoute(`/test/at/${this.props.address}/attempt`);
    } catch (err) {
      this.setState({ errorMessage: err.message });
    }
    this.setState({ loading: false });
  };

  render() {
    return (
      <Form onSubmit={this.onSubmit} error={!!this.state.errorMessage}>
        {/* <Form.Field>
          <label>Evaluate the response:</label>
          <Input
            value = {this.setState.question}
            onChange={event => this.setState({ question: event.target.value })}
            label = "index"
            labelPosition = "right"
          />
          <Input
            value = {this.state.value}
            onChange={event => this.setState({ value: event.target.value })}
            label="Marks"
            labelPosition="right"
          />
        </Form.Field> */}
        <Message error header="Oops!" content={this.state.errorMessage} />
        <Button loading={this.state.loading} primary>Become Grader</Button>
      </Form>
    );
  }
}

export default Grader;