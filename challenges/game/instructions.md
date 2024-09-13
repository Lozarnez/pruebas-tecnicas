# Piedra, Papel o Tijeras

Crea una función que tome dos cadenas de texto (p1 y p2 — que representan al jugador 1 y al jugador 2) como argumentos y devuelva una cadena indicando el ganador en un juego de Piedra, Papel o Tijeras.

Cada argumento contendrá una cadena: "Piedra", "Papel" o "Tijeras". Devuelve el ganador según las siguientes reglas:

- Piedra vence a Tijeras
- Tijeras vence a Papel
- Papel vence a Piedra

Si p1 gana, devuelve la cadena `"Jugador 1 gana"`. Si p2 gana, devuelve `"Jugador 2 gana"` y si p1 y p2 son iguales, devuelve `"Es un empate"`.

## Ejemplos

```js
rps("Piedra", "Papel") ➞ "Jugador 2 gana"

rps("Tijeras", "Papel") ➞ "Jugador 1 gana"

rps("Papel", "Papel") ➞ "Es un empate"
