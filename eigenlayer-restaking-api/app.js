const express = require('express');
const cors = require('cors');
require('dotenv').config();

const connectDB = require('./utils/db'); // <-- import DB connection

const restakersRoutes = require('./routes/restakers');
const validatorsRoutes = require('./routes/validators');
const rewardsRoutes = require('./routes/rewards');

const app = express();
const PORT = process.env.PORT || 5000;

connectDB(); // <-- Connect to MongoDB

app.use(cors());
app.use(express.json());

app.use('/restakers', restakersRoutes);
app.use('/validators', validatorsRoutes);
app.use('/rewards', rewardsRoutes);

app.get('/', (req, res) => {
  res.send('EigenLayer Restaking API is running');
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
