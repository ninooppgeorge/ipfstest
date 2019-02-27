const express = require('express')
var ipfs = require('./test')


const app = express()
const port = 3000



app.use('/ipfs', ipfs)

app.listen(port, () => console.log(`Example app listening on port ${port}!`))