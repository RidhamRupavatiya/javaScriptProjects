const body = document.body;
const Text = document.querySelector('.Text')

Text.addEventListener("click",changeBackGroundColor);

function changeBackGroundColor(){
    const randomColor = getRandomColor();  // #fffcd4--hexa Decemal Code
    body.style.backgroundColor = randomColor;

    // ---Change Text Or Color Code--
    const newh2 = document.createElement('h2');
    // newh2.innerHTML = randomColor;
    // newh2.appendChild(document.createTextNode(randomColor));
    // document.querySelector('h2').appendChild(newh2);
    newh2.appendChild(document.createTextNode(randomColor));
    document.querySelector('h2').replaceWith(newh2);
}

function getRandomColor(){
    const letter = "0123456789abcdef"
    let color = "#";

    for(let i=0 ; i<6 ; i++){
        color += letter[Math.floor(Math.random()*16)];
    }
    console.log(color);
    return color;
}

