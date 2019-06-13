const HDWalletProvider = require('truffle-hdwallet-provider');
const Web3 = require('web3');
const Test = require('./build/createTest.json');

const provider = new HDWalletProvider(
  'tornado drift hold side supreme either supreme nurse stem deal rack orange',
  'https://rinkeby.infura.io/orDImgKRzwNrVCDrAk5Q'
);

const web3 = new Web3(provider);

const deploy = async () => {
  const accounts = await web3.eth.getAccounts();

  console.log('Attempting to deploy from account', accounts[0]);

  const result = await new web3.eth.Contract(
    JSON.parse(Test.interface)
  )
    .deploy({ data: Test.bytecode })
    .send({ gas: '1000000', from: accounts[0] });

  console.log('Contract deployed to', result.options.address);
};
deploy();