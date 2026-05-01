const siteNameInput = document.getElementById('siteName');
const siteUrlInput = document.getElementById('siteUrl');
const addBtn = document.getElementById('addBtn');
const bookmarksList = document.getElementById('bookmarksList');

function addBookmark() {
    const siteName = siteNameInput.value.trim();
    let siteUrl = siteUrlInput.value.trim();

    if (!siteName || !siteUrl) {
        alert('Please fill in both fields.');
        return;
    }

    if (!siteUrl.startsWith('http://') && !siteUrl.startsWith('https://')) {
        siteUrl = 'https://' + siteUrl;
    }

    const bookmarkItem = document.createElement('div');
    bookmarkItem.className = 'bookmark-item';

    const link = document.createElement('a');
    link.href = siteUrl;
    link.target = '_blank';
    link.textContent = siteName;

    const deleteBtn = document.createElement('button');
    deleteBtn.className = 'delete-btn';
    deleteBtn.textContent = 'Delete';
    deleteBtn.onclick = function() {
        bookmarkItem.remove();
    };

    bookmarkItem.appendChild(link);
    bookmarkItem.appendChild(deleteBtn);
    bookmarksList.appendChild(bookmarkItem);

    siteNameInput.value = '';
    siteUrlInput.value = '';
    siteNameInput.focus();
}

addBtn.addEventListener('click', addBookmark);
