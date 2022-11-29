const con = require("./db_connect");

async function createTable() {
  let sql=`CREATE TABLE IF NOT EXISTS users (
    userID INT NOT NULL AUTO_INCREMENT,
    userName VARCHAR(255) NOT NULL UNIQUE,
    userWeight NUMERIC,
    userHeight NUMERIC,
    password VARCHAR(255) NOT NULL,
    CONSTRAINT userPK PRIMARY KEY(userID)
  ); `
  await con.query(sql);
}
createTable();

async function registerUser() {
  const sql = `INSERT INTO users
    (userName, userHeight, userWeight, password)
    VALUES ("bobby", 64, 120, "password");
  `
  await con.query(sql);
}

async function getAllUsers() {
   const sql = `SELECT * FROM users;`;
   let users = await con.query(sql);
   console.log(users);
}
getAllUsers();

async function getUser(userName) {
  let sql = `
    SELECT * FROM users 
      WHERE userName = "${userName}"
  `;

  return await con.query(sql);  
}

async function login(user) { // {userName: "sda", password: "gsdhjsga"}
  let cUser = await getUser(user.userName); //[{userName: "cathy123", password: "icecream"}]
  
  if(!cUser[0]) throw Error("Username not found");
  if(cUser[0].password !== user.password) throw Error("Password incorrect");

  return cUser[0];
}

/*
let cathy = {
  userName: "cathy123",
  password: "icecream"
}; 

login(cathy);
*/

module.exports = { getAllUsers, login };
