var cloudant = require('cloudant');
var cloudantCredentials = require('../cloudantConfig.json');

cloudant = cloudant({
   account: cloudantCredentials.CLOUDANT_USERNAME,
   password: cloudantCredentials.CLOUDANT_PASSWORD
});

var database = cloudant.db.use('questions-collector');

//driver de inserção de dados no cloudant
function insertQuestion(payload) {
   var insertionPayload = {
      question: payload.question
   }

   return new Promise((resolve, reject) => {
      database.insert(payload, function(err, body) {
         if (err) {
            console.log('User database insertion Error \n\n');
            console.log(err);
            reject(err);
         }

         resolve(body);
         console.log('Question inserted with success! :)');
      });
   });
}

module.exports = {
   insertQuestion: insertQuestion
}
