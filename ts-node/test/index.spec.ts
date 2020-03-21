import { hello } from "../src/index"
const assert = require( 'assert' )

describe( "Test", () => {
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