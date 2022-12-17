
const connecttoMongo=require('./db');
var cors = require('cors');
var bodyParser = require('body-parser');
connecttoMongo();
const express = require('express')
const port=4000;
const app = express();
app.use(cors());
app.use(express.json());
app.use("/api1/v1",require("./routes/yogauser"));
app.use("/api1/v1",require("./routes/yogapayment"));
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
});
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));