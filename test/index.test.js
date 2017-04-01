import test from 'tape';
import numFormatter from '../source/index';

test('numFormatter', (assert) => {
  let result = numFormatter(1);
  assert.equal(result, '1', 'should convert single digit');

  result = numFormatter(12);
  assert.equal(result, '12', 'should convert double digits');

  result = numFormatter(123);
  assert.equal(result, '123', 'should convert tripple digits');

  assert.end();
});
