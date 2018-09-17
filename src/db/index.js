// require mongoose module
import mongoose from 'mongoose'

// require chalk module to give colors to console text
import { bold } from 'chalk'

// require database credentials file
import credentials from '../../credentials'

const dbURI = `mongodb://${credentials.username}:${credentials.password}@ds155252.mlab.com:55252/loop-phone`
const connected = bold.cyan
const error = bold.yellow
const disconnected = bold.red
const termination = bold.magenta

let dbConnection = () => {
  mongoose.connect(dbURI, { useNewUrlParser: true })

  mongoose.connection.on('connected', () => {
    console.log(connected('Mongoose connection with db stabilished'))
  })

  mongoose.connection.on('error', (err) => {
    console.log(error('Mongoose connection has occured ' + err + ' error'))
  })

  mongoose.connection.on('disconnected', () => {
    console.log(disconnected('Mongoose connection is disconnected'))
  })

  process.on('SIGINT', () => {
    mongoose.connection.close(() => {
      console.log(termination('Mongoose connection is disconnected due to application termination'))
      process.exit(0)
    })
  })
}

export default dbConnection
