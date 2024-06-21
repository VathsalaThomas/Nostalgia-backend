const express = require('express');
const cors = require('cors');
const ImageDetail = require('../config'); // Update the path to your config file

const app = express();
app.use(express.json());
app.use(cors());

app.get("/", async (req, res) => {
    const response = await ImageDetail.ImageDetail.get();
    const resp = response.docs.map(doc => doc.data());
    res.send(resp);
});

app.get("/details", async (req, res) => {
    const response = await ImageDetail.ImageGallery.get();
    const resp = response.docs.map(doc => doc.data());
    res.send(resp);
});

app.post("/create", async (req, res) => {
    const data = req.body;
    await ImageDetail.ImageDetail.add(data);
    res.send({ msg: 'Added successfully' });
});

app.post("/addDetails", async (req, res) => {
    const data = req.body;
    await ImageDetail.ImageGallery.add(data);
    res.send({ msg: 'Added Details' });
});

module.exports = app;
