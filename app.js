// Require packages and set the port
const express = require('express');

const cors = require('cors');

const bodyParser = require('body-parser');
const routes = require('./routes/routes');

const port = 3002;


const app = express();

app.use(cors());


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true,
}));

routes(app);

// Start the server
const server = app.listen(port, (error) => {
    if (error) return console.log(`Error: ${error}`);
 
    console.log(`Server listening on port ${server.address().port}`);
});

// module.exports = fetch;