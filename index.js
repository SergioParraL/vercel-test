const express = require('express')
const product = require('./test/product')

const app = express()

const PORT = process.env.PORT || 5051

app.use('test/product', product )

app.listen(PORT, () => console.log(`server is listening at ${PORT}`))