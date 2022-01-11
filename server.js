const express = require('express');
require('dotenv').config();
const middlewares = require('./middleware/notFound');
const swaggerUI = require('swagger-ui-express');
const cors = require('cors');
const userRoute = require('./routes/user');
const authRoute = require('./routes/auth');

const yamlJS = require('yamljs');
const swaggerDocument = yamlJS.load('./swagger.yaml');
const parcelRoute = require('./routes/ParcelRoutes');
const app = express();

const connectDB = require('./config/connectDB');
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());
app.use('/api/v1/users', userRoute);
app.use('/api/v1/auth', authRoute);
app.use('/api/v1/parcels', parcelRoute);
app.use('/api-docs', swaggerUI.serve, swaggerUI.setup(swaggerDocument));
app.use(middlewares.notFound);
app.use(middlewares.errorHandler);


const startServer = async () => {
  await connectDB();
  app.listen(PORT, () => {
    console.log(`app using environment ${process.env.NODE_ENV}`);
    console.log(`Listening on port ${PORT}`);
  });
};

startServer();
