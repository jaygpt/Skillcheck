import web3 from './web3';
import Wallet from './build2/Wallet.json';

export default address => {
  return new web3.eth.Contract(JSON.parse(Wallet.interface), address);
};