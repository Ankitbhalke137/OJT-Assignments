function allowDrop(ev) {
    ev.preventDefault();
}

function drag(ev) {
    ev.dataTransfer.setData("text", ev.target.id);
}

function drop(ev) {
    ev.preventDefault();
    var data = ev.dataTransfer.getData("text");
    
    // Prevent dropping inside another card
    if(ev.target.className === "column") {
        ev.target.appendChild(document.getElementById(data));
    }
}
