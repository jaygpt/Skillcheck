import web3 from './web3';
import Test from './build2/TestFactory.json';

const instance = new web3.eth.Contract(
  JSON.parse(Test.interface),
  '0x0FefC7d92677BaCaea09A11b027844972c89FB1a'
);
//console.log(instance);
export default instance;