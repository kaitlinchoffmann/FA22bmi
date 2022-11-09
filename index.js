const express = require('express');
const app = express();

// const userRoutes = require('./server/routes/user');
// "database" as object literal
const users = [
  {
    userId: 12345,
    userName: "cathy123"
  },
  {
    userId: 55555,
    userName: "fredburger"
  },
  {
    userId: 23412,
    userName: "bobbyjones"
  }
];

function getAllUsers() {
  return users;
}

//CORS middleware
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");  
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization");
  res.header("Access-Control-Allow-Methods", "GET,POST,PUT,DELETE,OPTIONS");  
  next();
});

// app.use("/users", userRoutes);

// router
const router = express.Router();

router.get('/', async (req, res) => {
  try {
    const users = await getAllUsers();
    console.log(users);
    res.send(users);
  } catch(err) {
    res.status(401).send({message: err.message});
  }
})

app.use('/', router);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server started on port ${PORT}!`));