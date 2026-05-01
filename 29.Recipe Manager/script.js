const recipeTitleInput = document.getElementById('recipeTitle');
const recipeDescInput = document.getElementById('recipeDesc');
const addBtn = document.getElementById('addBtn');
const recipesContainer = document.getElementById('recipesContainer');

addBtn.addEventListener('click', () => {
    const title = recipeTitleInput.value.trim();
    const desc = recipeDescInput.value.trim();

    if (!title || !desc) {
        alert("Please enter both title and description.");
        return;
    }

    const card = document.createElement('div');
    card.className = 'recipe-card';

    const h3 = document.createElement('h3');
    h3.className = 'recipe-title';
    h3.textContent = title;

    const p = document.createElement('p');
    p.className = 'recipe-desc';
    p.textContent = desc;

    const deleteBtn = document.createElement('button');
    deleteBtn.className = 'delete-btn';
    deleteBtn.textContent = 'Delete';
    deleteBtn.onclick = () => card.remove();

    card.appendChild(h3);
    card.appendChild(p);
    card.appendChild(deleteBtn);

    // Padding bottom to accommodate absolute delete button
    card.style.paddingBottom = '50px';

    recipesContainer.appendChild(card);

    recipeTitleInput.value = '';
    recipeDescInput.value = '';
    recipeTitleInput.focus();
});
