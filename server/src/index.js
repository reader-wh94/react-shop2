const express = require('express');
const path = require('path');
const app = express();
const port = 4000;
const cors = require('cors');
const mongoose = require('mongoose');

require('dotenv').config({ path: '../.env' });

app.use(cors());
app.use(express.json());

mongoose.connect(process.env.MONGO_URI)
  .then(() => {
    console.log('연결 완료');
  })
  .catch(err => {
    console.error(err);
  })

app.post('/', (req, res) => {
  console.log(req.body);
  res.json(req.body);
})

app.use(express.static(path.join(__dirname, '../uploads')));

app.listen(4000, () => {
  console.log(`${port}번에서 실행되었습니다.`);
});