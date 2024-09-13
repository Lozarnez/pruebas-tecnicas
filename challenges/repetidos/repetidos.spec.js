import assert from 'assert';
import unrepeated from './index.js';

describe('repetidos', () => {
  it('Debe devolver el string sin carácteres repetidos', () => {
    assert.equal(unrepeated('Holaaaaa!'), 'Hola!');
    assert.equal(unrepeated('Dicalzeeeus'), 'Dicalzeus');
  });
});