var express=require ('express');
var path= require('path');

var app= express()

if (process.env.NODE_ENV === 'production') {
    app.use('/', express.static('../build'));
    app.get('*', (req, res) => {
        res.sendFile(path.join(__dirname, '..', 'build', 'index.html'))
    })
}
app.listen(9001)