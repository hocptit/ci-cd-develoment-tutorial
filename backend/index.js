const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const app = express();
const port = 3001;
const mongoUri = process.env.mongoUri || 'mongodb://admin:admin@localhost:27017/admin'
mongoose.connect(mongoUri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(() => {
  console.log('MongoDB connected!');
}).catch((err) => {
  console.error('Failed to connect MongoDB:', err);
});

const articleSchema = new mongoose.Schema({
  title: String,
  content: String,
  createdDate: { type: Date, default: Date.now },
});

console.log("1");

app.get('/api/article', async (req, res) => {
  const Article = mongoose.model('Article', articleSchema);
  const article = new Article({
    title: 'Docker cơ bản 1',
    content: 'You will likely find yourself rebuilding the same Docker image over and over again. Whether it’s for the next release of your software, or locally during development. Because building images is a common task, Docker provides several tools that speed up builds.'
  });
  await article.save()
  console.log(article)
  res.json(article)
});

app.listen(port, () => {
  console.log(`Server started at http://localhost:${port}`);
});