document.querySelector(".toss-button").addEventListener("click",toss);
function toss(){
  var randomNumber = Math.floor((Math.random()*2)+1);
  var coinImage="imagee/coin-image"+randomNumber+".png";
  var image = document.querySelector("img");
  image.setAttribute("src",coinImage);
  if(randomNumber===1){
    document.querySelector("h1").innerHTML="Heads wins🥳🎉";
  }
  else{
    document.querySelector("h1").innerHTML="Tails wins🥳🎉";
  }
  buttonAnimation();
}
function buttonAnimation(){
  var activeButton = document.querySelector(".toss-button");
  activeButton.classList.add("pressed");
  setTimeout(function(){
    activeButton.classList.remove("pressed");
  },100);
}
