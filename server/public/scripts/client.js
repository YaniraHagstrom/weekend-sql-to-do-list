$(document).ready(makeReady);

function makeReady(){
    ///assign click listeners:
    $('#submitBtn').on('click', addTask);
    $('#toDoTable').on('click', '.deleteBtn', deleteTask);
    $('#completedList').on('click', '.deleteBtn', deleteTask);
    $('#toDoTable').on('click', '.completeBtn', completeTask);
    fetchTasks();
}

function completeTask(){
    let idToComplete = $(this).closest('tr').data('id');
    $.ajax({
        method: 'PUT',
        url: `tasks/${idToComplete}`
    }).then((dbRes)=> {
        fetchTasks();
    })
}


function renderTasks(tasks){
    for (task of tasks){
        if (!task.completed){
            $('#toDoTable').append(`
                <tr data-id= ${task.id}>
                    <td>
                        <button class='completeBtn'>✅</button>
                    </td>
                    <td>${task.task}</td>
                    <td>
                        <button class='deleteBtn'>🪣</button>
                    </td>
                </tr>
            `)
        }
    else{
        $('#completedList').append(`
            <tr data-id= ${task.id}>
                <td>${task.task}</td>
                <td>${task.dateCompleted}</td>
                <td class='deleteBtn'>
                    <button>🪣</button>
                </td>
            </tr>
        `)
        }
    }
}

function fetchTasks() {
    $('#toDoTable').empty();
    $('#completedList').empty();
    $.ajax({
        method: 'GET',
        url: '/tasks'
    })
    .then((tasks)=> {
        // console.log(tasks);
        renderTasks(tasks);
    })
}

function addTask(){
    $.ajax({
        method: 'POST',
        url: '/tasks',
        data: {
            task: $('#taskInput').val()
        }
    })
    .then((dbRes)=> {
        $('#taskInput').val('');
        fetchTasks();
    })


}

function deleteTask(){
    // get id of task to delete:
    let idToDelete = $(this).closest('tr').data('id');
    console.log(idToDelete);
    $.ajax({
        method: 'DELETE',
        url: `/tasks/${idToDelete}`
    })
    .then((dbRes)=> {
        fetchTasks();
    })
}




