import { hello } from '../src/index'
const assert = require('assert')

describe('Test', function () {
  this.timeout(2000000)

  it('Sync unit ', () => {
    hello()
  })
  it('Async unit ', done => {
    setTimeout(() => {
      hello()
      done()
    }, 1000)
  })
})
