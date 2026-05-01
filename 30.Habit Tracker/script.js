const habitInput = document.getElementById('habitInput');
const addBtn = document.getElementById('addBtn');
const habitList = document.getElementById('habitList');

function addHabit() {
    const habitText = habitInput.value.trim();
    if (!habitText) {
        alert("Please enter a habit.");
        return;
    }

    const li = document.createElement('li');
    
    const span = document.createElement('span');
    span.className = 'habit-name';
    span.textContent = habitText;

    const actions = document.createElement('div');
    actions.className = 'actions';

    const checkBtn = document.createElement('button');
    checkBtn.className = 'check-btn';
    checkBtn.textContent = '✔';
    
    checkBtn.addEventListener('click', function() {
        checkBtn.classList.toggle('completed');
        li.classList.toggle('completed-bg');
    });

    actions.appendChild(checkBtn);
    li.appendChild(span);
    li.appendChild(actions);

    habitList.appendChild(li);
    habitInput.value = '';
    habitInput.focus();
}

addBtn.addEventListener('click', addHabit);
habitInput.addEventListener('keypress', function(e) {
    if (e.key === 'Enter') addHabit();
});
