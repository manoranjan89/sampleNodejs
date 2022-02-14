const progress = document.querySelector(".progress")
let value = 0;
function updateProgressBar(progressBar,value){
  
 progressBar.querySelector(".progress__fill").style.width = `${value}%`
  progressBar.querySelector(".progress__text").textContent = `${value}%`
}
const increase = ()=>{
  if(value>=100){
    value=100;
    return;
  }
  value+=10;
  updateProgressBar(progress,value)
  
}
const decrease = ()=>{
  if(value<=0){
    value=0;
    return;
  }
  value-=10;
  
  updateProgressBar(progress,value)
  
}