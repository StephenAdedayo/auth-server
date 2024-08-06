const express = require('express')
const port = 5000
const server = express()
const works = 'server started sucessfully'
const userRoute = require('./routes/useRoutes')
const connectDB = require('./config/db')

connectDB()

server.use(express.json())


server.get('/api', (req, res) => {
    res.json({message: 'my server'})
})

server.use('/api', userRoute)

server.listen(port, () => {
console.log(works);

})