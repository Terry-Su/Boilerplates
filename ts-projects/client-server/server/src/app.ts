const express = require('express')
const bodyParser = require('body-parser')
const cookieParser = require('cookie-parser')
const expressSession = require('express-session')
var cors = require('cors')
import {port} from '../config.json'

const app = express()

// app.use(express.static())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(cookieParser())
app.use(cors())
app.use(expressSession({
  secret: 'shh, it\'s a secret!',
  resave: true,
  saveUninitialized: true
}))

app.listen(port, () => {
  console.log(`listening on http://localhost:${port}`)
})

export default app
