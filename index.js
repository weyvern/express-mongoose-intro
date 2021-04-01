import express from 'express';
import mongoSanitize from 'express-mongo-sanitize';
import postsRouter from './routes/posts.js';
import studentsRouter from './routes/students.js';
import 'dotenv/config.js';
import './db/mongoose.js';

const app = express();
const port = process.env.PORT || 5000;

app.use(express.json());
// Sanitizes input to remove unwanted https://www.npmjs.com/package/express-mongo-sanitize
app.use(mongoSanitize());
app.use('/posts', postsRouter);
app.use('/students', studentsRouter);

app.listen(port, () => console.log(`Server running on port: ${port}`));
