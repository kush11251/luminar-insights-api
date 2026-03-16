const express = require('express');
const app = express();
const metricsController = require('./controllers/metrics');
app.use(express.json());
app.use('/metrics', metricsController);
const port = 3000;
app.listen(port, () => console.log(`Server started on port ${port}`));