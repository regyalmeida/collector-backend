var driver = require("../driver/driver");

function insertQuestion(question,response){
    driver.insertQuestion(question)
    .then((resp)=>{
        response.send(resp);
    })
    .catch((err)=>{
        response.status(500).send("Database insertion error")
    });
}

module.exports = {
   insertQuestion:insertQuestion
}
