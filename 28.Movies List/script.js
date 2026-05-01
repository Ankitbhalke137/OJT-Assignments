const movieInput = document.getElementById('movieInput');
const addBtn = document.getElementById('addBtn');
const movieList = document.getElementById('movieList');

function addMovie() {
    const movieTitle = movieInput.value.trim();
    if (!movieTitle) {
        alert("Please enter a movie title.");
        return;
    }

    const li = document.createElement('li');
    li.textContent = movieTitle;

    const removeBtn = document.createElement('button');
    removeBtn.textContent = 'Remove';
    removeBtn.className = 'remove-btn';
    removeBtn.onclick = () => li.remove();

    li.appendChild(removeBtn);
    movieList.appendChild(li);

    movieInput.value = '';
    movieInput.focus();
}

addBtn.addEventListener('click', addMovie);
movieInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') addMovie();
});
