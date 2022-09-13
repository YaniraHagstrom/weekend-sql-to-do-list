const { application } = require('express');
const express = require('express');
const router = express.Router();

const db = require('../modules/pool.js');

// POST
router.post('/', (req, res)=> {
    // console.log('post received');
    let taskAdded = req.body.task;
    // let taskCompleted = req.bod
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
            console.log('Error in POST /tasks:', dbErr);
        })
})

// PUT 
router.put('/:id',(req, res)=> {
    let idToComplete = req.params.id;
    const sqlQuery = `
        UPDATE tasks
            SET completed = TRUE
            WHERE id = $1;
        `

    const sqlValues = [idToComplete];
    db.query(sqlQuery,sqlValues)
    .then((dbRes)=> {
        res.sendStatus(200);
    })
    .catch((dbErr)=> {
        console.log('Error in PUT /tasks:', dbErr);
    })
})

// GET 
router.get('/', (req, res) => {
    const sqlQuery = `
        SELECT * FROM tasks;
    `
    db.query(sqlQuery)
        .then((dbRes) => {
            res.send(dbRes.rows);
        })
        .catch((dbErr)=> {
            console.log('Error in GET /tasks:', dbErr);
        })

})

// DELETE 
router.delete('/:id', (req, res)=> {
    // console.log('delete')
    let taskID = req.params.id;
    const sqlQuery = `
        DELETE FROM tasks
            WHERE id = $1;
        `
    const sqlValues = [taskID];

    db.query(sqlQuery, sqlValues)
        .then((dbRes)=> {
            res.sendStatus(200);
        })
        .catch((dbErr)=> {
            console.log('Error in DELETE /tasks:', dbErr);
        })
})

//



module.exports = router