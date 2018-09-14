//require mongoose module
import { connect, connection } from 'mongoose'

//require chalk module to give colors to console text
import { bold } from 'chalk'

//require database credentials file
import credentials from '../credentials'


const dbURI = `mongodb://${credentials.username}:${credentials.password}@ds155252.mlab.com:55252/loop-phone`
const connected = bold.cyan
const error = bold.yellow
const disconnected = bold.red
const termination = bold.magenta

export default function(){

    connect(dbURI)

    connection.on('connected', function(){
        console.log(connected("Mongoose default connection is open to ", dbURL))
    })

    connection.on('error', function(err){
        console.log(error("Mongoose default connection has occured "+err+" error"))
    })

    connection.on('disconnected', function(){
        console.log(disconnected("Mongoose default connection is disconnected"))
    })

    process.on('SIGINT', function(){
        connection.close(function(){
            console.log(termination("Mongoose default connection is disconnected due to application termination"))
            process.exit(0)
        })
    })
}