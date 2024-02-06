import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import userRoutes from './routes/user.routes.js';
import authRoutes from './routes/auth.routes.js';
import cookieParser from 'cookie-parser';

const app = express();
app.use(express.json());
dotenv.config();
app.use(cookieParser());

mongoose.connect(process.env.MONGO_URI)
.then(()=>{
  console.log('MongoDb is connected');
}).catch((err)=>{
  console.log(err)
});

app.get('/', (req, res) => {
  res.send('Hello World');
});

app.use('/api/user',userRoutes);
app.use('/api/auth',authRoutes);

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});

app.use((err,req,res,next)=>{
  const statusCode = err.statusCode || 500;
  const message = err.message || "Internal Server Error";
  res.status(statusCode).json({
    success:false,
    statusCode,
    message
  })

})