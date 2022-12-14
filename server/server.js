const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const PORT = process.env.PORT || 5000;
const taskRouter = require('./routes/tasks.router.js')


app.use(bodyParser.urlencoded({extended: true}));
app.use('/tasks', taskRouter);
app.use(express.static('server/public'));


// Start listening for requests on a specific port
app.listen(PORT, () => {
    console.log(`Connected to: http://localhost:${PORT}`);
});