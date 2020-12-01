// Please see documentation at https://docs.microsoft.com/aspnet/core/client-side/bundling-and-minification
// for details on configuring this project to bundle and minify static web assets.

// Write your JavaScript code.
function AddNewTask(){
    
    const div = document.createElement('div');

    div.innerHTML = '<div class="sticky">Sticky text</div>';

    document.getElementById('oneTask').appendChild(div);
    console.log("calling f(x) successfully")
}

function AddText(){
    let currentText = prompt("", "Enter task")
     document.getElementById('oneTask').innerHTML = currentText;
    
    console.log(currentText);
    
}