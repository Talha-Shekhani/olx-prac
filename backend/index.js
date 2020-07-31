// const conn = require('./connection.js')
const express = require('./node_modules/express')
const http = require('http')
const morgan = require('./node_modules/morgan')
const bodyParser = require('./node_modules/body-parser')
const Ads = require('./routes/ads')
const Cat = require('./routes/categories')

// const hostname = '192.168.1.63'
const hostname = 'localhost'
const port = 3000
// const port = 8080

const app = express()
app.use(morgan('dev'))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }));
app.use('/ads', Ads)
app.use('/fetchCat', Cat )
// app.use('/fetchSubcat', Subcat )
app.use(express.static(__dirname+ '/assets/images'))

const server = http.createServer(app)

server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}`)
})