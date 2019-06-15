import React, { Component } from 'react';
import Layout from '../../components/Layout';
import Campaign from '../../ethereum/Test';

class CampaignShow extends Component {
    static async getInitialProps(props) {
        //console.log(props.query.address);
        const campaign = Campaign(props.query.address);
        const examiner = await campaign.methods.examineradd().call();
        console.log(examiner);
    
        return {};
      }
    render() {
        return (
          <Layout>
            <h3>Test Show</h3>
          </Layout>
        );
      }
}

export default CampaignShow;