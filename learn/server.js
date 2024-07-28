const http = require('http');
const fs = require('fs');
const _ = require('lodash');

const server = http.createServer((req, res) => {
    const n = _.random(1, 20);
    console.log(n);

    let path = './views/';

    // set header content type
    res.setHeader('Content-Type', 'text/html');

    switch(req.url){
        case '/':
            path += 'index.html';
            res.statusCode = 200;
            break;
            
        case '/about':
            path += 'about.html';
            res.statusCode = 200;
            break;

        case '/about-me':
            res.setHeader('Location', '/about');
            res.statusCode = 301;
            res.end();
            break

        default:
            path += '404.html';
            res.statusCode = 404;
            break;
    }

    fs.readFile(path, (err, data) => {
        if(err){
            console.log(err);
            res.end();
        }else{
            // res.write(data);
            res.end(data);
        }
    });

})

server.listen(3000, 'localhost', () => {
    console.log('listening for request on port 3000');
})