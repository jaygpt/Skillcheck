import React, { Component } from 'react';
import { Card, Container, Button } from 'semantic-ui-react';
import factory from '../../ethereum/factory2';
import Layout from '../../components/Layout';
import { Link, Router } from '../../routes';

class CampaignIndex extends Component {
  static async getInitialProps() {
    const campaigns = await factory.methods.totalwallet().call();
    const Instruction = [];
    var i;
    for( i = 0;i< campaigns.length;i++){
      //console.log(campaigns[i]);
      var inst = await factory.methods.totalinstruction(campaigns[i]).call();
      var detail = {
        address: campaigns[i],
        instruction: inst
      }
      Instruction.push(detail);
      //console.log(Instruction);
    }
    //console.log(typeof(Instruction));
    return { campaigns , Instruction };
  }

  renderCampaigns() {
    const items = this.props.Instruction.map(details => {
      const add = details.address;
      return {
        header: details.instruction,
        description: (
        <Link route={`/test/at/${add}`}>
          <a>{details.address}</a>
        </Link>
        ),
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
          <h3>List of all tests</h3>
          <Link route="/test/newtest">
            <a>
              <Button
                floated="right"
                content="Create Test"
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
