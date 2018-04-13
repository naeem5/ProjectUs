import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  loadedFeature = 'header';

  ngOnInit(){
    //  firebase.initializeApp({
    //    apiKey: "AIzaSyCavfoOvW39WfhF0Cf3GoNvXIxNgeUQCE4",
    //    authDomain: "projectus-86730.firebaseapp.com",
    // });
    
  //  var config = {
  //   apiKey: "AIzaSyBi-mWYoUodl6YfWJDttNA1jdQE_H01b4I",
  //   authDomain: "ng-recipe-book-ec286.firebaseapp.com",
  //   projectId: "ng-recipe-book-ec286",
  // };

 /* var db = firebase.firestore();

  //firebase.initializeApp(config);
  //console.log(firebase);
  db.collection("users").add({
    first: "Ada",
    last: "Lovelace",
    born: 1815
})
.then(function(docRef) {
    console.log("Document written with ID: ", docRef.id);
})
.catch(function(error) {
    console.error("Error adding document: ", error);
}); */
  /*
  var database = firebase.database();
  var client = database.ref('user');

  var data = {
    username: "naeem",
    email: "naeem@outlook.com",
    password: "Hello123",
    role: "Client"
  }

  client.push(data);
  

  client.push(data, finished);
  function finished(error) {
  if (error) {
    console.log('ooops');
  } else {
    console.log('data saved!');
  } 
} */
  }

  onNavigate(feature: string) {
    this.loadedFeature = feature;
  }

  selectedToggle(e){
    console.log(e)
  }
}

