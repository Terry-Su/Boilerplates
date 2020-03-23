import { hello } from "../src/index"
const assert = require( 'assert' )

describe( "Test", function() {
  this.timeout( 20000 )

  it( "Sync unit ", () => {
    hello()
  } )
  it( "Async unit ", done => {
    setTimeout( () => {
      hello()
      done()
    }, 1000 )
  } )
} )