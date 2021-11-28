//setup
const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

//definiera inkommande JSON data
const options = {
  limit: '10kb', 
  type: 'application/json'
};
app.use(express.json(options));
app.use(express.urlencoded({ extended: true }));

//serve static assets from 'public'
app.use(express.static('public'));


//Routes HTTP POST requests to the specified path och callback
app.post('/api', (req, res) => {
  var temp = req.body.temp;
  var humid = req.body.humid;
  

  console.log(temp + " Celcius");
  console.log(humid + " %");


  //Sends a JSON response
  res.json({
    temp: temp,
    humid: humid
  });
});

app.listen(port, function() {
 console.log('Open: http://localhost:' + port);
});