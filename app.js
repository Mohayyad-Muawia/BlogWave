const express = require('express');
const morgan = require('morgan');
const mongoose = require('mongoose');
const blogRoutes = require('./routes/blogRoutes');

// express app
const app = express();

// conect to mongo db
const dbURI = 'mongodb+srv://loki:loki1234@node-cluster.acolhuq.mongodb.net/node-DB?retryWrites=true&w=majority&appName=node-cluster'
mongoose.connect(dbURI)
.then((reault) => app.listen(3000))
.catch(err => console.log(err));
  

// register view engine
app.set('view engine', 'ejs');

// middleware and statics
app.use(express.static('puplic'));
app.use(express.urlencoded({ extended: true }));
app.use(morgan('dev'));

// app.set('views', 'myviews');

// router
app.get('/', (req, res) => {
  res.redirect('/blogs');
});

app.get('/about', (req, res) => {
  res.render('about', { title: 'About' });
});

// blog routes
app.use('/blogs', blogRoutes);

// 404 page
app.use((req, res) => {
  res.status(404).render('404', { title: '404' });
});