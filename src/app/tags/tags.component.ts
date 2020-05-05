import { Component, OnInit, Output, EventEmitter } from "@angular/core";
import { TagService } from "../services/tag.service";

@Component({
  selector: "app-tags",
  templateUrl: "./tags.component.html",
  styleUrls: ["./tags.component.scss"],
})
export class TagsComponent implements OnInit {
  constructor(private tagservice: TagService) {}
  tags: any;
  query: string;
  @Output() queryTagEmitter = new EventEmitter<string>();
  ngOnInit(): void {
    this.query = "notag";
    this.tags = this.tagservice.getTags();
  }
  getQueryTag(name: string) {
    this.queryTagEmitter.emit(name);
    console.log(name);
    this.query = name;
  }
}
