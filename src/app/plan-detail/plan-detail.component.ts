import { Component, OnInit, ViewChild } from "@angular/core";
import {
  AngularFirestoreDocument,
  AngularFirestoreCollection,
  AngularFirestore,
} from "angularfire2/firestore";
import { map } from "rxjs/operators";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { Plan, Tag } from "../shared/Plan";
import { PlanService } from "../services/plan.service";
@Component({
  selector: "app-plan-detail",
  templateUrl: "./plan-detail.component.html",
  styleUrls: ["./plan-detail.component.scss"],
})
export class PlanDetailComponent implements OnInit {
  @ViewChild("pform") pformdirective;
  planForm: FormGroup;
  plan: Plan;
  tagColl: AngularFirestoreCollection<Tag>;
  tags: any;
  formErrors = {
    title: "",
  };
  validationMessages: {
    title: {
      required: "PLease give a title to the task";
      pattern: "Please use alphabets";
    };
  };
  constructor(
    private afs: AngularFirestore,
    private fb: FormBuilder,
    private planService: PlanService
  ) {
    this.createForm();
  }
  createForm() {
    this.planForm = this.fb.group({
      title: [
        "",
        [Validators.required, Validators.pattern("^(?! )[A-Za-z0-9 ]*(?<! )$")],
      ],
      tag: ["notag"],
    });

    // this.planForm.valueChanges.subscribe((data) => this.onValueChanged(data));
    this.onValueChanged();
  }
  onValueChanged(data?: any) {
    if (!this.planForm) return;
    const form = this.planForm;
    for (const field in this.formErrors) {
      if (this.formErrors.hasOwnProperty(field)) {
        this.formErrors[field] = "";
        const control = form.get(field);
        if (control && control.dirty && !control.valid) {
          const messages = this.validationMessages[field];
          for (const key in control.errors) {
            if (control.errors.hasOwnProperty(key)) {
              this.formErrors[field] += messages[key] + "";
            }
          }
        }
      }
    }
  }
  onSubmit() {
    this.plan = this.planForm.value;
    this.plan.timestamp = new Date().toISOString();
    this.plan.finished = false;
    console.log(this.plan);
    // this.planColl.add(this.plan);
    this.planService.pushPlan(this.plan);
    this.planForm.reset({
      title: "",
      tag: ["notag"],
    });
  }

  ngOnInit(): void {
    this.tagColl = this.afs.collection("tags");
    this.tags = this.tagColl.snapshotChanges().pipe(
      map((actions) => {
        return actions.map((a) => {
          const data = a.payload.doc.data() as Tag;
          const id = a.payload.doc.data();
          return { id, data };
        });
      })
    );
  }
}
