
// sample scaffolding
const handler = {};
 
handler.notFoundHandler = (requestPropertise, callback) => {
   callback(400, {
       message: 'this is sample ontFound page',
   });
};
module.exports = handler;
 
