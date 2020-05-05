import { Component, OnInit } from "@angular/core";
import { PlanService } from "../services/plan.service";
import { TagService } from "../services/tag.service";
import { AngularFirestore } from "angularfire2/firestore";

@Component({
  selector: "app-finished-plans",
  templateUrl: "./finished-plans.component.html",
  styleUrls: ["./finished-plans.component.scss"],
})
export class FinishedPlansComponent implements OnInit {
  constructor(
    private planservice: PlanService,
    private afs: AngularFirestore
  ) {}
  plans: any;
  query: string = "notag";
  size: number;
  ngOnInit(): void {
    this.plans = this.planservice.getFinishedPlans(this.query);
    this.afs
      .collection("plans", (ref) => ref.where("finished", "==", true))
      .get()
      .subscribe((data) => (this.size = data.size));
    console.log(this.size, this.query);
  }
  getQuery($event) {
    this.query = $event;
    this.plans = this.planservice.getFinishedPlans(this.query);
    this.afs
      .collection("plans", (ref) =>
        ref.where("finished", "==", true).where("tag", "==", $event)
      )
      .get()
      .subscribe((data) => (this.size = data.size));
    console.log(this.size, this.query);
  }
}
