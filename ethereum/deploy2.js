const HDWalletProvider = require('truffle-hdwallet-provider');
const Web3 = require('web3');
const Test = require('./build2/TestFactory.json');

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
    .deploy({ data: '0x' + Test.bytecode, arguments: ['Hi there!'] })

    .send({ gas: '2500000', from: accounts[0] });

  console.log('Contract deployed to', result.options.address);
};
deploy();