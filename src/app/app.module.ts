import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { ReactiveFormsModule } from "@angular/forms";
import { AngularFireModule } from "angularfire2";
import { AngularFirestoreModule } from "angularfire2/firestore";
import { AngularFireMessagingModule } from "@angular/fire/messaging";
import { AngularFireDatabaseModule } from "@angular/fire/database";
import { AngularFireAuthModule } from "@angular/fire/auth";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { FormsModule } from "@angular/forms";
import { environment } from "../environments/environment";
import { PlansComponent } from "./plans/plans.component";
import { PlanDetailComponent } from "./plan-detail/plan-detail.component";
import { AddTagComponent } from "./add-tag/add-tag.component";
import { FormsholderComponent } from "./formsholder/formsholder.component";
import { PlansholderComponent } from "./plansholder/plansholder.component";
import { FinishedPlansComponent } from "./finished-plans/finished-plans.component";
import { TagsComponent } from "./tags/tags.component";
import { MessagingService } from "./services/messaging.service";
import { AsyncPipe } from "../../node_modules/@angular/common";
import { ServiceWorkerModule } from '@angular/service-worker';

@NgModule({
  declarations: [
    AppComponent,
    PlansComponent,
    PlanDetailComponent,
    AddTagComponent,
    FormsholderComponent,
    PlansholderComponent,
    FinishedPlansComponent,
    TagsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFirestoreModule.enablePersistence(),
    AngularFireMessagingModule,
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    FormsModule,
    ReactiveFormsModule,
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production }),
  ],
  providers: [MessagingService, AsyncPipe],
  bootstrap: [AppComponent],
})
export class AppModule {}
