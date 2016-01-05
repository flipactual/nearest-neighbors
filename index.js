'use strict'
const getEuclideanDistance = require('get-euclidean-distance')
const getValueInRange = require('get-value-in-range')

/**
 * Initializes a machine for finding nearest neighbors.
 *
 * @class
 * @classdesc A machine for finding nearest neighbors.
 */
module.exports = class {
  constructor(nodes, features) {
    this.nodes = nodes ? JSON.parse(JSON.stringify(nodes)).map(neighbor => ({
      neighbor,
    })) : []
    this.features = features || []
    this.ranges = {}
  }
  /**
   * Find the specified number of nearest neighbors for the provided node.
   *
   * @param {Object} node
   * The node to find neighbors for.
   * @param {Number} desiredNeighbors
   * The number of neighbors to find.
   *
   * @return {Array}
   * The nearest neighbors.
   */
  getNearestNeighbors(node, desiredNeighbors) {
    this.setDistancesFromNeighbors(node)
    return this.nodes
      .sort((a, b) => a.distance - b.distance)
      .slice(0, desiredNeighbors)
  }
  /**
   * Assigns a distance from supplied node to each neighbor.
   *
   * @param {Object} node
   * The node to find neighbors for.
   *
   * @return {undefined}
   */
  setDistancesFromNeighbors(node) {
    this.features.forEach(key => {
      this.ranges[key] = getValueInRange(this.nodes.map(neighbor => neighbor.neighbor[key]))
    })
    this.nodes.forEach(neighbor => {
      neighbor.distance = getEuclideanDistance(
        this.getDistancesFromNeighbor(
          node,
          neighbor
        )
      )
    })
  }
  /**
   * Find the range adjusted distances from supplied node to a neighbor for each
   * feature.
   *
   * @param {Object} node
   * The node to determine distances from.
   * @param {Node} neighbor
   * The neighbor to determine distances from.
   *
   * @return {Array}
   * The distances from this node to the neighbor in each dimension.
   */
  getDistancesFromNeighbor(node, neighbor) {
    return this.features.map(key => this.ranges[key](neighbor.neighbor[key]) - this.ranges[key](node[key]))
  }
}
