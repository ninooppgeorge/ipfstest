var express = require('express')
var router = express.Router()

var ipfsClient = require('ipfs-http-client')


router.use(function timeLog (req, res, next) {
  console.log('Time: ', Date.now())
  next()
})


router.get('/', function (req, res) {
  
    var ipfs = ipfsClient('localhost', '5001', { protocol: 'http' });
    const validCID = 'QmQ2r6iMNpky5f1m4cnm3Yqw8VSvjuKpTcK1X7dBR1LkJF'

    const stream = ipfs.lsReadableStream(validCID)

    stream.on('data', (file) => {
    // write the file's path and contents to standard out
        console.log(file.path)
    })


})

module.exports = router