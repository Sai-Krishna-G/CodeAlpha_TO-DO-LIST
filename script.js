document.addEventListener('DOMContentLoaded', function () {
    const taskInput = document.getElementById('taskInput');
    const taskDateInput = document.getElementById('taskDate');
    const addTaskButton = document.getElementById('addTask');
    const taskList = document.getElementById('taskList');

    addTaskButton.addEventListener('click', function () {
        const taskText = taskInput.value.trim();
        const taskDate = taskDateInput.value;

        if (taskText !== '') {
            const li = document.createElement('li');
            li.innerHTML = `
            <input type="checkbox" class="complete-checkbox">
            <span>${taskText} (Due: ${taskDate})</span>
            <i class="fas fa-edit edit-task"></i>
            <i class="fas fa-trash delete-task"></i>
            `;
            taskList.appendChild(li);
            taskInput.value = '';
            taskDateInput.value = '';

            const editButton = li.querySelector('.edit-task');
            const deleteButton = li.querySelector('.delete-task');
            const checkbox = li.querySelector('.complete-checkbox');     
            deleteButton.addEventListener('click', function () {
                taskList.removeChild(li);
            });

            editButton.addEventListener('click', function () {
                const newText = prompt('Edit task:', taskText);
                if (newText !== null) {
                    li.querySelector('span').textContent = newText + ` (Due: ${taskDate})`;
                }
            });
      
            checkbox.addEventListener('change', function () {
                if (checkbox.checked) {
                    li.style.textDecoration = 'line-through';
                } else {
                    li.style.textDecoration = 'none';
                }
            });
        }
    });

    taskInput.addEventListener('keypress', function (e) {
        if (e.key === 'Enter') {
            addTaskButton.click();
        }
    });
});
