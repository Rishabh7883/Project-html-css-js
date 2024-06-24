let choices=document.querySelectorAll(".img");
let notice=document.querySelector(".notice");
let userscoreval=document.querySelector("#user-score");
let compscoreval=document.querySelector("#comp-score");
let startbutton=document.querySelector(".start-button");
startbutton.style.display="none";
let userscore=0;
let compscore=0;
let ans=true;
const getdisabled=()=>{
choices.forEach((val)=>{
val.style.display="none";
});
startbutton.style.display="block";
};
let giveans=(ans)=>{
    if(ans){
        notice.innerText="Congratulations, you win";
        notice.style.backgroundColor="#36AE7C";
        if(compscore>0){
            compscore--;
            compscoreval.innerText=compscore;
        }
        userscore++;
           userscoreval.innerText=userscore;
    }
    else{
        notice.innerText="Oops, you loss";
        notice.style.backgroundColor="#EB5353";
        if(userscore>0){
            userscore--;
            userscoreval.innerText=userscore;
        }
        compscore++;
           compscoreval.innerText=compscore;
    }
    if(userscore===10){
        notice.innerText="You are win this Game";
        notice.style.backgroundColor="#722F37";
        getdisabled();
    }
    else if(userscore===10){
        notice.innerText="You loss this Game";
        notice.style.backgroundColor="#722F37";
        getdisabled();
    }
}
const getCompChoice=(userchoice)=>{
    const options=["rock","peper","scissors"];
      const compchoice=options[Math.floor(Math.random()*3)];
         if(userchoice===compchoice){
            notice.innerText="Match draw ! Again play your move.";
            notice.style.backgroundColor="#187498";
         }
            else if(userchoice==="rock"){
              //compchoice option peper.compwin scissors.comloose
              ans= compchoice==="peper"?false:true;
              giveans(ans);
        }
        else if(userchoice==="peper"){
            //rock.comploose scissors.compwin
            ans= compchoice==="scissors"?false:true;
            giveans(ans);
        }
        else{
            //rock.compwin paper.comploose
            ans= compchoice==="rock"?false:true;
            giveans(ans);
        }

}
choices.forEach((choice)=>{
     choice.addEventListener("click",()=>{
        const userchoice=choice.getAttribute("id");
        getCompChoice(userchoice); 
     });
});
startbutton.addEventListener("click",()=>{
    choices.forEach((val)=>{
        val.style.display="block";
        });
        startbutton.style.display="none";
        userscore=0;
        compscore=0;
        userscoreval.innerText="0";
        compscoreval.innerText="0";
        notice.innerText="Play Your Move !";
});