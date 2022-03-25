
// sample scaffolding
const handler = {};
 
handler.sampleHandler = (requestPropertise, callback) => {
   callback(200, {
       message: 'this is sample handler page',
   });
};
module.exports = handler;
 
