console.clear();
const express = require('express');
require('dotenv').config();
const connectDB = require('./database/dbConnection');
const {uploadRoutes , downloadRoutes , infoRoutes} = require('./routes')
const port = process.env.PORT || 8080;

connectDB();
const app = express();
app.use(express.json());

app.use('/files', infoRoutes);
app.use('/files', downloadRoutes);
app.use('/api/files', uploadRoutes);

app.listen(port, () => console.log(`listening on port ${port}`));