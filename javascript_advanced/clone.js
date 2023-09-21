#!usr/bin/node

const request = require('request');
const fs = require('fs');
const url = 'https://intranet.alxswe.com'

request.get(url).pipe(fs.createWriteStream('intranet.html'));