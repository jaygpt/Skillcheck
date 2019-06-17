import React, { Component } from 'react';
import { Card } from 'semantic-ui-react';

import Layout from '../../components/Layout';
import Campaign from '../../ethereum/wallet';

class CampaignShow extends Component {
    static async getInitialProps(props) {
        console.log(props.query.address);
        const campaign = Campaign(props.query.address);
        const score = await campaign.methods.presentscore().call();
        console.log(score);
        return {
          myscore: score
        };
      }
    renderCards() {
        const {
          myscore,
        } = this.props;

        const items = [
          {
            header: myscore,
            meta: 'Address of Manager',
            description:
              'Score of your Skill in Programming',
            style: { overflowWrap: 'break-word' }
          },
          {
            header: 20,
            meta: 'Address of Manager',
            description:
              'Score of your Skill in Evaluation of test in Programming',
            style: { overflowWrap: 'break-word' }
          }
        ];

        return <Card.Group items={items} />;
      }
    render() {
        return (
          <Layout>
            <h3>Wallet Show</h3>
            {this.renderCards()}
            <p></p>
          </Layout>
        );
      }
}

export default CampaignShow;