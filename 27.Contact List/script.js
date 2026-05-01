const contactNameInput = document.getElementById('contactName');
const contactPhoneInput = document.getElementById('contactPhone');
const addBtn = document.getElementById('addBtn');
const contactList = document.getElementById('contactList');

addBtn.addEventListener('click', function() {
    const name = contactNameInput.value.trim();
    const phone = contactPhoneInput.value.trim();

    if (!name || !phone) {
        alert('Please enter both name and phone number.');
        return;
    }

    if (!/^\d+$/.test(phone)) {
        alert('Phone number must contain only digits.');
        return;
    }

    const li = document.createElement('li');
    li.className = 'contact-item';

    const infoDiv = document.createElement('div');
    infoDiv.className = 'contact-info';
    infoDiv.innerHTML = `<span class="contact-name">${name}</span><span class="contact-phone">${phone}</span>`;

    const deleteBtn = document.createElement('button');
    deleteBtn.className = 'delete-btn';
    deleteBtn.textContent = 'Delete';
    deleteBtn.onclick = function() {
        li.remove();
    };

    li.appendChild(infoDiv);
    li.appendChild(deleteBtn);
    contactList.appendChild(li);

    contactNameInput.value = '';
    contactPhoneInput.value = '';
    contactNameInput.focus();
});
