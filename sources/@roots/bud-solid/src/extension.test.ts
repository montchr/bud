import {describe, expect, it} from '@jest/globals'

import Extension from './index'

describe(`@roots/bud-solid`, () => {
  it(`should be constructable`, () => {
    expect(Extension).toBeInstanceOf(Function)
  })
})