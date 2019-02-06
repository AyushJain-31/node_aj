const express = require('express');
const app = express();

app.get('/',(req,res)=>{
  res.sendFile(__dirname+'/index.html');
});

app.listen(3069);
console.log("Server is up and running - Listening on 3015");
