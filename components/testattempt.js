import React, { Component } from 'react';
import { Form, Input, Message, Button } from 'semantic-ui-react';
import Campaign from '../ethereum/Test';
import web3 from '../ethereum/web3';
import { Link, Router } from '../routes';
import Wallet from '../ethereum/Test';

class Attempt extends Component {
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
      //change this loop to mapping
      const mywallet = Wallet(this.props.wallet_address);
      const Students = await campaign.methods.StudentsAddress().call();
      const examiner = campaign.methods.examineradd().call();

      var flag = false;
      for(var i = 0;i<Students.length;i++){
          if(Students[i] == this.state.wallet_address){
              flag = true;
          }
      }
      // await mywallet.methods.Setadmin(examiner).send({
      //   from: accounts[0]
      // });
      console.log(flag);
      if(flag){
      Router.pushRoute(`/test/at/${this.props.address}/attempt`);
      console.log('Yes');
      }else{
        Router.pushRoute('/test/test');
        console.log('NO');
      }
    } catch (err) {
      this.setState({ errorMessage: err.message });
    }
    this.setState({ loading: false });
  };

  render() {
    return (
      <Form onSubmit={this.onSubmit}>
        <Form.Field>
          <label>Attempt:</label>
          <Input
            value = {this.setState.wallet_address}
            onChange={event => this.setState({ wallet_address: event.target.value })}
            label = "address"
            labelPosition = "right"
          />
        </Form.Field>
        <Message error header="Oops!" content={this.state.errorMessage} />
        <Button loading={this.state.loading} primary>Attempt!</Button>
      </Form>
    );
  }
}

export default Attempt;