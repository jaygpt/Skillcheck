import web3 from './web3';
import College from './build/College.json';

const instance = new web3.eth.Contract(
  JSON.parse(College.interface),
  '0xBf138261B59A6D2FFaFf362b7bfD6be0165B85e5'
);

export default instance;