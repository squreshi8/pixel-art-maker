// Select color input
var color = document.getElementById('colorPicker')
// Select size input
var grid = document.getElementById('pixelCanvas')
var size = document.getElementById('sizePicker')
var gridheight = document.getElementById('inputHeight')
var gridwidth = document.getElementById('inputWidth')

// When size is submitted by the user, call makeGrid()

size.addEventListener('submit', function(event) {
    event.preventDefault();
    makeGrid(gridheight.value, gridwidth.value);
})

function makeGrid(gridheight, gridwidth) {
grid.innerHTML = "";
for (let i = 0; i < gridheight; i++) {
    let row = grid.insertRow(i);
    for (let j = 0; j < gridwidth; j++) {
        let cell = row.insertCell(j);
        cell.addEventListener('click',(event)=>{
            cell.style.backgroundColor = color.value;
        });
    }
}
}

