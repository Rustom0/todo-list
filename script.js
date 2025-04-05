const inputBox = document.getElementById('input-box');
const listContainer = document.getElementById('list-container');

function addTask() {
    if(inputBox.value === '') {
        alert('Please enter a task!');
    }
    else{
        let li = document.createElement('li');
        li.innerHTML = inputBox.value;
        listContainer.appendChild(li);
        let span = document.createElement('span');
        span.innerHTML = '\u00d7'; // Unicode for multiplication sign (×)
        li.appendChild(span);
    }
    inputBox.value = ''; // Clear the input box after adding the task
    saveData(); // Save the current list to local storage
}

listContainer.addEventListener('click', function(e) {
    if(e.target.tagName === 'LI') {
        e.target.classList.toggle('checked'); // Toggle the 'checked' class on click
        saveData(); // Save the current list to local storage
    }
    else if(e.target.tagName === 'SPAN') {
        e.target.parentElement.remove(); // Remove the task when the span is clicked
        saveData(); // Save the current list to local storage
    }
}, false); // Event delegation to handle clicks on list items and spans

function saveData() {
    localStorage.setItem('data', listContainer.innerHTML); // Save the current list to local storage
}
function showTask() {
    listContainer.innerHTML = localStorage.getItem('data'); // Retrieve and display the saved list from local storage
}
showTask(); // Call showTask to display the saved tasks when the page loads