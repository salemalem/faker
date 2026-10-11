import type { FakerCore } from '../../core';
import { fakeStringHexadecimal } from '../string/hexadecimal';

/**
 * Generates a random IPv6 address.
 *
 * @param fakerCore The FakerCore to use.
 *
 * @example
 * fakeInternetIpv6(fakerCore) // '269f:1230:73e3:318d:842b:daab:326d:897b'
 *
 * @since 11.0.0
 *
 * @experimental
 */
export function fakeInternetIpv6(fakerCore: FakerCore): string {
  return Array.from({ length: 8 }, () =>
    fakeStringHexadecimal(fakerCore, {
      length: 4,
      casing: 'lower',
      prefix: '',
    })
  ).join(':');
}
