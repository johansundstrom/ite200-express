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
  var h_temp = req.headers.h_temp;
  var h_humid = req.headers.h_humid;
  var b_temp = req.body.b_temp;
  var b_humid = req.body.b_humid;

  if(h_temp) {
    console.log("h_temp: " + h_temp);
  }
  if(h_humid) {
    console.log("h_humid: " + h_humid);
  }
  if(b_temp) {
    console.log("b_temp: " + b_temp);
  }
  if(b_humid) {
    console.log("b_humid: " + b_humid);
  }
  
  

  //Sends a JSON response
  res.json({
    h_temp: h_temp,
    h_humid: h_humid,
    b_temp: b_temp,
    b_humid: b_humid
  });
});

app.listen(port, function() {
 console.log('Open: http://localhost:' + port);
});