import web3 from './web3';
import College from './build2/College.json';

const instance = new web3.eth.Contract(
  JSON.parse(College.interface),
  '0x2653A49778A41e552861B8375aBB68681A2783a1'
);
//console.log(instance);
export default instance;