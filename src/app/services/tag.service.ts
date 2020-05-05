import { Injectable } from "@angular/core";
import {
  AngularFirestore,
  AngularFirestoreDocument,
  AngularFirestoreCollection,
} from "@angular/fire/firestore";
import { Tag } from "../shared/Plan";
import { map } from "rxjs/operators";
@Injectable({
  providedIn: "root",
})
export class TagService {
  tagColl: AngularFirestoreCollection<Tag>;
  constructor(private afs: AngularFirestore) {
    this.tagColl = this.afs.collection("tags");
  }
  getTags() {
    return this.tagColl.snapshotChanges().pipe(
      map((actions) => {
        return actions.map((a) => {
          const data = a.payload.doc.data() as Tag;
          const id = a.payload.doc.id;
          return { id, data };
        });
      })
    );
  }
  pushTags(tag: Tag) {
    this.tagColl.add(tag);
  }
}
