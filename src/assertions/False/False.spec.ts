
import { TestCaseBuilder, RunFunction } from '../../test/TestCaseBuilder';
import '.';

function assertion<ReturnType>(runTestCase : RunFunction<ReturnType>) {
  return new TestCaseBuilder<ReturnType>(runTestCase);
}

describe('check(arg, \'arg\')', () => {
  describe('.is.False()', () => {
    const message0 = 'arg must be false (got';

    assertion(arg => arg.is.False())
      .withArg({}).throws(`${message0} {})`)
      .withArg([]).throws(`${message0} [])`)
      .withArg([0]).throws(`${message0} [0])`)
      .withArg(null).throws(`${message0} null)`)
      .withArg(undefined).throws(`${message0} undefined)`)
      .withArg('').throws(`${message0} '')`)
      .withArg('a').throws(`${message0} 'a')`)
      .withArg(0).throws(`${message0} 0)`)
      .withArg(42).throws(`${message0} 42)`)
      .withArg(() => {}).throws(`${message0} unnamed function)`)
      .withArg(false).doesntThrow()
      .withArg(true).throws(`${message0} true)`)
    ;
  });
});
