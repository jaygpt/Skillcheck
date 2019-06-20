import web3 from './web3';
import Test from './build2/TestFactory.json';

const instance = new web3.eth.Contract(
  JSON.parse(Test.interface),
  '0xDea06D482cDEC35d9503404Fb0E9D7959aA87032'
);
//console.log(instance);
export default instance;