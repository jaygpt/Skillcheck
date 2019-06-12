import web3 from './web3';
import College from './build/College.json';

const instance = new web3.eth.Contract(
  JSON.parse(College.interface),
  '0x54A22b31d1EaA6B494694380A012f364B81a02AA'
);
//console.log(instance);
export default instance;