import { getCurrentUser, fetchData, removeCurrentUser } from "./main.js";

let user = getCurrentUser(); 
if(!user) window.location.href = "login.html";

console.log(user);

let userID = user.userID; 
console.log(userID);
/*
let note = {
  userID: userID,
  noteContent: "dsfs",
}

fetchData("/notes/getNotes", note, "POST")

*/

let deleteBtn = document.getElementById("delete-account");
if(deleteBtn) deleteBtn.addEventListener('click', deleteAccount);

function deleteAccount() {

  if(confirm("Are you sure you want to delete your account???")) {
    fetchData("/users/delete", user, "DELETE")
    .then((data) => {
      removeCurrentUser();
    })
    .catch((err) => {
      console.log(err)
    })
  } 
}

let editForm = document.getElementById("edit-form");
if(editForm) editForm.addEventListener('submit', editUser);

function editUser(e) {
  e.preventDefault();

  let username = document.getElementById('username').value;
  user.userName = username;

  fetchData("/users/edit", user, "PUT")
  .then((data) => {
    console.log(data);
  })
  .catch((err)=>{

  })
}
