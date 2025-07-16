import express from 'express'
import mongoose from 'mongoose'
import dotenv from 'dotenv'
import cors from 'cors'
import splitRoutes from './routes/splitRoutes.js'

dotenv.config()
const app = express()
app.use(cors())
app.use(express.json())
mongoose.connect(process.env.MONGO_URI)
app.use('/api/splits', splitRoutes)
app.listen(5000)
