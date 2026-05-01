const addNoteBtn = document.getElementById('addNoteBtn');
const notesContainer = document.getElementById('notesContainer');

function addNote() {
    const note = document.createElement('div');
    note.className = 'note';

    const header = document.createElement('div');
    header.className = 'note-header';

    const deleteBtn = document.createElement('button');
    deleteBtn.className = 'delete-btn';
    deleteBtn.innerHTML = '✖';
    deleteBtn.onclick = function() {
        note.remove();
    };

    const textarea = document.createElement('textarea');
    textarea.placeholder = "Write your note here...";

    header.appendChild(deleteBtn);
    note.appendChild(header);
    note.appendChild(textarea);

    notesContainer.appendChild(note);
}

addNoteBtn.addEventListener('click', addNote);

// Add an initial note
addNote();
