const express = require('express');
const app = express();
const mongoose = require('mongoose');
const stuffRoutes = require('./Route/stuff');
const userRoutes = require('./Route/user');
                  //'mongodb+srv://stonnee:193705@axel-ims6t.mongodb.net/test?retryWrites=true&w=majority'
mongoose.connect('mongodb+srv://stonnee:Troove123@cluster0.dajq1.mongodb.net/myFirstDatabase?retryWrites=true&w=majority',
  { useNewUrlParser: true,
    useUnifiedTopology: true })
  .then(() => console.log('Connexion à MongoDB réussie !'))
  .catch((err) => console.log(err));


//bug cors
app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
  next();
});

const bodyParser = require('body-parser');

app.use(bodyParser.json());

app.use('/api/stuff', stuffRoutes);
app.use('/api/auth', userRoutes);


module.exports = app;
