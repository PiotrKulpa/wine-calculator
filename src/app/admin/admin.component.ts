import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection  } from 'angularfire2/firestore';
import { AngularFireStorage } from 'angularfire2/storage';
import { Observable } from 'rxjs';
import { finalize } from 'rxjs/operators';
import { AngularFireAuth } from 'angularfire2/auth';
import { auth } from 'firebase';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class AdminComponent implements OnInit {

  signinForm: FormGroup;

  images: Observable<any[]>;

  imagesCollection: AngularFirestoreCollection<any[]>;

  uploadPercent: Observable<number>;



  constructor(public afAuth: AngularFireAuth, db: AngularFirestore, private storage: AngularFireStorage) {
    this.images = db.collection('images').valueChanges();
    this.imagesCollection = db.collection('images');
 }

 login(youremail) {
   //TODO handle input forms programaticly

   // [START authwithemail]

       this.afAuth.auth.signInWithEmailAndPassword(this.signinForm.value.youremail, this.signinForm.value.yourpassword).catch(function(error) {
         // Handle Errors here.
         var errorCode = error.code;
         var errorMessage = error.message;
         // [START_EXCLUDE]
         if (errorCode === 'auth/wrong-password') {
           alert('Wrong password.');
         } else {
           alert(errorMessage);
         }
         console.log(error);
         //document.getElementById('quickstart-sign-in').disabled = false;
         // [END_EXCLUDE]
       });
       // [END authwithemail]

 }

 logout() {
   this.afAuth.auth.signOut();
 }

  ngOnInit() {
    this.signinForm = new FormGroup({
      'youremail': new FormControl('', [Validators.required, , Validators.email]),
      'yourpassword': new FormControl('', Validators.required)
    });
  }

  addImage(event) {
  const file = event.target.files[0];
  //folder/filename.jpg
   const filePath = `/images/${file.name}`;
   const fileRef = this.storage.ref(filePath);
   const task = this.storage.upload(filePath, file);


   // observe percentage changes
    this.uploadPercent = task.percentageChanges();
    // get notified when the download URL is available
    task.snapshotChanges().pipe(
        finalize(() => {
          fileRef.getDownloadURL().subscribe(url => {
          const Url = url; // mam url, wyzej mam nazwe pliku, potrzebuję czas
          let addDate = new Date().toLocaleString();
          let newImage = {date: addDate, name: file.name, src: Url}
          this.addDoc(newImage);
     });

        })
     )
    .subscribe()
  }

  addDoc(newImage) {
    this.imagesCollection.add(newImage)

  }

}
