import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from 'angularfire2/firestore';
import { AngularFireDatabase } from 'angularfire2/database';
import { Observable } from 'rxjs/Observable';
@Injectable()
export class DeveloperService{
    
    items: Observable<any[]>;

    constructor(private pro: AngularFirestore) { 
        
      }

    getDeveloper(){
        this.items = this.pro.collection('developer').valueChanges();
        return this.items;
    }
    
    onDelete(id: string){
        this.pro.collection("developer").doc(id).delete().then(function() {
            console.log("Document successfully deleted!");
        }).catch(function(error) {
            console.error("Error removing document: ", error);
        });
    }

    getEditDeveloper(id:string){
        return   this.pro.collection("developer").doc(id).ref.get().then(function(doc) {
               if (doc.exists) {
                   console.log("Document data:", doc.data());
                   return doc.data();
               } else {
                   console.log("No such document!");
               }
             }).catch(function(error) {
                 console.log("Error getting document:", error);
             });
       }
}