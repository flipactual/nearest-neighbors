[![flipactual](https://img.shields.io/badge/😋-flipactual-43A6F6.svg?style=flat-square)](https://flipactual.com/)
[![Travis](https://img.shields.io/travis/flipactual/nearest-neighbors.svg?style=flat-square)](https://travis-ci.org/flipactual/nearest-neighbors/)
[![Node](https://img.shields.io/node/v/nearest-neighbors.svg?style=flat-square)](http://npmjs.com/package/nearest-neighbors)
[![NPM](https://img.shields.io/npm/v/nearest-neighbors.svg?style=flat-square)](http://npmjs.com/package/nearest-neighbors)

<a name="NearestNeighbors"></a>

## NearestNeighbors
**Kind**: global class  

* [NearestNeighbors](#NearestNeighbors)
    * [new NearestNeighbors()](#new_NearestNeighbors_new)
    * [.getNearestNeighbors(node, desiredNeighbors)](#NearestNeighbors+getNearestNeighbors) ⇒ <code>Array</code>
    * [.setDistancesFromNeighbors(node)](#NearestNeighbors+setDistancesFromNeighbors) ⇒ <code>undefined</code>
    * [.getDistancesFromNeighbor(node, neighbor)](#NearestNeighbors+getDistancesFromNeighbor) ⇒ <code>Array</code>
    * [.classify(node, desiredNeighbors, key)](#NearestNeighbors+classify) ⇒ <code>String</code>

<a name="new_NearestNeighbors_new"></a>

### new NearestNeighbors()
constructor
Initializes a machine for finding nearest neighbors.

<a name="NearestNeighbors+getNearestNeighbors"></a>

### nearestNeighbors.getNearestNeighbors(node, desiredNeighbors) ⇒ <code>Array</code>
Find the specified number of nearest neighbors for the provided node.

**Kind**: instance method of <code>[NearestNeighbors](#NearestNeighbors)</code>  
**Returns**: <code>Array</code> - The nearest neighbors.  

| Param | Type | Description |
| --- | --- | --- |
| node | <code>Object</code> | The node to find neighbors for. |
| desiredNeighbors | <code>Number</code> | The number of neighbors to find. |

<a name="NearestNeighbors+setDistancesFromNeighbors"></a>

### nearestNeighbors.setDistancesFromNeighbors(node) ⇒ <code>undefined</code>
Assigns a distance from supplied node to each neighbor.

**Kind**: instance method of <code>[NearestNeighbors](#NearestNeighbors)</code>  

| Param | Type | Description |
| --- | --- | --- |
| node | <code>Object</code> | The node to find neighbors for. |

<a name="NearestNeighbors+getDistancesFromNeighbor"></a>

### nearestNeighbors.getDistancesFromNeighbor(node, neighbor) ⇒ <code>Array</code>
Find the range adjusted distances from supplied node to a neighbor for each
feature.

**Kind**: instance method of <code>[NearestNeighbors](#NearestNeighbors)</code>  
**Returns**: <code>Array</code> - The distances from this node to the neighbor in each dimension.  

| Param | Type | Description |
| --- | --- | --- |
| node | <code>Object</code> | The node to determine distances from. |
| neighbor | <code>Node</code> | The neighbor to determine distances from. |

<a name="NearestNeighbors+classify"></a>

### nearestNeighbors.classify(node, desiredNeighbors, key) ⇒ <code>String</code>
Classify an entity based on its neighbors.

**Kind**: instance method of <code>[NearestNeighbors](#NearestNeighbors)</code>  
**Returns**: <code>String</code> - The infered classification.  

| Param | Type | Description |
| --- | --- | --- |
| node | <code>Object</code> | The node to find neighbors for and classify. |
| desiredNeighbors | <code>Number</code> | The number of neighbors to find. |
| key | <code>String</code> | The key to infer a value for. |


## License

MIT @ [Flip](https://github.com/flipactual)
