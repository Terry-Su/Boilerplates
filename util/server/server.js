const PATH = require( "path" )
const BS = require( "browser-sync" )
const output = PATH.resolve( __dirname, './build' )


const config = {
  server: {
    baseDir: output
  },
  files: [ `${ output }/**` ],
  open: true,
  port: 3200
}

BS.init( config )