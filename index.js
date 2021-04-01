import express from 'express';
import postsRouter from './routes/posts.js';
import 'dotenv/config.js';
import './db/mongoose.js';

const app = express();
const port = process.env.PORT || 5000;

app.use(express.json());
app.use('/posts', postsRouter);

app.listen(port, () => console.log(`Server running on port: ${port}`));
