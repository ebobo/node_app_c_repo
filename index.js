const appAinfo = require('node_app_a/info');
const appBinfo = require('node_app_b/info');
const info = require('./info');

console.log(appAinfo.about(), ' Version:', appAinfo.version());
console.log(appBinfo.about(), ' Version:', appBinfo.version());

console.log(info.about(), ' Version:', info.version());
