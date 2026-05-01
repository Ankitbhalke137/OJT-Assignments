const outer = document.getElementById('outer');
const inner = document.getElementById('inner');
const btn = document.getElementById('btn');
const log = document.getElementById('log');
const clearBtn = document.getElementById('clearBtn');
const stopProp = document.getElementById('stopProp');

function addLog(msg, color) {
    const li = document.createElement('li');
    li.textContent = msg;
    li.style.color = color;
    log.appendChild(li);
    log.scrollTop = log.scrollHeight;
}

outer.addEventListener('click', function(e) {
    addLog('Outer Box clicked! (Bubbled)', '#3498db');
    this.style.transform = 'scale(1.02)';
    setTimeout(() => this.style.transform = 'scale(1)', 200);
});

inner.addEventListener('click', function(e) {
    if (stopProp.checked) {
        e.stopPropagation();
        addLog('Inner Box clicked! (Propagation Stopped)', '#e74c3c');
    } else {
        addLog('Inner Box clicked! (Bubbling...)', '#e74c3c');
    }
});

btn.addEventListener('click', function(e) {
    addLog('Button clicked! (Bubbling...)', '#f39c12');
});

clearBtn.addEventListener('click', () => {
    log.innerHTML = '';
});
