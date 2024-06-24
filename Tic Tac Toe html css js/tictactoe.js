let winner=document.querySelector(".winner");
let newgamebutton=document.querySelector(".new-game");
let renewbutton=document.querySelector(".renew");
let boxes=document.querySelectorAll(".box");
newgamebutton.style.display="none";
let boxval=true;
const winpatterns=[
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8],
];
const disabledboxes=()=>{
for(let val of boxes){
    val.disabled=true;
}
};
const resetgame=()=>{
    newgamebutton.style.display="none";
    boxval=true;
    winner.innerText="";
    boxes.forEach((val) => {
        val.innerText="";
        val.disabled=false;
    });
}
boxes.forEach((val) => {
    val.addEventListener("click",()=>{
       if(boxval){
        val.innerText="0";
        boxval=false;
       }else{
        val.innerText="X";
        boxval=true;
       }
       val.disabled=true;
       checkwinner();
    });
});
const checkwinner=()=>{
   for(let pattern of winpatterns){
    let val1=boxes[pattern[0]].innerText;
    let val2=boxes[pattern[1]].innerText;
    let val3=boxes[pattern[2]].innerText;
    if(val1!="" && val2!="" && val3!=""){
        if(val1===val2 && val2===val3){
            disabledboxes();
            winner.innerText="Congratulations, winner "+val1;
            newgamebutton.style.display="block";
        }
    }
   };
};
renewbutton.addEventListener("click",resetgame);
newgamebutton.addEventListener("click",resetgame);
