import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from 'angularfire2/firestore';
import { AngularFireDatabase } from 'angularfire2/database';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class ProjectService{
    
    items: Observable<any[]>;

    constructor(private pro: AngularFirestore) { 
        
      }

    getProjects(){
        this.items = this.pro.collection('project').valueChanges();
        return this.items;
    }

    getEditProject(id:string){
        return   this.pro.collection("project").doc(id).ref.get().then(function(doc) {
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

       onUpdate(prod){
        this.pro.collection("project").doc(prod).update(prod.prodid).then(function() {
            console.log("Document successfully Updated!");
        }).catch(function(error) {
            console.error("Error updating document: ", error);
        });
    }

    onDelete(id: string){
        this.pro.collection("project").doc(id).delete().then(function() {
            console.log("Document successfully deleted!");
        }).catch(function(error) {
            console.error("Error removing document: ", error);
        });
    }
}