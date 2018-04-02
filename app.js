const express = require('express')
const app = express()
let bodyParser = require('body-parser')
let cors = require('cors')

var Department = require('./department')

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.text())
app.use(bodyParser.json({type: 'application/json'}))
app.use(cors())

// in NodeJS/Express (server)
app.all('/*', (req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*')
  res.header('Access-Control-Allow-Headers', 'X-Requested-With, Content-Type, Access-Control-Allow-Headers')
  res.header('Access-Control-Allow-Methods', 'GET, POST, PUT')
  next()
})
//to get all departments
app.get('/departments', (req, res) => {
	Department.all()
		.then(function (departments) {
		  res.status(200)
			.json(departments)
		})
		.catch(function (err) {
			console.log(err)
			res.status(500).json({error: true, data: {error: err,
        message: err.message}});
		  })
})
//by name
app.get('/ByDepartment', (req, res) => {
  //console.log(req.query.department)
  Department.byDepartment(req.query.department)
		.then(function (departments) {
		  res.status(200)
			.json(departments)
		})
		.catch(function (err) {
			console.log(err)
			res.status(500).json({error: true, data: {error: err,
        message: err.message}});
		  })
})
//by id
app.get('/ById', (req, res) => {
	console.log(req.query.id);
  let departmentId = req.query.id
  Department.forge({id: departmentId}).fetch().then(function (departments) {
    if (!departments) {
      return res.status(404).json({ error: true, message: 'department not found' })
    } else {
      res.status(200).json(departments)
    }
  }).catch((err) => {
    console.log(err)
    res.status(500).json({error: true, data: {error: err, message: err.message}})
  })
})
app.get('/', (req, res) => res.send('Hello World!'))

app.listen(3000, () => console.log('Example app listening on port 3000!'))
