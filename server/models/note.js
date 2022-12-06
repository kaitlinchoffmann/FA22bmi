const con = require("./db_connect");

// Table Creation 
async function createTable() {
  let sql=`CREATE TABLE IF NOT EXISTS notes (
    noteID INT NOT NULL AUTO_INCREMENT,
    noteContent VARCHAR(255),
    userID INT NOT NULL,
    CONSTRAINT notePK PRIMARY KEY(noteID),
    CONSTRAINT noteFK FOREIGN KEY(noteID) references users(userID)
  ); `
  await con.query(sql);
}
createTable();