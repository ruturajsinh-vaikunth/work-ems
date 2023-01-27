import path from 'path'
import cors from 'cors'
import express from 'express'
import dotenv from 'dotenv'
import bodyParser from 'body-parser'
import colors from 'colors'
import connectDB from './config/db.js'
import userRoutes from './routes/userRoutes.js'
import { errorHandler, notFound } from './middleware/errorMiddleware.js'
import employee from './routes/api/employee.js'

const __dirname = path.resolve()

// Deployment configuration
//configure env file in dev mode
dotenv.config()

// configure env file in production
if (process.env.NODE_ENV === undefined) {
  dotenv.config({ path: './.env' })
}

// Connect to database
connectDB()

const app = express()

// Body parser

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: false
}));
app.set("view engine","ejs");
app.use(cors());
// CORS
app.use(
  cors({
    origin: '*',
  })
)

// API routes
app.use('/api/user', userRoutes);
app.use('/api/employee', employee);

if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, '/frontend/build')))

  app.get('*', (req, res) =>
    res.sendFile(path.resolve(__dirname, 'frontend', 'build', 'index.html'))
  )
}

// Middleware
app.use(notFound)
app.use(errorHandler)

const PORT = process.env.PORT || 5000
app.listen(
  PORT,
  console.log(
    `Server running in ${process.env.NODE_ENV} mode on port http://localhost:${PORT}`
      .yellow.bold
  )
)
