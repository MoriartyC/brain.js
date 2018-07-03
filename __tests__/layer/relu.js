import assert from 'assert';
import gpuMock from 'gpu-mock.js';
import { predict, compare } from '../../src/layer/relu';

describe('Relu Layer', () => {
  describe('.predict (forward propagation)', () => {
    it('can relu a simple matrix', () => {
      const inputs = [
        [.1, -.2, .3],
        [-.4, .5, -.6],
        [.7, -.8, .9]
      ];
      const results = gpuMock(predict, { output: [3,3] })(inputs);
      assert.deepEqual(results, [
        [.1, 0, .3],
        [0, .5, 0],
        [.7, 0, .9]
      ]);
    });
  });

  describe('.compare (back propagation)', () => {
    it('can relu a simple matrix', () => {
      const inputs = [
        [.1, -.2, .3],
        [-.4, .5, -.6],
        [.7, -.8, .9]
      ];
      const deltas = [
        [1, 1, 1],
        [1, 1, 1],
        [1, 1, 1]
      ];
      const results = gpuMock(compare, { output: [3,3] })(inputs, deltas);
      assert.deepEqual(results, [
        [1, 0, 1],
        [0, 1, 0],
        [1, 0, 1]
      ]);
    });
  });
});