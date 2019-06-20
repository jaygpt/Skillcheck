const path = require('path');
const solc = require('solc');
const fs = require('fs-extra');

const buildPath = path.resolve(__dirname, 'build2');
fs.removeSync(buildPath);
const campaignPath = path.resolve(__dirname, 'Contracts', 'Test.sol');

const source = fs.readFileSync(campaignPath, 'utf8');
const output = solc.compile(source, 1).contracts;
// use only contract property
console.log('s');
fs.ensureDirSync(buildPath);
// create build folder

for(let contracts in output) {
  console.log('done');
  fs.outputJsonSync(
    path.resolve(buildPath, contracts.replace(':','') + '.json'),
    output[contracts]
  );
}
