import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { AddTagComponent } from "./add-tag/add-tag.component";
import { PlanDetailComponent } from "./plan-detail/plan-detail.component";
import { PlansComponent } from "./plans/plans.component";
import { FormsholderComponent } from "./formsholder/formsholder.component";
import { PlansholderComponent } from "./plansholder/plansholder.component";
import { FinishedPlansComponent } from "./finished-plans/finished-plans.component";

const routes: Routes = [];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

// MULTIPLE ROUTES WITH SAME PATH
// { path: "", redirectTo: "home", pathMatch: "full" },
// {
//   path: "home",
//   component: FormsholderComponent,
//   children: [
//     { path: "", component: PlanDetailComponent },
//     { path: "add-tag", component: AddTagComponent },
//   ],
// },
// {
//   path: "home",
//   component: PlansholderComponent,
//   children: [
//     { path: "", component: PlansComponent },
//     { path: "finished-plans", component: FinishedPlansComponent },
//   ],
//   outlet: "holder2",
// },
// {
//   path: "",
//   component: PlansholderComponent,
//   children: [
//     { path: "", component: PlansComponent },
//     { path: "finished-plans", component: FinishedPlansComponent },
//   ],
//   outlet: "holder2",
// },
