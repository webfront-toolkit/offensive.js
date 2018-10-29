
import Registry from '../../Registry';
import RegExpAssertion from './RegExpAssertion';

import * as anInstanceOf from '../anInstanceOf';

declare module "../../Context" {
  /**
   * @author Maciej Chałapuk (maciej@chalapuk.pl)
   */
  interface AssertionContext<T> {
    aRegExp : OperatorContext<T>;
    RegExp : OperatorContext<T>;
    aRegexp : OperatorContext<T>;
    regexp : OperatorContext<T>;
  }
}

export { RegExpAssertion };
export default RegExpAssertion;

/**
 * @author Maciej Chałapuk (maciej@chalapuk.pl)
 */
export function registerIn(registry : Registry) {
  anInstanceOf.registerIn(registry);

  registry.addAssertion({
    names: [ 'aRegExp', 'RegExp', 'aRegexp', 'regexp' ],
    assertion: new RegExpAssertion(),
  });
}
