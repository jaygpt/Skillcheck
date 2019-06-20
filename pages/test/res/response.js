import React, { Component } from 'react';
import { Button ,Card} from 'semantic-ui-react';
import { Link } from '../../../routes';
import Layout from '../../../components/Layout';
import Submitresponse from '../../../components/giveresponse';
import Campaign from '../../../ethereum/Test';
import web3 from '../../../ethereum/web3';

class Response extends Component {
  static async getInitialProps(props) {
    const { address } = props.query;
    const campaign = Campaign(props.query.address);
    const Studadd = await campaign.methods.StudentsAddress().call();
    const count = Studadd.length;
    const quest = await campaign.methods.numberofQ().call();
    //sendresponse
    const Responses = [];
    var i,j;
    for(i=0;i<count;i++){
      const addres = Studadd[i];
      const mytest = [];
      for(j = 0;j<quest;j++){
        const detail = await campaign.methods.sendresponse(addres,j).call();
        const myres = {
          question: detail[0],
          answer: detail[1]
        }
        mytest.push(myres);
      }
      Responses.push(mytest);
    }
    console.log(Responses);
    console.log(Studadd);
    return { address, Studadd };
  }
  renderCampaigns() {
    const items = this.props.Studadd.map(details => {
      return {
        meta: 'Response',
        description: (
        <Link route={`/test/at/${this.props.address}/res/${details}`}>
          <a>{details}</a>
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
        <h3>Responses</h3>
        <Link route={`/campaigns/${this.props.address}`}>
          <a>
            Show Response
          </a>
        </Link>
        <div>
          <link
            rel="stylesheet"
            href="//cdnjs.cloudflare.com/ajax/libs/semantic-ui/2.2.12/semantic.min.css"
          />
          <Link route="/test/newtest">
            <a>
              <Button
                floated="right"
                content="Test Info"
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

export default Response;