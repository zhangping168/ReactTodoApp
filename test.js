var moment = require('moment');
console.log(moment().format());

var now = moment();
console.log('unix timestamp',now.unix());

var currentTime = moment.unix(now);
console.log('currentTime',currentTime.format());
