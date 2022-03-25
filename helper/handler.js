/**
* handle request
*
*/
// dependanchy
const url = require('url');
const { StringDecoder } = require('string_decoder');
const { routes } = require('../routes');
const { notFoundHandler } = require('../handler/notFoundHandler');
// handle scaffolding
const handlar = {};
 
// handle request and response
handlar.handleReqRes = (req, res) => {
   // handle request
   const parseUrl = url.parse(req.url, true);
   const path = parseUrl.pathname;
   const trimmedPath = path.replace(/^\/+|\/+$/g, '');
   const method = req.method.toLowerCase();
   const queryString = parseUrl.query;
   const headersObject = req.headers;
   const requestPropertise = {
       parseUrl,
       path,
       trimmedPath,
       method,
       queryString,
       headersObject,
   };
   const decoder = new StringDecoder('utf-8');
   let realData = '';
 
   const chooseHandler = routes[trimmedPath] ? routes[trimmedPath] : notFoundHandler;
   chooseHandler(requestPropertise, (statusCode, payload) => {
       statusCode = typeof statusCode === 'number' ? statusCode : 500;
       payload = typeof payload === 'object' ? payload : {};
       const payloadString = JSON.stringify(payload);
       // return final response
       res.writeHead(statusCode);
       res.end(payloadString);
   });
   req.on('data', (buffer) => {
       realData += decoder.write(buffer);
   });
 
   req.on('end', () => {
       realData += decoder.end();
       console.log('hello ,this is realData:', realData);
       res.end('hello world and programmer postmen lorem');
   });
};
module.exports = handlar;
 
