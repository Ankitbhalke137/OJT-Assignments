const itemInput = document.getElementById('itemInput');
const addBtn = document.getElementById('addBtn');
const shoppingList = document.getElementById('shoppingList');

function addItem() {
    const itemText = itemInput.value.trim();
    if (itemText === '') {
        alert('Please enter an item!');
        return;
    }

    const li = document.createElement('li');
    li.textContent = itemText;

    const deleteBtn = document.createElement('button');
    deleteBtn.textContent = 'Remove';
    deleteBtn.className = 'delete-btn';
    deleteBtn.onclick = function() {
        li.remove();
    };

    li.appendChild(deleteBtn);
    shoppingList.appendChild(li);
    itemInput.value = '';
    itemInput.focus();
}

addBtn.addEventListener('click', addItem);
itemInput.addEventListener('keypress', function(e) {
    if (e.key === 'Enter') addItem();
});
