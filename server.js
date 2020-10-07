const express = require('express')
const app = express()
const port = 3000

app.use(express.static('./')) // Within the current folder, serve all statistical files

app.get('/', (req, res) => {
    res.send('index.html')
})

app.listen(port, () => {
	console.log(`listening at http://localhost:${port}`)
})