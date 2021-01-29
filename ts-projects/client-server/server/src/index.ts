import app from './app'
import './api/HelloWord'

app.get('*', (req, res) => {
  res.send('404 Not Found')
})
