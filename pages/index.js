import React, { Component } from 'react';
import { Card, Container, Button } from 'semantic-ui-react';
import factory from '../ethereum/factory';
import Layout from '../components/Layout';
import { Link } from '../routes';

class CampaignIndex extends Component {
  static async getInitialProps() {
    const campaigns = await factory.methods.totalwallet().call();
    
    const Instruction = [];
    var i;
    for( i = 0;i< campaigns.length;i++){
      //console.log(campaigns[i]);
      const name = await factory.methods.myname(campaigns[i]).call();
      var detail = {
        address: campaigns[i],
        instruction: name
      }
      Instruction.push(detail);
      //console.log(Instruction);
    }
    
    return { campaigns , Instruction};
  }

  renderCampaigns() {
    const items = this.props.Instruction.map(details => {
      return {
        header: details.instruction,
        description: (
        <Link route={`/wallets/${details.address}`}>
        <a>{details.address}</a>
      </Link>),
        fluid: true
      };
    });

    return <Card.Group items={items} />;
  }

  render() {
    return (
      <Layout>
        <div>
          <link
            rel="stylesheet"
            href="//cdnjs.cloudflare.com/ajax/libs/semantic-ui/2.2.12/semantic.min.css"
          />
          <h3>All Wallets</h3>
          <Link route="/campaign/new">
            <a>
              <Button
                floated="right"
                content="Create wallet"
                icon="add circle"
                primary
              />
            </a>
          </Link>
          {this.renderCampaigns()}
        </div>
      </Layout>
        
      
    );
  }
}

export default CampaignIndex;
