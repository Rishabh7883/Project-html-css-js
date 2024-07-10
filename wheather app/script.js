
const url = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
let appid = "e7329673735ba1922fa128db58655290";
const inputval = document.querySelector(".search input");
const searchbutton = document.querySelector(".icon");
const img=document.querySelector(".wheather-img img");
const temp=document.querySelector(".temp");
const cityname=document.querySelector(".cityname");
const humidity=document.querySelector(".humi-val");
const windspeed=document.querySelector(".wind-val");
const container=document.querySelector(".container");
searchbutton.addEventListener("click", async () => {
    
    let cityval=inputval.value;
    let fullUrl = `${url+cityval}&appid=${appid}`;
    let response = await fetch(fullUrl);
    let data = await response.json();
    if(data.cod===200 && inputval.val!=""){
    if(data.weather[0].main ==='Clear'){
        img.src="clear.png";
    }
    else if(data.weather[0].main ==='Clouds'){
        img.src="clouds.png";
    }
    else if(data.weather[0].main ==='Drizzle'){
        img.src="drizzle.png";
    }
    else if(data.weather[0].main ==='Mist'){
        img.src="mist.png";
    }
    else if(data.weather[0].main ==='Rain'){
        img.src="rain.png";
    }
    else if(data.weather[0].main ==='Snow'){
        img.src="snow.png";
    }
    temp.innerText=`${Math.round(data.main.temp)} ℃`;
     cityname.innerText=cityval;
     humidity.innerText=`${data.main.humidity} %`;
     windspeed.innerText=`${data.wind.speed} Km/h`;
     container.classList.add("setinjs");
}
else {
  cityname.innerText="Enter correct city !"
  container.classList.remove("setinjs");
  img.src="";
  temp.innerText="";
  humidity.innerText="0 %";
  windspeed.innerText="0 Km/h";
}
});


