'use strict';
const player1 = document.querySelector(".player--0");
const player2 = document.querySelector(".player--1");
const hold = document.querySelector(".btn--hold");
const overallScore1 = document.querySelector("#score--0");
const overallScore2 = document.querySelector("#score--1");
const currScore1 = document.querySelector("#current--0")
const currScore2 = document.querySelector("#current--1")

const changeActive = function(){
if(player1.classList.contains('player--active')){
currScore1.innerHTML=0;
player1.classList.remove('player--active');
player2.classList.add('player--active');    
}
else{
currScore2.innerHTML=0;    
player2.classList.remove('player--active');
player1.classList.add('player--active');
}
}

document.querySelector('.btn--roll').addEventListener("click",function(){
var randomNumber = Math.random();
randomNumber = Math.ceil(randomNumber*6);
document.querySelector('.dice').setAttribute("src",`dice-${randomNumber}.png`);
if(randomNumber === 1){
changeActive();
}
else{
if(player1.classList.contains('player--active')){
var curr_val = document.querySelector('#current--0').innerHTML;
curr_val = Number(curr_val);
curr_val = curr_val+randomNumber;
document.querySelector('#current--0').innerHTML=curr_val;    
}
else{
var curr_val = document.querySelector('#current--1').innerHTML;
curr_val = Number(curr_val);
curr_val = curr_val+randomNumber;
document.querySelector('#current--1').innerHTML=curr_val;      
} 
}
})
document.querySelector(".btn--hold").addEventListener("click",function(){
if(player1.classList.contains('player--active')){
var curr_Overall = overallScore1.innerHTML;
var curr_val = currScore1.innerHTML;
curr_Overall = Number(curr_Overall);
curr_val = Number(curr_val);
curr_Overall = curr_Overall+curr_val;
overallScore1.innerHTML = curr_Overall;
changeActive();
}
else{
var curr_Overall = overallScore2.innerHTML;
var curr_val = currScore2.innerHTML;
curr_Overall = Number(curr_Overall);
curr_val = Number(curr_val);
curr_Overall = curr_Overall+curr_val;
overallScore2.innerHTML = curr_Overall;
changeActive();    
}   
})
document.querySelector('.btn--new').addEventListener("click",function(){
if(player2.classList.contains('player--active')){
player2.classList.remove('player--active');
player1.classList.add('player--active');   
}
overallScore1.innerHTML = 0;
overallScore2.innerHTML = 0;
currScore1.innerHTML = 0;
currScore2.innerHTML = 0;     
})