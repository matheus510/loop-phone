import express from 'express'
import bodyParser from 'body-parser'
import morgan from 'morgan'
import cors from 'cors'
import dbConnect from './db'
import cellphoneAPI from './api/components/cellphone/cellphoneAPI'

process.env.PORT = 5000

const app = express()

// Set up logger
app.use(morgan('dev'))

// Parse body params and attach them to req.body
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

// Enable CORS - Cross Origin Resource Sharing
app.use(cors())

// Set cellphone routes
app.use('/cellphones/', cellphoneAPI)

// Connect to database
dbConnect()

// Listen on port 5000
app.listen(process.env.PORT, () => { console.log(`Listening on port:${process.env.PORT}`) })

export default app
