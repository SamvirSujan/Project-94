var firebaseConfig = {
      apiKey: "AIzaSyBz_h-XCdmi9jBZwrVq16Vlbro7LaMbIp8",
      authDomain: "project-94-830dc.firebaseapp.com",
      databaseURL: "https://project-94-830dc-default-rtdb.firebaseio.com",
      projectId: "project-94-830dc",
      storageBucket: "project-94-830dc.appspot.com",
      messagingSenderId: "481726188388",
      appId: "1:481726188388:web:6229943463f5a626f38871",
      measurementId: "G-G0YR4XFE4L"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
  
//ADD YOUR FIREBASE LINKS HERE

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code

      //End code
      });});}
getData();
