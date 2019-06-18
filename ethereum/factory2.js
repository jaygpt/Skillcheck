import web3 from './web3';
import Test from './build/TestFactory.json';

const instance = new web3.eth.Contract(
  JSON.parse(Test.interface),
  '0x3B30fD65fB7F419d4352265c03efA23329423e84'
);
//console.log(instance);
export default instance;