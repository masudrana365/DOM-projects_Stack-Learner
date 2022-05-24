/*Project Requirement: 
Change the background color by generating random rgb color by clicking a button;
*/


// solving steps:

// step 1: Create onload handler;
window.onload = function(){
    return main();
}

function main(){
    const root = document.getElementById("root");
    const btn = document.getElementById("btn-change");

    btn.addEventListener("click",function(){
        const bgColor = generateRGBColor();
        root.style.backgroundColor = bgColor;
    })
}
// step 2: Random color generator function;
function generateRGBColor(){
    const red = Math.floor(Math.random() * 255);
	const green = Math.floor(Math.random() * 255);
	const blue = Math.floor(Math.random() * 255);

    return `rgb(${red}, ${green}, ${blue})`;
}

// step 3: Collect all necessary reference;

// step 4: Handel the click event;