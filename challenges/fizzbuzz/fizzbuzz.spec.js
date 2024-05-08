import assert from 'assert';
import fizzbuzz from './index.js';

describe('fizzbuzz', () => {
  it('Debe retornar Fizz para multiplos de 3', () => {
    assert.equal(fizzbuzz(3), 'Fizz');
    assert.equal(fizzbuzz(6), 'Fizz');
  });

  it('Debe retornar Buzz para multiplos de 5', () => {
    assert.equal(fizzbuzz(5), 'Buzz');
    assert.equal(fizzbuzz(10), 'Buzz');
  });

  it('Debe retornar FizzBuzz para multiplos de 15', () => {
    assert.equal(fizzbuzz(15), 'FizzBuzz');
    assert.equal(fizzbuzz(30), 'FizzBuzz');
  });

  it('Debe retornar el número para los casos no multiplos de 3 o 5', () => {
    assert.equal(fizzbuzz(1), 1);
    assert.equal(fizzbuzz(2), 2);
  });
});