import web3 from './web3';
import Test from './build/createTest.json';

const instance = new web3.eth.Contract(
  JSON.parse(Test.interface),
  '0xe2b6A84f4758d68555aaAcA5DBE84804369E9992'
);
//console.log(instance);
export default instance;