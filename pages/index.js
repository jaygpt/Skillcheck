import React, { Component } from 'react';
import { Card, Container, Button } from 'semantic-ui-react';
import factory from '../ethereum/factory';
import Layout from '../components/Layout';
import { Link } from '../routes';

class CampaignIndex extends Component {
  static async getInitialProps() {
    const campaigns = await factory.methods.totalwallet().call();

    return { campaigns };
  }

  renderCampaigns() {
    const items = this.props.campaigns.map(address => {
      return {
        header: address,
        description: (
        <Link route={`/wallets/${address}`}>
        <a>View Details</a>
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
