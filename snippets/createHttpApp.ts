import http from 'http'
const initApp = (app = {
  server: null,
  _requestFns: [],
  get: (url, callback: (req: http.ClientRequest, res: http.ServerResponse) => any, options = []) => {
    app._requestFns.push((req, res) => {
      if (req.url === url && req.method.toLowerCase() === 'get') {
        callback(req, res)
      }
    })
  },
  post: (url, callback: (req: http.ClientRequest, res: http.ServerResponse) => any, options = []) => {
    app._requestFns.push((req, res) => {
      callback = typeof options === 'function' ? options : callback
      if (req.url === url && req.method.toLowerCase() === 'post') {
        callback(req, res)
      }
    })
  }
}, port = 3200) => {
  app.server = http
    .createServer((req, res) => {
      app._requestFns.forEach(requestFn => requestFn(req, res))
    })
    .on('error', () => initApp(app, port + 1))
    .listen(port, () => {
      console.log(`Listening on: http://localhost:${port}`)
    })
  return app
}

const app = initApp()

app.get('/', (req, res) => {
  res.end('Hello Http World!')
})
