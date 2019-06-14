import web3 from './web3';
import Test from './build/TestFactory.json';

const instance = new web3.eth.Contract(
  JSON.parse(Test.interface),
  '0xEB5D4af1B93fb0F6d0D38F6aef9Ac8db2736080b'
);
//console.log(instance);
export default instance;