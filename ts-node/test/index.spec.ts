const assert = require('assert')

describe('Test', function () {
  this.timeout(2000000)

  it('Sync unit ', () => {
  })
  it('Async unit ', done => {
    require('../src/index')
    setTimeout(() => {
      // done()
    }, 1000)
  })
})
