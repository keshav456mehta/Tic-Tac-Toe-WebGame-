let boxes = document.querySelectorAll(".box");
let resetBtn = document.querySelector("#reset");
let newBtn = document.querySelector("#newBtn");
let msg = document.querySelector(".msg");
let msgPara = document.querySelector("#msgP");
let choiceX = document.querySelector("#x");
let choiceY = document.querySelector("#o");
let player = "";

let turnO = true;
const winPatterns = 
[
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8]
];

choiceX.addEventListener("click", () =>
{
    player = "X";
    turnO = false;

});

choiceY.addEventListener("click", () =>
{
    player = "O";
    turnO = true;

});

const reset = () => 
{
    turnO =  true;
    enableBoxes();
    msg.classList.add("hide");
}

boxes.forEach((box) => {
    box.addEventListener("click", () => {
        if (turnO === true)
        {
            box.innerText = "O";
            turnO = false;
        }
        else
        {
            box.innerText = "X";
            turnO = true;
        }
        box.disabled = true;
        checkWinner();
    });
});

const disableBoxes = () => 
{
    for(let box of boxes)
    {
        box.disabled = true;
    }
}

const enableBoxes = () => 
{
    for(let box of boxes)
    {
        box.disabled = false;
        box.innerText = "";
    }
}

const showWinner = (winner) => {
    msgPara.innerText = `Congratulations , Winner is ${winner}`;
    msg.classList.remove("hide");
    disableBoxes();
    
}

const checkWinner = () => {
  for (let i = 0; i < winPatterns.length; i++) 
    {
        let pos1 =boxes[winPatterns[i][0]].innerText;
        let pos2 =boxes[winPatterns[i][1]].innerText;
        let pos3 =boxes[winPatterns[i][2]].innerText;     
    
    if(pos1 != "" && pos2 != "" && pos3 != "")
    {
        if(pos1 === pos2 && pos2 === pos3)
        {
            console.log("Winner",pos1);
            showWinner(pos1);
        }
    }
}
};
newBtn.addEventListener("click",reset);
resetBtn.addEventListener("click",reset);
