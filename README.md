# nearest-neighbors

Find nearest neighbors.

## Example:

```js
const NN = require('./')
const machine = new NN().train([
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
const twoNearestNeighbors = machine.getNearestNeighbors({
  x: 5,
  y: 7.5,
}, 2)
twoNearestNeighbors
// → [
//   {
//     x: 10,
//     y: 10,
//     distance: 0.5590169943749475
//   },
//   {
//     x: 0,
//     y: 0,
//     distance: 0.9013878188659973
//   }
// ]
```
