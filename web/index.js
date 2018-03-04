"use strict"

const express = require("express")

const PORT = process.argv[2] || 3000
const HOST = "0.0.0.0"

const app = express()

app.use(express.static("./src"))

app.listen(PORT, HOST)
console.log(`Server is running on ${HOST}:${PORT}`)