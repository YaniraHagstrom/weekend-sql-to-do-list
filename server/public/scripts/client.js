$(document).ready(makeReady);

function makeReady(){
    ///assign click listeners:
    $('#submitBtn').on('click', addTask);
}

function renderTasks(){
    // for (task of tasks){}
    // $('#toDoTable').append(`
    //     <tr data.id= ${}>
    //         <td>✅</td>
    //         <td>${}</td>
    //         <td>🪣</td>
    //     </tr>
    // `)

}

function fetchTasks() {
    $.ajax({
    
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




