// index.js
const express = require('express');
const mongoose = require('mongoose');

// Import controllers
const userController = require('./Controller/userController');
const postController = require('./Controller/postController');
const commentController = require('./Controller/commentController');

// Create Express app
const app = express();
app.use(express.json());

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/webassign', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log('Connected to MongoDB'))
.catch(err => console.error('Error connecting to MongoDB:', err));

// Define routes
app.post('/users', userController.createUser);
app.get('/users', userController.getAllUsers);

app.post('/posts', postController.createPost);
app.get('/posts', postController.getAllPosts);

app.post('/comments', commentController.createComment);
app.get('/comments', commentController.getAllComments);

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
