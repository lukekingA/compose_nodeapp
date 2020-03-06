var Person = require('../models/person.js')
var express = require('express');
var router = express.Router();
const {Pool, Client} = require('pg')
const connectString = 'postgres://postgres:postgres@db:5432/webapp'

const client = new Client({
  connectionString:connectString
})

/* GET home page. */
router.get('/', function(req, res, next) {
  res.sendfile('views/home.html');
});

router.get('/get/persons', (req,res) => {
  client.connect()
  client.query(`select * from persons`, (err, result) => {
    if (!err) {
      res.json(result.rows)
      //client.end()
    } else {
      res.status(400).send({
        mess: `couldn't get all persons`,
        err: `${err}`
      })
    }
  })
})

router.get('/get/person/firstname/:firstName/lastname/:lastName', (req,res) => {
  let ln = req.params.lastName
  let fn = req.params.firstName
  client.connect()
  client.query(`select * from persons where last_name = '${ln}' and  first_name = '${fn}';`, (err, result) => {
    if (!err) {
      res.json(result.rows)
      //client.end()
    } else {
      res.status(400).send({
        mess: `couldn't get person by first name: ${fn}, lastname: ${ln}`,
        err: `${err}`
      })
    }
  })
})

router.get('/get/devaddress/firstname/:firstName/lastname/:lastName', (req,res) => {
  let ln = req.params.lastName
  let fn = req.params.firstName
  client.connect()
  client.query(`select * from street_address where  person_id = (select id from persons where last_name = '${ln}' and  first_name = '${fn}');`, (err, result) => {
    if (!err) {
      res.json(result.rows)
      //client.end()
    } else {
      res.status(400).send({
        mess: `couldn't get dev address by first name: ${fn}, lastname: ${ln}`,
        err: `${err}`,
      })
    }
  })
})

router.post('/post/person', (req, res) => {
  let fN = req.body.firstName
  let lN = req.body.lastName
  let job = req.body.job
  client.connect()
  client.query(`insert into persons ("first_name", "last_name", "job") values ('${fN}', '${lN}', '${job}');`, (err, result) => {
    if(!err) {
      res.send(result)
    } else {
      res.status(400).send({
        mess: `${err}`
      })
    }
  })
})

router.post('/post/person', (req, res) => {
  let fN = req.body.firstName
  let lN = req.body.lastName
  let job = req.body.job
  client.connect()
  client.query(`insert into persons ("first_name", "last_name", "job") values ('${fN}', '${lN}', '${job}');`, (err, result) => {
    if(!err) {
      res.send(result)
    } else {
      res.status(400).send({
        mess: `${err}`
      })
    }
  })
})

module.exports = router;
