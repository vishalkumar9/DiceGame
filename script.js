'use strict';
var num;
var activeplayer = 0;
var currentscore = 0;
var score0 = 0;
var score1 = 0;
var credits0 = 3;
var credits1 = 3;
var player1wins = 0;
var player2wins = 0;
var flag = 0;

document.querySelector('.btn--roll').addEventListener('click', function () {
  if (!credits0 && credits1 > 0) {
    activeplayer = 1;
    document.querySelector('.player--0').classList.remove('player--active');
    document.querySelector('.player--1').classList.add('player--active');
    num = Math.floor(Math.random() * 6 + 1);
    console.log(num);
    document.querySelector('.dice').src = `dice-${num}.png`;
    currentscore += num;
    document.getElementById('current--1').textContent = currentscore;
    if (num == 1) {
      currentscore = 0;
      document.getElementById('current--1').textContent = currentscore;
      document.getElementById('credits--1').textContent = --credits1;
    }
  } else if (credits0 > 0 && !credits1) {
    activeplayer = 0;
    document.querySelector('.player--1').classList.remove('player--active');
    document.querySelector('.player--0').classList.add('player--active');
    num = Math.floor(Math.random() * 6 + 1);
    console.log(num);
    document.querySelector('.dice').src = `dice-${num}.png`;
    currentscore += num;
    document.getElementById('current--0').textContent = currentscore;
    if (num == 1) {
      currentscore = 0;
      document.getElementById('current--0').textContent = currentscore;
      document.getElementById('credits--0').textContent = --credits1;
    }
  } else if (credits0 > 0 && credits1 > 0) {
    num = Math.floor(Math.random() * 6 + 1);
    console.log(num);
    document.querySelector('.dice').src = `dice-${num}.png`;
    currentscore += num;
    if (activeplayer == 0 && num != 1) {
      document.getElementById('current--0').textContent = currentscore;
    }
    if (activeplayer == 1 && num != 1) {
      document.getElementById('current--1').textContent = currentscore;
    }

    if (num == 1) {
      if (activeplayer == 0) {
        activeplayer = 1;
        document.querySelector('.player--0').classList.remove('player--active');
        document.querySelector('.player--1').classList.add('player--active');
        currentscore = 0;
        document.getElementById('current--0').textContent = currentscore;

        document.getElementById('credits--0').textContent = --credits0;
      } else {
        activeplayer = 0;
        document.querySelector('.player--0').classList.add('player--active');
        document.querySelector('.player--1').classList.remove('player--active');
        currentscore = 0;
        document.getElementById('current--1').textContent = currentscore;

        document.getElementById('credits--1').textContent = --credits1;
      }
    }
  } else {
    if (score1 > score0 && flag == 0) {
      flag = 1;
      player2wins++;
      document.querySelector(
        '.p2'
      ).textContent = `PLAYER 2 WINS : ${player2wins}`;
      document.querySelector('.R').textContent = 'PLAYER 2';
    } else if (score0 > score1 && flag == 0) {
      flag = 1;
      player1wins++;
      document.querySelector(
        '.p1'
      ).textContent = `PLAYER 1 WINS : ${player1wins}`;
      document.querySelector('.R').textContent = 'PLAYER 1';
    } else if (flag == 0) {
      flag = 1;
      document.querySelector('.R').textContent = 'DRAW';
    }
  }
});

document.querySelector('.btn--hold').addEventListener('click', function () {
  if (activeplayer == 0 && credits1 > 0) {
    score0 += currentscore;
    document.getElementById('score--0').textContent = score0;
    activeplayer = 1;
    document.querySelector('.player--0').classList.remove('player--active');
    document.querySelector('.player--1').classList.add('player--active');
    currentscore = 0;
    document.getElementById('current--0').textContent = currentscore;
  } else if (activeplayer == 1 && credits0 > 0) {
    score1 += currentscore;
    document.getElementById('score--1').textContent = score1;
    activeplayer = 0;
    document.querySelector('.player--0').classList.add('player--active');
    document.querySelector('.player--1').classList.remove('player--active');
    currentscore = 0;
    document.getElementById('current--1').textContent = currentscore;
  } else if (activeplayer == 0 && credits1 == 0) {
    score0 += currentscore;
    document.getElementById('score--0').textContent = score0;
    currentscore = 0;
    document.getElementById('current--0').textContent = currentscore;
  } else if (activeplayer == 1 && credits0 == 0) {
    score1 += currentscore;
    document.getElementById('score--1').textContent = score1;
    currentscore = 0;
    document.getElementById('current--1').textContent = currentscore;
  }
});

if (credits1 <= 0 && credits0 <= 0) {
}

document.querySelector('.btn--new').addEventListener('click', function () {
  flag = 0;
  activeplayer = 0;
  currentscore = 0;
  score0 = 0;
  score1 = 0;
  credits0 = 3;
  credits1 = 3;
  document.querySelector('.player--0').classList.add('player--active');
  document.querySelector('.player--1').classList.remove('player--active');
  document.getElementById('current--0').textContent = currentscore;
  document.getElementById('current--1').textContent = currentscore;
  document.getElementById('score--0').textContent = score0;
  document.getElementById('score--1').textContent = score1;
  document.getElementById('credits--0').textContent = credits0;
  document.getElementById('credits--1').textContent = credits1;
});
