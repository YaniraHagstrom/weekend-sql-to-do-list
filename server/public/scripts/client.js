$(document).ready(makeReady);

let trash = `<svg xmlns="http://www.w3.org/2000/svg" type="button" width="16" height="16" fill="currentColor" class="deleteBtn bi bi-trash" viewBox="0 0 16 16" data-bs-toggle="tooltip" data-bs-placement="top"
data-bs-custom-class="custom-tooltip"
data-bs-title="Delete">
<path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z"/>
<path fill-rule="evenodd" d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"/>
</svg>`

let check = `<svg xmlns="http://www.w3.org/2000/svg" type="button" width="16" height="16" fill="currentColor" class="completeBtn bi bi-check2-square" viewBox="0 0 16 16" data-bs-toggle="tooltip" data-bs-placement="top"
data-bs-custom-class="custom-tooltip"
data-bs-title="Complete">
<path d="M3 14.5A1.5 1.5 0 0 1 1.5 13V3A1.5 1.5 0 0 1 3 1.5h8a.5.5 0 0 1 0 1H3a.5.5 0 0 0-.5.5v10a.5.5 0 0 0 .5.5h10a.5.5 0 0 0 .5-.5V8a.5.5 0 0 1 1 0v5a1.5 1.5 0 0 1-1.5 1.5H3z"/>
<path d="m8.354 10.354 7-7a.5.5 0 0 0-.708-.708L8 9.293 5.354 6.646a.5.5 0 1 0-.708.708l3 3a.5.5 0 0 0 .708 0z"/>
</svg>`

function makeReady(){
    ///assign click listeners:
    $('#submitBtn').on('click', addTask);
    $(document).on('click', '.deleteBtn', deleteTask);
    $('#toDoTable').on('click', '.completeBtn', completeTask);
    fetchTasks();
}

function completeTask(){
    let idToComplete = $(this).closest('tr').data('id');
    console.log(idToComplete)
    $.ajax({
        method: 'PUT',
        url: `tasks/${idToComplete}`
    }).then((dbRes)=> {
        fetchTasks();
    })
}


function renderTasks(tasks){
    for (task of tasks){
        console.log(task.datecompleted)
        if (!task.completed){
            $('#toDoTable').append(`
                <tr data-id= ${task.id}>
                    <td>
                        ${check}
                    </td>
                    <td>${task.task}</td>
                    <td>
                        ${trash}
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
                        ${trash}
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
    $.ajax({
        method: 'DELETE',
        url: `/tasks/${idToDelete}`
    })
    .then((dbRes)=> {
        fetchTasks();
    })
}




