import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { Tag } from "../shared/Plan";
import { TagService } from "../services/tag.service";
@Component({
  selector: "app-add-tag",
  templateUrl: "./add-tag.component.html",
  styleUrls: ["./add-tag.component.scss"],
})
export class AddTagComponent implements OnInit {
  constructor(private fb: FormBuilder, private tagS: TagService) {}
  tagForm: FormGroup;
  tag: Tag;
  formErrors = {
    name: "",
  };
  validationMessages = {
    name: {
      required: "Give a Name to the tag",
      pattern: "Use alphabets please",
    },
  };
  ngOnInit(): void {
    this.createForm();
  }
  createForm() {
    this.tagForm = this.fb.group({
      name: ["", [Validators.required, Validators.pattern("[a-zA-Z]*")]],
    });
    this.onValueChanged();
  }
  onValueChanged(data?: any) {
    if (!this.tagForm) {
      return;
    }
    const form = this.tagForm;
    for (const field in this.formErrors) {
      if (this.formErrors.hasOwnProperty(field)) {
        this.formErrors[field] = "";
        const control = form.get(field);
        if (control && control.dirty && !control.valid) {
          const messages = this.validationMessages[field];
          for (const key in control.errors) {
            if (control.errors.hasOwnProperty(key)) {
              this.formErrors[field] += messages[key] + " ";
            }
          }
        }
      }
    }
  }
  onSubmit() {
    this.tag = this.tagForm.value;
    this.tagS.pushTags(this.tag);
  }
}
