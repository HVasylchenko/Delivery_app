const http = require('http');
const url = require('url');
const { parse } = require('querystring');
const fs = require('fs');
const path = require('path');
const db = require('./db');

const Usersdb = db.users;

http.createServer((req, res) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST');
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
    res.setHeader('Access-Control-Allow-Credentials', true);
    
    if (req.method == 'GET') {
        res.end('server work method GET1');
        // console.log('server work method GET2');
    }
    else {
        // POST Method
        // console.log('server work method POST');
        let body = '';
        req.on('data', chunk => {
            body += chunk.toString();
        });
        req.on('end', () => {
            let obj = JSON.parse(body);
            // console.log (obj);
            res.writeHead(200, { "Content-Type": "application/json" });
            Usersdb.create({
                    address: obj.address,
                    timestamp: Math.floor(Date.now() / 1000),
                    email: obj.email,
                    phone: obj.phone,
                    name: obj.name,
                    order: obj.order,
                })
                .then(result => {
                    res.end(JSON.stringify({ 'result': true }));
                }).catch(err => {
                    console.log(err);
                    res.end(JSON.stringify({ 'result': false, "error": err }));
                });
        });
    }
}).listen(3500);