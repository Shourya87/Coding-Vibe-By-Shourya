let display = document.getElementById("display");

function appendValue(value){
    if(display.innerText === "0"){
        display.innerText = value;
    }else {
        display.innerText += value;
    }
}

function clearDisplay(){
    display.innerText = "0";
}

function calculate(){
    try{
        display.innerText = eval(display.innerText);
    }catch{
        display.innerText = "Error";
    }
}

function clearValue(){
    display.innerText = Math.floor(display.innerText/10);
}

const themeButton = document.querySelector(".btn:last-child");
const themeIcon = document.getElementById("themeIcon");

themeButton.addEventListener("click",function(){
  document.body.classList.toggle("darkTheme");

  try{
    if (document.body.classList.contains("darkTheme")) {
    themeIcon.innerText = "🌙";
  } else {
    themeIcon.innerText = "☀️";
  }
  }catch {
    themeIcon.innerText = "🤡";
  }
})