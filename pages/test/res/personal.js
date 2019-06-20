import React, { Component } from 'react';
import { Button ,Card, Grid } from 'semantic-ui-react';
import { Link } from '../../../routes';
import Layout from '../../../components/Layout';
import Campaign from '../../../ethereum/Test';
import web3 from '../../../ethereum/web3';
import Submitresponse from '../../../components/giveresponse';
import Grader from '../../../components/becomegrader';

class Response extends Component {
  static async getInitialProps(props) {
    const { address } = props.query;
    const { personal } = props.query;
    const campaign = Campaign(props.query.address);
    //const Studadd = await campaign.methods.StudentsAddress().call();
    //const count = Studadd.length;
    const quest = await campaign.methods.numberofQ().call();
    //console.log(props.query.personal);
    const Responses = [];
    var i = 0;
    for(i = 0; i< quest; i++){
      const detail = await campaign.methods.sendresponse(props.query.personal, i).call();
      const myres = {
        question: detail[0],
        answer: detail[1]
      }
      Responses.push(myres);
    }
    //console.log(Responses);
    //console.log(Studadd);
    return { address, Responses,personal };
  }
  renderCampaigns() {
    const items = this.props.Responses.map(details => {
      return {
        header: details.question,
        description: (
        <p>
          {details.answer}
        </p>
        ),
        fluid: true
      };
    });

    return <Card.Group items={items} />;
  }

  render() {
    return (
      <Layout>
        <h3>Responses by {this.props.personal} for {this.props.address}</h3>
        <Link route={`/test/at/${this.props.address}/response`}>
          <a>
            Show Response
          </a>
        </Link>
        <Grid>
          <Grid.Column width = {10}>
        <div>
          <link
            rel="stylesheet"
            href="//cdnjs.cloudflare.com/ajax/libs/semantic-ui/2.2.12/semantic.min.css"
          />
          
          {this.renderCampaigns()}
        </div>
        </Grid.Column>
        <Grid.Column width={6}>
        <Grid.Row>
        <Submitresponse address = {this.props.address} personal = {this.props.personal}/>
        </Grid.Row>
        <br></br>
        <Grid.Row>
          <Grader address = {this.props.address} personal = {this.props.personal}/>
        </Grid.Row>
        
        <Link route = {`/test/at/${this.props.address}/response`}>
            <a>
              <Button
                floated="right"
                content="Test Info"
                icon="add circle"
                primary
              />
            </a>
          </Link>
        </Grid.Column>
        </Grid>

        
      </Layout>
    );
  }
}

export default Response;