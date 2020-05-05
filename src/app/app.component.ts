import { Component } from "@angular/core";
import { MessagingService } from "./services/messaging.service";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"],
})
export class AppComponent {
  message;
  constructor(private messagingService: MessagingService) {}
  ngOnInit(): void {
    this.messagingService.requestPermission();
    this.messagingService.recieveMesssage;
    this.message = this.messagingService.currentMessage;
  }

  // tabs
  showMenu: boolean;
  showMenuClicked() {
    this.showMenu = !this.showMenu;
  }
  openTab(id: string, tabId: string) {
    const tabcontent = document.getElementsByClassName("tab-content");
    const tabLinkcontent = document.getElementsByClassName("tabLink");
    console.log(tabcontent);
    for (let index = 0; index < tabcontent.length; index++) {
      tabcontent[index].classList.remove("show-tab");
    }
    for (let index = 0; index < tabLinkcontent.length; index++) {
      tabLinkcontent[index].classList.remove("active-tab");
    }
    document.getElementById(id).classList.add("show-tab");
    document.getElementById(tabId).classList.add("active-tab");
  }
}
