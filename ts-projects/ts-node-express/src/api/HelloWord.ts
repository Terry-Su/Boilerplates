import app from '../app'

app.post('/hello-world', (req, res) => {
  res.send('hello-world')
})
