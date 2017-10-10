var http = require('http');
var url = require('url');

var adr = 'http://localhost:8080/default.htm?year=2017&month=february';
var q = url.parse(adr, true);

console.log(q.host);
console.log(q.pathname);
console.log(q.search);
console.log(q.query);

var qdata = q.query;

console.log(qdata.month);

//console.log('Server running on port 8080.');