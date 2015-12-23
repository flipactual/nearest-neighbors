'use strict'
const getValueInRange = require('./lib/getValueInRange')
const getEuclideanDistance = require('get-euclidean-distance')

/**
 * Initializes a machine for finding nearest neighbors.
 *
 * @class
 * @classdesc A machine for finding nearest neighbors.
 */
module.exports = class {
  constructor(nodes, features) {
    this.nodes = []
    this.features = []
    this.ranges = {}
  }
  /**
   * Train the nearest neighbor machine.
   *
   * @param {Array} nodes
   * The nodes to train on.
   * @param {Array} features
   * The keys for the features to track.
   *
   * @return {Object}
   * The nearest neighbor machine.
   */
  train(nodes, features) {
    this.nodes = nodes
    this.features = features
    return this
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
    this.calculateRanges(node)
    this.setDistancesFromNeighbors(node)
    return this.nodes
      .sort((a, b) => a.distance - b.distance)
      .slice(0, desiredNeighbors)
  }
  /**
   * Adds range values for each feature based on the provided nodes.
   *
   * @return {undefined}
   */
  calculateRanges() {
    this.features.forEach(key => {
      const featureValues = this.nodes.map(neighbor => neighbor[key])
      this.ranges[key] = Math.max(...featureValues) - Math.min(...featureValues)
    })
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
    return this.features.map(key => this.getDistanceFromNeighbor(
      neighbor[key],
      node[key],
      this.ranges[key]
    ))
  }
  /**
   * Find the range adjusted distance from this node to a neighbor node in a
   * single dimension.
   *
   * @param {Number} neighborValue
   * The neighbor's value for this dimension.
   * @param {Number} nodeValue
   * This node's value for this dimension.
   * @param {Number} range
   * The range to adjust the values for.
   *
   * @return {Number}
   * The range adjusted distance from this node to the neighbor node.
   */
  getDistanceFromNeighbor(neighborValue, nodeValue, range) {
    return getValueInRange(neighborValue, range)
      - getValueInRange(nodeValue, range)
  }
}
