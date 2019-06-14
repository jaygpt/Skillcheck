const path = require('path');
const solc = require('solc');
const fs = require('fs-extra');

const buildPath = path.resolve(__dirname, 'build');
fs.removeSync(buildPath);
const campaignPath = path.resolve(__dirname, 'Contracts', 'College.sol');

const source = fs.readFileSync(campaignPath, 'utf8');
console.log(source);
const output = solc.compile(source, 1).contracts;
// use only contract property
console.log('s');
fs.ensureDirSync(buildPath);
// create build folder

for (let contract in output) {
  console.log('done');
  fs.outputJsonSync(
    path.resolve(buildPath, contract.replace(':','') + '.json'),
    output[contract]
  );
}