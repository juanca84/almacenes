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
const cuentasRoutes = require('./routes/cuentas_contables');
const articulosRoutes = require('./routes/articulos');
const ingresosRoutes = require('./routes/notas_ingresos');
const salidasRoutes = require('./routes/notas_salidas');

app.use('/api/v1', cuentasRoutes);
app.use('/api/v1', articulosRoutes);
app.use('/api/v1', ingresosRoutes);
app.use('/api/v1', salidasRoutes);

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
