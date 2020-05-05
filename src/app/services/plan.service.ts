import { Injectable } from "@angular/core";
import {
  AngularFirestore,
  AngularFirestoreDocument,
  AngularFirestoreCollection,
} from "@angular/fire/firestore";
import { Plan, PlanId } from "../shared/Plan";
import { Observable } from "rxjs";
import { map } from "rxjs/operators";
@Injectable({
  providedIn: "root",
})
export class PlanService {
  planColl: AngularFirestoreCollection<Plan>;
  size: number = 1;
  constructor(private afs: AngularFirestore) {}
  getPlan(query: string) {
    if (query === "notag") {
      this.planColl = this.afs.collection<Plan>("plans", (ref) =>
        ref.where("finished", "==", false)
      );
    } else {
      this.planColl = this.afs.collection<Plan>("plans", (ref) =>
        ref.where("finished", "==", false).where("tag", "==", query)
      );
    }

    return this.planColl.snapshotChanges().pipe(
      map((actions) => {
        return actions.map((a) => {
          const data = a.payload.doc.data() as Plan;
          const id = a.payload.doc.id;
          return { id, data };
        });
      })
    );
  }
  pushPlan(plan: Plan) {
    this.planColl.add(plan);
  }
  finishPost(id: string) {
    this.planColl.doc(id).update({
      finished: true,
    });
  }
  getFinishedPlans(query: string) {
    this.planColl = this.afs.collection<Plan>("plans", (ref) =>
      ref.where("finished", "==", true).where("tag", "==", query)
    );
    return this.planColl.snapshotChanges().pipe(
      map((actions) => {
        return actions.map((a) => {
          const data = a.payload.doc.data() as Plan;
          const id = a.payload.doc.id;
          return { id, data };
        });
      })
    );
  }

  getFinishedCollectionSize() {
    this.afs
      .collection("plans", (ref) => ref.where("finished", "==", true))
      .get()
      .subscribe((data) => {
        this.size = data.size;
        console.log(this.size);
      });
    return this.size;
  }
}
