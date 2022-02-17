document.getElementById("generate").addEventListener("click", generate);

const colorMap = new Map();
var usedColors = 0;

var colors = [`#efc050`,`#00FF00`,`#FF0000`,`#0000FF`,`#008B8B`,`#FFF8DC`,`#E6E6FA`,`#E0FFFF`,`#B0C4DE`]

function resetAll(){
    let container = document.getElementById("container");
    container.innerHTML = "";
    container.style.setProperty("width", `0px`);
    container.style.setProperty("height", `0px`);
    usedColors = 0;
    colorMap.clear();
}

function generate(){
    let container = document.getElementById("container");
    resetAll();
    // get info here on the size:
    let n = parseInt(getNValue());
    let m = parseInt(getMValue());

    let size_n = 50;
    let width = n * size_n;
    let size_m = 50;
    let height = m * size_m;

    container.style.setProperty("width", `${width}px`);
    container.style.setProperty("height", `${height}px`);
    container.style.setProperty("grid-template-columns", `repeat(${n},${size_n}px)`);
    container.style.setProperty("grid-template-row", `repeat(${m},${size_m}px)`);

    var array = getText();
    for(let i = 0; i < n * m; i++){
        new_box = document.createElement("div");
        new_box.style.setProperty("border", "1px solid black");
        var color = getColor(array[i]);
        new_box.innerHTML = `<p>` + array[i] + `</p>`;
        new_box.style.setProperty("background-color", color);
        new_box.style.setProperty("color", "black");
        new_box.style.setProperty("display", "flex");
        new_box.style.setProperty("justify-content", "center");
        new_box.style.setProperty("align-items", "center");
        new_box.id = i;
        container.append(new_box);
    }
}

function getColor(number)
{
    if (colorMap.get(number) != undefined)
    {
        return colorMap.get(number);
    }
    
    colorMap.set(number, generateColor());
    return colorMap.get(number)
}

function generateColor()
{
    var color = colors[usedColors];
    usedColors += 1;
    return color;
}

function getInputValue(){
            // Selecting the input element and get its value 
            var inputVal = document.getElementById("myInput").value;
            
            // Displaying the value
            alert(inputVal);
        }

function getNValue() {
    var inputVal = document.getElementById("size_n").value;
    return inputVal;
}

function getMValue() {
    var inputVal = document.getElementById("size_m").value;
    return inputVal;
}

function getText() {
    var input = document.getElementById("matrix").value.split(RegExp("' '|,|\]|\\["));
    var array = [];
    console.log(input);
    for(let i = 0; i < input.length; i++)
    {   if (input[i] != "") {
            array.push(input[i].replaceAll("\"",''));
        }
    }
    return array;
}