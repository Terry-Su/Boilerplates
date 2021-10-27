const files = require.context('.', true, /\.ts$/)

const modules = []
files.keys().forEach( (key) => {
 if ( key === './index.ts' ) return
 modules.push(files( key ).default)
} )

export default modules