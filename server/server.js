require('dotenv').config();
const path = require('path');
const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

const userController = require('./controllers/userController');

const ticketsRouter = require('./routes/tickets');

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

/**
 * handle requests for static files
 */

app.use(express.static(path.resolve(__dirname, '../client/public')));

app.use('/api/tickets', ticketsRouter);

app.post('/login', userController.verifyUser, (req, res) => {
  res.status(200).json({ user: res.locals.user });
});

app.post('/register', userController.createUser, (req, res) => {
  res.sendStatus(200);
});

app.use('*', (req, res) => {
  res.sendStatus(404);
});

app.use((err, req, res, next) => {
  console.log(err);
  res.status(500).send({ error: err });
});

const PORT = process.env.PORT || 3000;

mongoose
  .connect(process.env.DB_URI)
  .then(() =>
    app.listen(PORT, () => {
      console.log(`Server listening on port: ${PORT}`);
    })
  )
  .catch((e) => console.log(e));

module.exports = app;
