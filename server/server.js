const express = require('express');
const path = require('path');
const axios = require('axios');
const app = express();
const PORT = 3000;

app.use(express.static(path.join(__dirname, '../client/dist')));
app.use(express.json());


app.get('/restaurants/:id', function(req, res) {
    var id = req.params.id;
    axios.get(`http://localhost:3001/restaurants/${id}`)
        .then((response) => {
            //console.log(response.data);
            res.send(response.data)
            // res.sendStatus(200);
            //res.end();           
            //res.end(JSON.stringify(response.data))
        })
        .catch((err) => {
            res.end(err);
        })
})

app.get('/restaurants/:id', function(req, res) {
    var id = req.params.id;
    axios.get(`http://localhost:3001/restaurants/${id}`)
        .then((response) => {
            //console.log(response.data);
            res.send(response.data)
            // res.sendStatus(200);
            //res.end();           
            //res.end(JSON.stringify(response.data))
        })
        .catch((err) => {
            res.end(err);
        })
})

app.post('/restaurants/:id/review', function(req, res) {
    // note restaurant id is not needed.
    let review = req.body;
    let id = '1';
    axios.post(`http://localhost:3001/restaurants/${id}/review`, review)
        .then(() => {
            console.log('success insert review');
            res.sendStatus(200);
        })
        .catch((err) => {
            res.end(err);
        })
})

app.delete('/restaurants/:id/dish/review/:id', function(req, res) {
    // note restaurant id is not needed.
    let id = '1';
    let reviewId = req.params.id;
    axios.delete(`http://localhost:3001/restaurants/${id}/dish/review/${reviewId}`)
        .then(() => {
            console.log('success delete review');
            res.sendStatus(200);
        })
        .catch((err) => {
            res.end(err);
        })
})

app.patch('/restaurants/:id/dish/review/:id', function(req, res) {
    // note restaurant id is not needed.
    let id = '1';
    
    let patchId = req.params.id;
    let reviewUpdate = req.body;

    axios.patch(`http://localhost:3001/restaurants/${id}/dish/review/${patchId}`, reviewUpdate)
        .then(() => {
            console.log('success update review');
            res.sendStatus(200);
        })
        .catch((err) => {
            res.end(err);
        })
})






app.listen(PORT, () => console.log('Listening on port: ' + PORT));
