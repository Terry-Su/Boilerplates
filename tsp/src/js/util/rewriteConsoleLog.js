var $ = require('../util/jquery.js')

window.console.log = (content) => {
  $('body').prepend(`<p style="color:red;">${content}</p>`)
}