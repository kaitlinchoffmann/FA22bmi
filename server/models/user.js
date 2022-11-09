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

module.exports = { getAllUsers };
