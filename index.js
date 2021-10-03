// Add your code here
const baseURL = 'http://localhost:3000/users';


const formData = (username,emailname) => {return{ 
name: username,
email: emailname}}

const createUser = (username,emailname) => { return {
  method:"POST",
  headers: {
    "Content-Type": "application/json",
    "Accept": "application/json",
  },
  body: JSON.stringify(formData(username,emailname)), 
}}; 

// console.log(createUser)

// console.log('hello')

function submitData(username,emailname){
  fetch(baseURL,createUser(username,emailname))
  .then(response => response.json())
  .then(object => {
    let thingToAttachto = document.querySelector('body');
    console.log(thingToAttachto)
    let newElement = document.createElement('h1');
    console.log(newElement)
    newElement.id = object.id
    console.log(newElement)
    thingToAttachto.append(newElement);
  })
  .catch((error) => {
   thingToAttachto.innerHTML = error.message})
  }
;

console.log(submitData('Sketch', "Candy@gmail.com"));


// console.log(fetch("http://localhost:3000/users",{
//   method:'DELETE',
//   headers: {
//     'content-type':'application/json'
//   }
// }).then(response => response.json())
// .then((obj) => console.log(obj))



// function submitData(){
//   fetch(baseURL,createUser)
//   .then(response => response.json())
//   .then(object => console.log(object))
//   .catch((error) => {
//     alert('Bad Things!')
//     console.log(error.message)})
// };

// console.log(submitData());

  // alert = (error) => {
  //   let newErrorBox = document.createElement('h1');
  //   let errorAppendto = document.getElementById('body');
  //   newErrorBox.textContent = alert('Bad Things')
  //   errorAppendto.append(newErrorBox);
  // }