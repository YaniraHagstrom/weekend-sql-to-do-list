$(document).ready(makeReady);

function makeReady(){
    ///assign click listeners:
    $('#submitBtn').on('click', addTask);
}

function renderTasks(tasks){
    for (task of tasks){
        if (task.completed === false){
            $('#toDoTable').append(`
                <tr data.id= ${task.id}>
                    <td>✅</td>
                    <td>${task.task}</td>
                    <td>🪣</td>
                </tr>
            `)
        }
    else{
        $('#completedList').append(`
            <tr data.id= ${task.id}>
                <td>${task.task}</td>
                <td>${task.dateCompleted}</td>
            </tr>
        `
        )
    }
    }
}

function fetchTasks() {
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

}




