const express = require('express');
const app = express();
app.listen(4000,()=> console.log('listening to 4000'));
app.use(express.static('public'));
app.use(express.json({limit:'1mb'}));

app.post('/api',(request,response)=>{
  console.log(request.body);
  const data = request.body;
  response.json({
  	status:'success',
  	latitude:data.lat,
  	longitude:data.lon
  });
})
