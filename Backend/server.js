const express = require('express')
const cors = require('cors')
require('dotenv').config();
const { connection } = require('./Config/db')
const { UserRoute } = require('./Routes/User.route')


const App = express()
App.use(cors())
App.use(express.json())

App.use('/users', UserRoute)



App.listen(process.env.PORT, async (req, res) => {
    try {
        await connection
        console.log('DB is connected')
    } catch (err) {

        console.log('DB is not connected')
    }
    console.log(`DB is runnig at ${process.env.PORT}`)
})

