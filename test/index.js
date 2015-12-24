const assert = require('assert')
const isEqualEnough = require('is-equal-enough')(Number.EPSILON)
const NN = require('../')

describe('NearestNeighbor', () => {
  describe('#constructor()', () => {
    it('Creates a new NearestNeighbor machine', () => {
      const machine = new NN()
      assert.equal(NN.prototype.isPrototypeOf(machine), true)
      assert.deepEqual(machine.nodes, [])
      assert.deepEqual(machine.features, [])
      assert.deepEqual(machine.ranges, {})
    })
  })
  describe('#train()', () => {
    it('Applies the provided nodes and features', () => {
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
      assert.deepEqual(machine.nodes, [
        {
          x: 0,
          y: 0,
        },
        {
          x: 10,
          y: 10,
        },
      ])
      assert.deepEqual(machine.features, [
        'x',
        'y',
      ])
    })
  })
  describe('#getNearestNeighbors()', () => {
    it('Finds the specified number of nearest neighbors', () => {
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
      assert.deepEqual(twoNearestNeighbors, [
        {
          distance: 0.5590169943749475,
          x: 10,
          y: 10,
        },
        {
          distance: 0.9013878188659973,
          x: 0,
          y: 0,
        },
      ])
    })
    it('Does not alter nodes during training', () => {
      const nodes = [
        {
          x: 0,
          y: 0,
        },
      ]
      const machine = new NN().train(nodes, [
        'x',
        'y',
      ])
      machine.getNearestNeighbors({
        x: 5,
        y: 7.5,
      }, 1)
      assert.deepEqual(nodes, [
        {
          x: 0,
          y: 0,
        },
      ])
    })
  })
  describe('#calculateRanges()', () => {
    it('Calculates the range based on lowest and highest values for a feature', () => {
      const machine = new NN().train([
        {
          x: 5,
        },
        {
          x: 10,
        },
      ], [
        'x',
      ])
      machine.calculateRanges()
      assert.equal(machine.ranges.x, 5)
    })
  })
  describe('#setDistancesFromNeighbors()', () => {
    it('Assigns the distance from the provided node to the neighbor', () => {
      const machine = new NN().train([
        {
          x: 5,
        },
        {
          x: 10,
        },
      ], [
        'x',
      ])
      machine.getNearestNeighbors({
        x: 9,
      }, 0)
      assert.equal(isEqualEnough(machine.nodes[0].distance, 0.2), true)
    })
  })
  describe('#getDistancesFromNeighbor()', () => {
    it('Returns an array of the distances between two nodes in each feature dimension', () => {
      const machine = new NN().train([
        {
          x: 0,
          y: 100,
        },
        {
          x: 100,
          y: 0,
        },
      ], [
        'x',
        'y',
      ])
      machine.calculateRanges()
      const distances = machine.getDistancesFromNeighbor({
        x: 25,
        y: 25,
      }, {
        x: 75,
        y: 75,
      })
      assert.deepEqual(distances, [
        0.5,
        0.5,
      ])
    })
  })
})
