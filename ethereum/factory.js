import web3 from './web3';
import College from './build/College.json';

const instance = new web3.eth.Contract(
  JSON.parse(College.interface),
  '0x4527eE10F3aB0ED75535A37D54F74fD64e508f3F'
);
//console.log(instance);
export default instance;