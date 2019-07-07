import React, { Component } from 'react';
import { Card } from 'semantic-ui-react';

import Layout from '../../components/Layout';
import Wallet from '../../ethereum/wallet';

class CampaignShow extends Component {
    static async getInitialProps(props) {
        console.log(props.query.address);
        const campaign = Wallet(props.query.address);
        const score = await campaign.methods.presentscore().call();
        const myadd = await campaign.methods.myaddress().call();
        console.log(score);
        return {
          add: myadd,
          myscore: score
        };
      }
    renderCards() {
        const {
          add,
          myscore,
        } = this.props;

        const items = [
          {
            header: 3.5,
            meta: 'Address of Manager',
            description:
              'Score of your Skill in Programming',
            style: { overflowWrap: 'break-word' }
          },
          {
            header: add,
            meta: 'My account addresss',
            description:
              'My account address',
            style: { overflowWrap: 'break-word' }
          },
          {
            header: 1.3,
            meta: 'score',
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