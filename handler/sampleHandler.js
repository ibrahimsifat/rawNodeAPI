
// sample scaffolding
const handler = {};
 
handler.sampleHandler = (requestProperties, callback) => {
    console.log(requestProperties);
   callback(200, {
       message: 'this is sample handler page',
   });
};
module.exports = handler;
 
