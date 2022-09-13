const { application } = require('express');
const express = require('express');
const router = express.Router();

const db = require('../modules/pool.js');

// POST
router.post('/', (req, res)=> {
    // console.log('post received');
    let taskAdded = req.body.task;
    const sqlQuery = `
        INSERT INTO tasks (task)
            VALUES ($1);
        `
    
    const sqlValues = [taskAdded];

    db.query(sqlQuery, sqlValues)
        .then((dbRes)=> {
            res.sendStatus(201);
        })
        .catch((dbErr)=> {
            console.log('Error in post /tasks:', dbErr);
        })
})






module.exports = router