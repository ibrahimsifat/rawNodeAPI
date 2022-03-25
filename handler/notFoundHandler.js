
// sample scaffolding
const handler = {};
 
handler.notFoundHandler = (requestProperties, callback) => {
   console.log(requestProperties);
    callback(400, {
       message: 'this is sample ontFound page',
   });
};
module.exports = handler;
 
