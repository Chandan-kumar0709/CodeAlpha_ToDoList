document.getElementById('addTask').addEventListener('click', function() {
    const taskInput = document.getElementById('taskInput');
    const taskText = taskInput.value.trim();
    
    if (taskText) {
        const li = document.createElement('li');
        
        li.innerHTML = `
            <span class="task-text">${taskText}</span>
            <span class="delete">❌</span>
        `;
        
        li.querySelector('.delete').addEventListener('click', function() {
            li.remove();
        });

        li.querySelector('.task-text').addEventListener('click', function() {
            li.classList.toggle('checked');
        });

        document.getElementById('taskList').appendChild(li);
        taskInput.value = '';
    } else {
        alert('Please enter a task.');
    }
});
