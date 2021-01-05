const express = require('express');
const Datastore = require('nedb');

const app = express();
app.listen(4000,()=> console.log('listening to 4000'));
app.use(express.static('public'));
app.use(express.json({limit:'1mb'}));

const database = new Datastore('database.db');
database.loadDatabase();

app.get('/api',(request,response)=>{
	database.find({},(err,data)=>{
		if(err){
			response.end();
			return;
		}
		response.json(data);	
	});
})
app.post('/something',(request,response)=>{
  //console.log(request.body);
  //console.log('Receiving from client, and then I will sending back my response to client');
  const data = request.body;
  const timestamp= Date.now();
  data.timestamp = timestamp;
  database.insert(data);
  response.json(data);
})
