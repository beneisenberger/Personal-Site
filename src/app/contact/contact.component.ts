import { Component, OnInit } from "@angular/core";
import { FormControl, Validators } from "@angular/forms";
import {
  AngularFirestore,
  AngularFirestoreCollection,
  AngularFirestoreDocument,
} from "angularfire2/firestore";

export interface Form {
  name: string;
  message: string;
  email: string;
  checked: boolean;
}

@Component({
  selector: "app-contact",
  templateUrl: "./contact.component.html",
  styleUrls: ["./contact.component.scss"],
})
export class ContactComponent implements OnInit {
  checked: boolean = false;
  name: "";
  message: "";
  email = new FormControl("", [Validators.required, Validators.email]);

  constructor(private afs: AngularFirestore) {
    this.formCollection = this.afs.collection("form", (ref) =>
      ref.orderBy("email", "desc")
    );
  }

  formCollection: AngularFirestoreCollection<Form>;
  formDoc: AngularFirestoreDocument<Form>;

  ngOnInit() {}

  getErrorMessage() {
    return this.email.hasError("required")
      ? "You must enter a value"
      : this.email.hasError("email")
      ? "Not a valid email"
      : "";
  }

  submit(email, checked, name, message) {
    const data: Form = {
      email: email.value.toString(),
      checked: checked,
      name: name,
      message: message,
    };
    this.formCollection.add(data);
    this.name = "";
    this.message = "";
    alert("Thank you, your message has been submitted");
  }
}
