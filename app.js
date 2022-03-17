const bodyparser = require('body-parser')
const express = require('express');
const app = express();
const PORT = 8080;
const cors = require('cors')

app.use(cors())
app.use(bodyparser.urlencoded({extended:false}))
app.use(bodyparser.json())

const allPost = [];

app.get('/', (req,res) => {
    res.send('<h1>Welcome to Homepage</h1>')
})

app.get('/showAllPosts', (req,res) => {
    res.status(200).json(allPost);
})

app.post('/newPost', (req,res) => {
    const date = new Date();
    const title = req.body.title;
    const description = req.body.description;
    allPost.push({title, description, date: date.toISOString()})
    console.log({title, description, date: date.toISOString()});
    res.sendStatus(200);
})

app.listen(PORT, () => {
    console.log("Server started at", PORT);
})