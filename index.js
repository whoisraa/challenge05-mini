const express = require('express');
const app = express();
const port = 3500;
const user = {
    name: null
};

app.use(express.urlencoded({
    extended: false
}));

app.set('view engine', 'ejs');

app.get('/', (req, res) => {
    res.render('index', {
        name: 'Binar Academy'
    });
});

app.post('/', (req, res) => {
    user.name = req.body.name;
    res.render('index', user);
});

app.listen(port, () => console.log(`The server has started on http://localhost:${port}`));