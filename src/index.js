
import './styles/main.css'

const firebaseConfig = firebase.initializeApp({
    apiKey: "AIzaSyB5dz82Olwh6Gezuw9GAsqIZesgOVTDCWg",
    authDomain: "events-59546.firebaseapp.com",
    projectId: "events-59546",
    storageBucket: "events-59546.appspot.com",
    messagingSenderId: "397686800845",
    appId: "1:397686800845:web:f5a46597f2736d14754484",
    measurementId: "G-HZWS0XFCVZ"
  });

const db = firebaseConfig.firestore();
const auth = firebaseConfig.auth();

document.getElementById("signup").onclick=function()
{
  let a=document.getElementById("mail");
  let b=document.getElementById("pass");
  console.log(a);
  firebase.auth().createUserWithEmailAndPassword(a.value,b.value)
  .then((userCredential) => {
    console.log(userCredential);
  })
  .catch((error)=>
  {
    alert(error);
  })
 
}
document.getElementById("signin").onclick=function()
{
  let o=document.getElementById("mail");
  let p=document.getElementById("pass");
  firebase.auth().signInWithEmailAndPassword(o.value,p.value)
  
    .then((userCredential)=>
    {
      console.log(userCredential);
      document.getElementById("signin").setAttribute("href","src/template.html")
      alert("User Succesfully Registered");
    })
    .catch((error)=>
    {
      alert(error);
    })

  }
document.getElementById("goo").onclick=function()
{
  let provider = new firebase.auth.GoogleAuthProvider();
  firebase.auth().signInWithPopup(provider).then((result)=>{
  
    var credential = result.credential;
    var user = result.user;
console.log(user);
alert("Signed in successfully using Google");

  })
  .catch((error)=>
  {
    console.log(error);
    alert(error);
  })
}