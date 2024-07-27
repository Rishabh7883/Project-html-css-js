const questions=[
{
    question:"The total view of a database is known as?",
    answer: [
         {text: "Physical view" , correct: "false"},
         {text: "internal view" , correct: "false"},
         {text: "conceptual view" , correct: "true"},
         {text: "external view" , correct: "false"},
    ]
},
{
    question: "Total bits used by the IPv6 address is_______",
    answer: [
         {text: "64 bit" , correct: "false"},
         {text: "256 bit" , correct: "false"},
         {text: "128 bit" , correct: "true"},
         {text: "32 bit" , correct: "false"},
    ]
},
{
    question: "Total number of layers in OSI model is_______",
    answer: [
        {text: "5" , correct: "false"},
        {text: "7" , correct: "true"},
        {text: "9" , correct: "false"},
         {text: "11" , correct: "false"},
    ]
},
{
    question: "URL stands for_______",
    answer: [
         {text: "Uniterrupted data locator" , correct: "false"},
         {text: "Uniterrupted record locator" , correct: "false"},
         {text: "Uniform record locator" , correct: "false"},
         {text: "Uniform resource locator" , correct: "true"},
        ]
}
];
const quesheading=document.querySelector(".question");
const options=document.querySelectorAll(".options p");
const optionmain=document.querySelector(".options");
const quizopt=document.querySelector(".quizopt");
let indexans=0;
let score=0;
let qusidx=0;
const next=document.querySelector(".next-button");
next.style.display="none";
 let asignval=(qusidx,indexans)=>{options.forEach((val)=>{
    quesheading.innerText=`${qusidx+1}. ${questions[qusidx].question}`;
    val.innerText=questions[qusidx].answer[indexans].text;
    indexans++;
});
 };
 asignval(qusidx,0);
 optionmain.addEventListener("click",(e)=>{
    quizopt.classList.remove("quizopt");
    optionmain.style.cursor="no-drop";
    next.style.display="block";
    console.log("target",e.target);
    console.log(questions[qusidx].answer[e.target.className].correct);
    if(questions[qusidx].answer[e.target.className].correct==="true"){
     e.target.classList.add("green");
     score++;
    }
    else{
        options.forEach((val)=>{
            console.log("val is ",val.className);
            if(questions[qusidx].answer[val.className].correct==="true"){
                val.classList.add("green");
               }
        })
        e.target.classList.add("red");
    }
 });
 next.addEventListener("click",()=>{
    quizopt.classList.add("quizopt");
    options.forEach((val)=>{
        val.classList.remove("green");
        val.classList.remove("red");
    })
    optionmain.style.cursor="pointer";
    qusidx+=1;
    console.log("qusidx is ",qusidx);
    if(qusidx>=questions.length){
       quesheading.innerText=`Score is ${score}`;
      optionmain.style.display="none";
      next.style.display="none";
    }else{
     asignval(qusidx,0); 
    }
 });
 