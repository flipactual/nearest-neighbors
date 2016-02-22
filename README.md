# nearest-neighbors

Find nearest neighbors & classify entities based on their neighbors.

## Examples:

### `getNearestNeighbors`

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
```

### `classify`

```js
const NN = require('nearest-neighbors')
const machine = new NearestNeighbors([
  {
    x: 0,
    y: 0,
    class: 'good',
  },
  {
    x: 10,
    y: 10,
    class: 'bad',
  },
  {
    x: 1,
    y: 1,
    class: 'ugly',
  },
], [
  'x',
  'y',
])

machine.classify({
  x: 1,
  y: 1,
}, 1, 'class')
// → 'ugly'
```
