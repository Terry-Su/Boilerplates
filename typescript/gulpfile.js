const PATH = require( 'path' )
const gulp = require( "gulp" )
const ts = require( "gulp-typescript" )
const tsProject = ts.createProject( "tsconfig.json" )
const rimraf = require( "rimraf" )

const distPathStr = 'dist'
const distPath = PATH.resolve( __dirname, 'dist' )
const srcOtherFilesGlobs = [
	'src/**/*.json',
]
const watchingSrcGlob = 'src/**/*'

let watcher = undefined

function deleteDist() {
	return Promise.resolve( new Promise( ( resolve ) => {
		rimraf( distPath, () => {
			resolve()
		} )
	} ) )
}

function asyncMainTs() {
	return tsProject.src()
		.pipe( tsProject() )
		.js.pipe( gulp.dest( distPathStr ) )
}

function asyncMainOther() {
	return gulp.src( srcOtherFilesGlobs )
		.pipe( gulp.dest( distPathStr ) )
}

function main() {
	try {
		deleteDist().then( () => {
			asyncMainOther()
			asyncMainTs()
		} )
	} catch ( e ) {
		watcher.remove()
		watcher.end()
		watcher = gulp.watch( watchingSrcGlob )
		watcher.on( 'change', main )
	}

}

watcher = gulp.watch( watchingSrcGlob )
watcher.on( 'change', main )

gulp.task( "default", () => {
	main()
} )



