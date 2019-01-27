
/**
 * Implement a generator function that can be used
 * to generate numbers in the Fibonacci Sequence
 */

export function* getFibSequence(): IterableIterator<number> {
  let last = 1;
  let previousLast = 0;
  let currentResult;
  yield last;
  while(true) {
    currentResult = last + previousLast;
    yield currentResult;
    previousLast = last;
    last = currentResult;
  }
}
