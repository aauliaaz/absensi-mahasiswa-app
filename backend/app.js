const express = require('express');
const cors = require('cors');
require('dotenv').config();

const absensiRoutes = require('./routes/absensi');

const app = express();
app.use(cors());
app.use(express.json());

app.use('/absensi', absensiRoutes);

app.listen(process.env.PORT, () => {
  console.log(`Server berjalan di port ${process.env.PORT}`);
});
