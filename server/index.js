const express = require('express'); //importing express
const app = express();
const mysql = require('mysql'); //importing mysql
const cors = require('cors');

//have to use these
app.use(cors());
app.use(express.json());

//here we are connecting to the SQL database
const db = mysql.createConnection({
  user: 'root',
  host: 'localhost',
  password: 'Test@123',
  database: 'USERS',
});

// here I am creating a route - localhose:3001/create
// if i want to create a user i am going to my front end
// and I'm going to make a request to the /create
// using request and response in express
app.post('/create', (req, res) => {
  // here i am bringing the .firstname, .lastname... variables from the front end, I have not sent them into back end yet.
  const title = req.body.title; //body is object that contains .title
  const firstname = req.body.firstname;
  const lastname = req.body.lastname;
  const mobile = req.body.mobile;
  const email = req.body.email;
  const homelineone = req.body.homelineone;
  const homelinetwo = req.body.homelinetwo;
  const hometown = req.body.hometown;
  const homecounty = req.body.homecounty;
  const homeeircode = req.body.homeeircode;
  const shiplineone = req.body.shiplineone;
  const shiplinetwo = req.body.shiplinetwo;
  const shiptown = req.body.shiptown;
  const shipcounty = req.body.shipcounty;
  const shipeircode = req.body.shipeircode;
  // here i am running an sql query
  db.query(
    //inserting into the users table into name, age... columns the value of ? ? ? ? ?
    'INSERT INTO users(title, firstname, lastname, mobile, email,homelineone, homelinetwo, hometown, homecounty,homeeircode, shiplineone,shiplinetwo,shiptown,shipcounty,shipeircode) VALUES(?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)',
    [
      title,
      firstname,
      lastname,
      mobile,
      email,
      homelineone,
      homelinetwo,
      hometown,
      homecounty,
      homeeircode,
      shiplineone,
      shiplinetwo,
      shiptown,
      shipcounty,
      shipeircode,
    ], //i am passing an array into those ?
    (err, result) => {
      //i am making a callback function if theres an error then log it else send a message to notify user of success.
      if (err) {
        console.log(err);
      } else {
        res.send('values inserted'); //res.send sends info from back end to front 'values inserted'
      }
    }
  );
});

app.get('/users', (req, res) => {
  db.query('SELECT * FROM users', (err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.send(result); //sends result to front end
    }
  });
});

app.delete('/delete/:id', (req, res) => {
  const id = req.params.id;
  db.query('DELETE FROM users WHERE id = ?', id, (err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.send(result);
    }
  });
});

app.put('/update/:id', (req, res) => {
  const id = req.params.id;
  const { title, mobile, email } = req.body;

  const sqlQuery = `
    UPDATE users SET
      title = ?,
      mobile = ?,
      email = ?
    WHERE id = ?
  `;

  db.query(sqlQuery, [title, mobile, email, id], (err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.send('User updated');
    }
  });
});

app.listen(3001, () => {
  console.log(`server is running on port 3001`);
});
