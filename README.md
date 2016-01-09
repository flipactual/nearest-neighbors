# nearest-neighbors

Find nearest neighbors & classify entities based on their neighbors.

## Example:

```js
const NN = require('nearest-neighbors')
const machine = new NN([
  {
    x: 0,
    y: 0,
  },
  {
    x: 10,
    y: 10,
  },
], [
  'x',
  'y',
])

machine.getNearestNeighbors({
  x: 5,
  y: 7.5,
}, 2)
// → [
//   {
//     neighbor: {
//       x: 10,
//       y: 10,
//     }
//     distance: 0.5590169943749475
//   },
//   {
//     neighbor: {
//       x: 0,
//       y: 0,
//     }
//     distance: 0.9013878188659973
//   }
// ]

machine.classify({
  x: 1,
  y: 1,
}, 1, 'class')
// → 'ugly'
```
