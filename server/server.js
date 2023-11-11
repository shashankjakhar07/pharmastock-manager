import express from 'express'
import cors from 'cors'
import morgan from 'morgan'
import connection from './database/connection.js'
import route from './router/route.js'
const app=express()
// Middelwares
app.use(express.json())
app.use(cors())
app.use(morgan('tiny'))
app.disable('x-powered-by')  // less hackers know your stack

const port=8080

app.use('/',route)



// connect database and Start Server
const start=async()=>{
    await connection();
    app.listen(port,()=>{
        console.log('Server is running');
    })
}

start()