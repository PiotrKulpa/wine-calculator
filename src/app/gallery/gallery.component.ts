import { Component, OnInit } from '@angular/core';

import { AngularFirestore } from 'angularfire2/firestore';
import { AngularFireStorage } from 'angularfire2/storage';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})
export class GalleryComponent implements OnInit {
  items: Observable<any[]>;
  profileUrl: Observable<string | null>;
  constructor(db: AngularFirestore, private storage: AngularFireStorage) {
    this.items = db.collection('images').valueChanges();
    const ref = this.storage.ref('images/');
    this.profileUrl = ref.getDownloadURL();
    console.log(this.profileUrl);
  }

  ngOnInit() {
  }

  addImage(event) {
  const file = event.target.files[0];
  console.log(file);
  //folder/filename.jpg
   const filePath = `/images/${file.name}`;
   const ref = this.storage.ref(filePath);
   const task = ref.put(file);
  }
  //TODO jeśli ok(uzyj obietnicy sledzacej postep), to this.profileUrl = ref.getDownloadURL() i zapisujemy dane w bazie

}
