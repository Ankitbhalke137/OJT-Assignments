const nameInput = document.getElementById('name');
const ageInput = document.getElementById('age');
const courseInput = document.getElementById('course');
const addBtn = document.getElementById('addBtn');
const studentList = document.getElementById('studentList');

addBtn.addEventListener('click', function() {
    const name = nameInput.value.trim();
    const age = ageInput.value.trim();
    const course = courseInput.value.trim();

    if (!name || !age || !course) {
        alert('Please fill in all fields.');
        return;
    }

    const tr = document.createElement('tr');
    
    tr.innerHTML = `
        <td>${name}</td>
        <td>${age}</td>
        <td>${course}</td>
        <td><button class="delete-btn">Delete</button></td>
    `;

    const deleteBtn = tr.querySelector('.delete-btn');
    deleteBtn.addEventListener('click', function() {
        tr.remove();
    });

    studentList.appendChild(tr);

    nameInput.value = '';
    ageInput.value = '';
    courseInput.value = '';
    nameInput.focus();
});
