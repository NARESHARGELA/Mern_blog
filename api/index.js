import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();

const app = express();

const PORT = process.env.PORT || 3000;
const MONGO_URI = process.env.MONGO;

mongoose.connect(MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => {
    console.log('MongoDB connected successfully!');
  })
  .catch((err) => {
    console.error('MongoDB connection error:', err);
  });

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}!`);
});
