const input=document.querySelector(".input input");
const button=document.querySelector(".button");
const listcontainer=document.querySelector(".list-container");
button.addEventListener("click",()=>{
  if(input.value!=""){
         let div=document.createElement("div");
         div.setAttribute("class","lists");
        let list=document.createElement("li");
        let img=document.createElement("img");
        let icon=document.createElement("i");
        icon.setAttribute("class","fa-solid fa-xmark");
        img.setAttribute("class","unchecked");
        img.src="unchecked.png";
        list.innerText=`${input.value}`;
        div.append(img);
        div.append(list);
        div.append(icon);
        listcontainer.append(div);
        input.value="";
        storedata();
  }
});
listcontainer.addEventListener("click",(e)=>{
  let litag=e.target.parentElement.querySelector("li");
  if(e.target.tagName==="IMG" && e.target.className ==="unchecked"){
       e.target.src="checked.png";
       litag.classList.add("checked");
       e.target.classList.add("checked");
  }
  else if(e.target.tagName==="IMG" && e.target.className ==="unchecked checked"){
    e.target.src="unchecked.png";
    litag.classList.remove("checked");
    e.target.classList.remove("checked");
    e.target.classList.add("unchecked");
  }
  if(e.target.tagName==="I"){
    e.target.parentElement.style.display="none";
  }
  storedata();
})

const storedata=()=>{
  localStorage.setItem("data",listcontainer.innerHTML);
}
const showdata=()=>{
  listcontainer.innerHTML=localStorage.getItem("data");
}
showdata();




































/*const input=document.querySelector(".input input");
const clickbutton=document.querySelector(".button");
const container=document.querySelector(".container");

clickbutton.addEventListener("click",()=>{
  let inputval=input.value;
  if(inputval!=""){
  
    let mainlist=document.querySelector(".mainlist");
    let lists=document.createElement("div");
    lists.setAttribute("class","lists");
    let listcontainer=document.createElement("div");
    listcontainer.setAttribute("class","listcontainer");
    let cut=document.createElement("i");
    cut.setAttribute("class","fa-solid fa-xmark cut");
    let inputlist=document.createElement("input");
    let label=document.createElement("label");
    inputlist.type="checkbox";
    inputlist.name="checklist";
    inputlist.setAttribute("id","checklist");
    label.htmlFor="checklist";
    label.innerText=`${inputval}`;
    listcontainer.append(inputlist);
    listcontainer.append(label);
    lists.append(listcontainer);
    lists.append(cut);
       mainlist.append(lists);
      input.value="";
      addlist();
  }
});

const addlist=()=>{
const alllist=document.querySelectorAll("#checklist");
  alllist.forEach((val)=>{
    if(val.checked){
           val.style.display="none";
    }
  })
  console.log(alllist);
}
 addlist();
*/