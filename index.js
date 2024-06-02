var randomNum1=Math.floor(Math.random()*6)+1;
var randomImg="dice"+randomNum1+".png";
var randomImg1="images/"+randomImg;
var imgSource=document.querySelectorAll("img")[0];
imgSource.setAttribute("src",randomImg1);


var randomNum2=Math.floor(Math.random()*6)+1;
var randomImage="dice"+randomNum2+".png";
var randomImg2="images/"+randomImage;
var imgSource2=document.querySelectorAll("img")[1];
imgSource2.setAttribute("src",randomImg2);


if(randomNum1>randomNum2)
{
    document.querySelector("h1").innerHTML="Player 1 wins!"
}
else if(randomNum1<randomNum2)
{
    document.querySelector("h1").innerHTML="Player 2 wins!"
}
else{
    document.querySelector("h1").innerHTML="Draw"
}
