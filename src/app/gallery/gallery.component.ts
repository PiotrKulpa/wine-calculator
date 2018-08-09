import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from 'angularfire2/firestore';
import { AngularFireStorage } from 'angularfire2/storage';
import { Observable } from 'rxjs';
import { finalize } from 'rxjs/operators';


@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})
export class GalleryComponent implements OnInit {
  images: Observable<any[]>;
  imagesCollection: Observable<any[]>;
  private imagesCollection: AngularFirestoreCollection<Item>;
  // profileUrl: Observable<string | null>;
  uploadPercent: Observable<number>;
  downloadURL: Observable<string>;
  constructor(db: AngularFirestore, private storage: AngularFireStorage) {
    this.images = db.collection('images').valueChanges();
    this.imagesCollection = db.collection('images');
  }

  ngOnInit() {
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
          this.downloadURL = fileRef.getDownloadURL().subscribe(url => {
         const Url = url; // mam url, wyzej mam nazwe pliku, potrzebuję czas
         let addDate = new Date().getFullYear();
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
