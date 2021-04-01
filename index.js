import express from 'express';
import postsRouter from './routes/posts.js';
import studentsRouter from './routes/students.js';
import 'dotenv/config.js';
import './db/mongoose.js';

const app = express();
const port = process.env.PORT || 5000;

app.use(express.json());
app.use('/posts', postsRouter);
app.use('/students', studentsRouter);

app.listen(port, () => console.log(`Server running on port: ${port}`));
