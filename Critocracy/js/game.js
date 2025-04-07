import { setupBoard } from './board.js';
import { setupPlayers, nextTurn, getCurrentPlayer } from './players.js';
import { drawCard } from './cards.js';
import { renderUI, showCardEffect } from './ui.js';

let gameState = {
  turn: 0,
  players: [],
  deck: [],
  currentCard: null,
};

function initGame() {
  gameState.players = setupPlayers();
  gameState.deck = drawCard.initDeck();
  setupBoard();
  renderUI(gameState);
  document.getElementById('draw-card').addEventListener('click', handleDrawCard);
}

function handleDrawCard() {
  const player = getCurrentPlayer(gameState);
  const card = drawCard(gameState.deck);
  gameState.currentCard = card;
  showCardEffect(card, player);
  nextTurn(gameState);
  renderUI(gameState);
}

window.addEventListener('DOMContentLoaded', initGame);
