# Comparación del valor de BTC

## Descripción

Utilizando la API de CoinDesk, crea la ruta `/compare` que responda con un JSON que contenga el valor actual del Bitcoin en USD, el valor del Bitcoin en USD del día anterior y la diferencia entre ambos valores.

## Requerimientos

- La ruta debe ser tipo `GET` y estar en la dirección `/compare`.
- La ruta debe responder con un JSON que contenga las propiedades `priceDifference`, `currentDayPrice` y `previousDayPrice`.
- La propiedad `priceDifference` debe ser la diferencia entre `currentDayPrice` y `previousDayPrice`.

## Ejemplo

```json
{
  "priceDifference": 1000,
  "currentDayPrice": 5000,
  "previousDayPrice": 4000
}
```