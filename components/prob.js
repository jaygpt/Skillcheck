import React, { Component } from 'react';
import { Form, Input, Message, Button } from 'semantic-ui-react';
import Campaign from '../ethereum/Test';
import web3 from '../ethereum/web3';
import { Link , Router } from '../routes';

class Prob extends Component {
  state = {
      index: '',
      score: '',
      wallet_of_student:'',
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
      const myWallet = await campaign.methods.examineradd().call();
      console.log(myWallet);
      await campaign.methods.addProbe(this.state.wallet_of_student,this.state.index,this.state.score).send({
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
        <Form.Field>
          <label>Evaluate the response:</label>
          <Input
            value = {this.setState.wallet_of_student}
            onChange={event => this.setState({ wallet_of_student: event.target.value })}
            label = "address"
            labelPosition = "right"
          />
          <Input
            value = {this.setState.question}
            onChange={event => this.setState({ index: event.target.value })}
            label = "index"
            labelPosition = "right"
          />
          <Input
            value = {this.state.value}
            onChange={event => this.setState({ score: event.target.value })}
            label="Marks"
            labelPosition="right"
          />
        </Form.Field>
        <Message error header="Oops!" content={this.state.errorMessage} />
        <Button loading={this.state.loading} primary>Add Prob</Button>
      </Form>
    );
  }
}

export default Prob;