import React, { Component } from 'react';
import Layout from '../../components/Layout';
import Campaign from '../../ethereum/wallet';

class CampaignShow extends Component {
    static async getInitialProps(props) {
        console.log(props.query.address);
        const campaign = Campaign(props.query.address);
        const score = await campaign.methods.presentscore().call();
        console.log(score);
        return {};
      }
    render() {
        return (
          <Layout>
            <h3>Wallet Show</h3>
          </Layout>
        );
      }
}

export default CampaignShow;