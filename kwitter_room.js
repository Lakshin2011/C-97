
//ADD YOUR FIREBASE LINKS HERE
var firebaseConfig = {
      apiKey: "AIzaSyDvmU7SlC33x0A4SXl_E91Sil8WTC4FX7Q",
      authDomain: "practice-24197.firebaseapp.com",
      databaseURL: "https://practice-24197-default-rtdb.firebaseio.com",
      projectId: "practice-24197",
      storageBucket: "practice-24197.appspot.com",
      messagingSenderId: "509510638526",
      appId: "1:509510638526:web:66b4505d7a1274032ef7ef"
    };
    firebase.initializeApp(firebaseConfig);
    function addRoom() {
          room_name = document.getElementById("room_name").value;
      localStorage.setItem("room_name",room_name);
      firebase.database().ref("/").child(room_name).update({
           purpose : "adding room name" 
      });
      window.location="kwitter_page.html";
      
    }
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
      console.log(Room_names);
      row="<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)'>#"+Room_names+"</div> <hr>";
      document.getElementById("output").innerHTML+=row;
      //End code
      });});}
getData();
function redirectToRoomName(name){
      console.log(name);
      localStorage.setItem("room_name",name);
      window.location="kwitter_page.html";
}
function logout(){
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location="index.html";
}