const contactForm = document.querySelector('#form')
    // ----------------------------------Fire base configrations--------------------------------

const firebaseConfig = {
    apiKey: "AIzaSyAWDoTOexgognFbdD89aQ-FSij6mhhxMPM",
    authDomain: "myweb-44852.firebaseapp.com",
    projectId: "myweb-44852",
    storageBucket: "myweb-44852.appspot.com",
    messagingSenderId: "292049216359",
    appId: "1:292049216359:web:b552e8d44a47c46db905c2",
    measurementId: "G-4FNVDWP227"
};

// ----------fire base initialization---------------------

firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();

const auth = firebase.auth();

// let firstName, lastName, userEmail, subject, message;
// function readFormData(){
//     lastName = document.querySelector('#lastName').value.trim();
//     userEmail = document.querySelector('#email').value.trim();
//     subject = document.querySelector('#subject').value.trim();
//     message = document.querySelector('#message').value.trim();
// }

// contactForm.onsubmit = function(){
//     console.log('done');
//     readFormData();
//     firebase.database().ref('ContactMessage/').push({
//         firstName: firstName,
//         lastName : lastName,
//         email : email,
//         subject : subject,
//         message: message

//     }).then((docRef) => {
//                 console.log("Document written with ID: ", docRef.id);
//             })
//             .catch((error) => {
//                 console.error("Error adding document: ", error);
//             });
//     alert('Message sent succefully!')
// }



// btnContact.addEventListener('click', e => {
//     e.preventDefault();
//     db.collection("contact").add({
//       firstName: contactPage.firstName.value,
//       lastName: contactPage.lastName.value,
//       email: contactPage.email.value,
//       subject: contactPage.subject.value,
//       message: contactPage.message.value,
//     }).then((docRef) => {
//         console.log("Document written with ID: ", docRef.id);
//     })
//     .catch((error) => {
//         console.error("Error adding document: ", error);
//     });

//   });


// ----------------------------------------Retrieve From FireBase------------
// function SelectAllData(){
//     var firebaseRef = firebase.database().ref("Comments");
//     firebaseRef.on("value",function(snapshot) {
//        snapshot.forEach(element => {
//         var names = element.val().Names;
//         var comment = element.val().Comments;
//         var cbody = document.getElementById("article-comments");
//         var dnames = document.createElement('div');
//         var dcomment = document.createElement('div');
//         dnames.innerHTML = names;
//         dcomment.innerHTML = comment;
//         cbody.appendChild(dnames);cbody.appendChild(dcomment);
//         // AddDataToTable(names,comment);
//        });
//     })
// }

// window.onload = SelectAllData();