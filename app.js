// npm - global command, comes with node
// npm --version to know the version of npm package manager
//npm i <packagename> to install it locally
//global dependency  - use it in any project
// npm install -g <packageName> //sudo npm in MAC
//package.json // mannual approack/ npm init (step by step) npm init -y

const _ = require('lodash')

const items = [1,[2,[3,[4]]]]
const newItems = _.flattenDeep(items);
console.log(newItems);