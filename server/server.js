const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const PORT = process.env.PORT || 5000;
// CONST for importing modules
// CONST for importing router

app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static('server/public'));

// ROUTES


// Start listening for requests on a specific port
app.listen(PORT, () => {
    console.log(`Connected to: http://localhost:${PORT}`);
});