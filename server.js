const path = require('path');
const bodyParser = require('body-parser');
const express = require('express');

const app = express();

//BodyParser setup
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

// Serve static assets
app.use(express.static(path.join(__dirname, 'public')));

// Require Our Routes
const apiRoutes = require('./app/controllers/apiRoutes.js');
app.use('/api', apiRoutes);

// Listen on port.
app.listen(process.env.PORT || 3000,function(){
  process.env.PORT == undefined? console.log("App listening on PORT 3000"):console.log("App listening on PORT" + process.env.PORT);
});