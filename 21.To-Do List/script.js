const taskInput = document.getElementById('taskInput');
const addBtn = document.getElementById('addBtn');
const taskList = document.getElementById('taskList');

function addTask() {
    const taskText = taskInput.value.trim();
    if (taskText === '') return;

    const li = document.createElement('li');
    
    const span = document.createElement('span');
    span.textContent = taskText;
    li.appendChild(span);

    const actions = document.createElement('div');
    actions.className = 'actions';

    const completeBtn = document.createElement('button');
    completeBtn.textContent = '✓';
    completeBtn.className = 'complete-btn';
    completeBtn.onclick = () => li.classList.toggle('completed');

    const deleteBtn = document.createElement('button');
    deleteBtn.textContent = '✗';
    deleteBtn.className = 'delete-btn';
    deleteBtn.onclick = () => li.remove();

    actions.appendChild(completeBtn);
    actions.appendChild(deleteBtn);
    li.appendChild(actions);

    taskList.appendChild(li);
    taskInput.value = '';
}

addBtn.addEventListener('click', addTask);
taskInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') addTask();
});
