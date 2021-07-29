'use strict';
const score0El =document.getElementById('score--0');
const score1El =document.getElementById('score--1');
const diceEl = document.querySelector('.dice');
const btnNew =  document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll'); 
const btnHold =document.querySelector('.btn--hold');
const current0El =document.getElementById('current--0');
const current1El =document.getElementById('current--1');
const player0 = document.querySelector('.player--0');
const player1 = document.querySelector('.player--1');

    let playing;
    let currentScore;
    let activePlayer;
    let scores;
    let scoreEl;  
const init = function(){
    score0El.textContent= 0;
    score1El.textContent = 0;
    diceEl.classList.add('hidden');
    currentScore =0;
    activePlayer=0;
    scores=[0,0];
    scoreEl = 0 ; 
    playing=true;     
};
init() ;

btnRoll.addEventListener('click', function(){
    if(playing){
const dice=Math.trunc(Math.random()*6)+1;
console.log(dice);
diceEl.classList.remove('hidden');
document.getElementById(`current--${activePlayer}`).textContent=currentScore;
diceEl.src = `dice-${dice}.png`;     
if(dice!==1)
{
    currentScore+=dice;
    document.getElementById(`current--${activePlayer}`).textContent=currentScore;
}
else
{   
    currentScore=0;
    document.getElementById(`current--${activePlayer}`).textContent=currentScore;
    activePlayer=activePlayer===0? 1:0 ;
    player0.classList.toggle('player--active');
    player1.classList.toggle('player--active');
}
}});

btnHold.addEventListener('click',function(){
    if(playing){
    scores[activePlayer]+=currentScore;
    scoreEl=document.getElementById(`score--${activePlayer}`);
    scoreEl.textContent=scores[activePlayer];
    currentScore=0;
    document.getElementById(`current--${activePlayer}`).textContent=currentScore;
    if(scores[activePlayer]>=30)
    {
    playing=false;
    diceEl.classList.add('hidden');    
    document.querySelector(`.player--${activePlayer}`).classList.add('player--winner');
    document.querySelector(`.player--${activePlayer}`).classList.remove('player--active');
    }
    
}});

btnNew.addEventListener('click',function(){
    document.querySelector(`.player--${activePlayer}`).classList.remove('player--winner');
    init();
    document.querySelector(`.player--${activePlayer}`).classList.add('player--active');

});