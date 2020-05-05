import { Component, OnInit } from "@angular/core";
import { AngularFirestore } from "@angular/fire/firestore";

import { PlanService } from "../services/plan.service";
import { TagService } from "../services/tag.service";
@Component({
  selector: "app-plans",
  templateUrl: "./plans.component.html",
  styleUrls: ["./plans.component.scss"],
})
export class PlansComponent implements OnInit {
  tags: any;
  plans: any;
  query: string;
  size: number;

  constructor(
    private afs: AngularFirestore,
    private planService: PlanService,
    private tagService: TagService
  ) {}

  ngOnInit(): void {
    this.plans = this.planService.getPlan("notag");
    this.tags = this.tagService.getTags();
    this.query = "notag";
    this.afs
      .collection("plans", (ref) => ref.where("finished", "==", false))
      .get()
      .subscribe((data) => (this.size = data.size));
  }
  finisPost(id: string) {
    this.planService.finishPost(id);
  }
  getQueryTag($event) {
    this.query = $event;
    console.log($event);
    this.plans = this.planService.getPlan($event);
    this.afs
      .collection("plans", (ref) => ref.where("tag", "==", $event))
      .get()
      .subscribe((data) => (this.size = data.size));
  }
}
