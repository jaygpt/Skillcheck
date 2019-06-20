import web3 from './web3';
import College from './build2/College.json';

const instance = new web3.eth.Contract(
  JSON.parse(College.interface),
  '0xc587ba9f7B0B2110FBc43E816EB14293f3EB8A67'
);
//console.log(instance);
export default instance;