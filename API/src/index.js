const express = require('express');
const path = require('path');
const app = express();

app.use(express.json());

//App Acces Public
app.set("port", process.env.PORT || 80);
app.listen(app.get("port"), () => console.log ("Server on http://localhost:"+app.get("port")));

//Api Routes
const apiRoutes = require('./routes/apisRoutes');
app.use('/', apiRoutes);