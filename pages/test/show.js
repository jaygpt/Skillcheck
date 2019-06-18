import React, { Component } from 'react';
import { Card, Grid ,Button} from 'semantic-ui-react';
import Layout from '../../components/Layout';
import Campaign from '../../ethereum/Test';
import factory from '../../ethereum/factory2';
import ContributeForm from '../../components/answer';
import EnrollForm from '../../components/enroll';
import { Link, Router } from '../../routes';
import Attempt from '../../components/testattempt';

class CampaignShow extends Component {
  static async getInitialProps(props) {
        //console.log(props.query.address);
        const campaign = Campaign(props.query.address);
        const examiner = await campaign.methods.examineradd().call();
        const questioncount = await campaign.methods.numberofQ().call();
        const inst = await factory.methods.totalinstruction(props.query.address).call();
        console.log(props.query.address);
        const Students = await campaign.methods.StudentsAddress().call();
        //console.log(Students.length);
        return {
          Studentscount: Students.length,
          number: questioncount,
          address: props.query.address,
          examineradd: examiner,
          instructions: inst
        };
      }
      
      renderCards() {
        const {
          Studentscount,
          number,
          address,
          examineradd,
          instructions
        } = this.props;

        const items = [
          {
            header: examineradd,
            meta: 'Address of Examiner',
            description:(
              <Link route={`/test/at/${address}/addnew`}>
                <a>'Examiner have right to  access your test-score'</a>
              </Link>
              ),
            style: { overflowWrap: 'break-word' }
          },
          {
            header: "Instruction",
            meta: 'Read instruction carefuly',
            description:
              instructions,
            style: { overflowWrap: 'break-word' }
          },
          {
            header: number,
            meta: 'Total Number of Question',
            description:
              'All are compulsory to answer',
            style: { overflowWrap: 'break-word' }
          },
          {
            header: Studentscount,
            meta: 'Total Number of Students',
            description:
              'Number of Students enrolled in Test',
            style: { overflowWrap: 'break-word' }
          }
        ];

        return <Card.Group items={items} />;
      }
    render() {
        return (
          <Layout>
          <h3>This Test</h3>
          <Grid>
            <Grid.Column width={10}>{this.renderCards()}</Grid.Column>
  
            <Grid.Column width={6}>
              <EnrollForm address = {this.props.address}/>
              <Attempt address = {this.props.address}/>
            </Grid.Column>
          </Grid>
          <Grid>
          <Link route={`/test/at/${this.props.address}/response`}>
              <a>
                <Button primary>Responses</Button>
              </a>
          </Link>
          </Grid>
        </Layout>
        );
      }
}

export default CampaignShow;