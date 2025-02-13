const express = require('express');

const { upload } = require('./services/upload.service');

const app = express()

app.post('/upload', upload.single('gingka'), (req, res) => {
    res.status(201).json({ "bingo": "file uploaded successfullyyy...." });
});

app.listen(4000, () => { console.log("server up and running on PORT:4000") });