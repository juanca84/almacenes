const express = require('express');
const morgan = require("morgan");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();
const port = process.env.PORT;

// Middlewares
app.use(cors());
app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// require apis
const cuentasRoutes = require('./routes/cuenta_contable');

app.use('/api', cuentasRoutes);

app.get('/', (req, res) => {
  res.send('Sistema de almacenes')
})

app.listen(port, err => {
  if (err) {
    console.log(err);
  } else {
    console.log("Listening on PORT", port);
  }
})
