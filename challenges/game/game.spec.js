import assert from 'assert';
import rps from './index.js';

describe('game', () => {
  it("Debe retornar 'Es un empate' para empate", () => {
    assert.equal(rps('rock', 'rock'), 'Es un empate');
    assert.equal(rps('paper', 'paper'), 'Es un empate');
    assert.equal(rps('scissors', 'scissors'), 'Es un empate');
  });

  it("Debe retornar 'Jugador 1 gana' para jugador 1", () => {
    assert.equal(rps('rock', 'scissors'), 'Jugador 1 gana');
    assert.equal(rps('paper', 'rock'), 'Jugador 1 gana');
    assert.equal(rps('scissors', 'paper'), 'Jugador 1 gana');
  });

  it("Debe retornar 'Jugador 2 gana' para jugador 2", () => {
    assert.equal(rps('scissors', 'rock'), 'Jugador 2 gana');
    assert.equal(rps('rock', 'paper'), 'Jugador 2 gana');
    assert.equal(rps('paper', 'scissors'), 'Jugador 2 gana');
  });
});