const express = require('express')
const app = express()

const mentorRouter = require('./routes/mentors')

//middleware
app.use(express.json())

//montando el router
app.use('/mentors', mentorRouter)

app.get('/', (request, response) => {
    response.json({
        success: true,
        message: 'Kodemia API'
    })
})

module.exports = app