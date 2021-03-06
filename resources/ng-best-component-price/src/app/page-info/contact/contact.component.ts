import { Component, OnInit, Inject } from '@angular/core';
import { FormControl, Validators, FormGroup } from '@angular/forms';
import { environment } from 'environments/environment';
import { SendMailService } from './send-mail.service';
import { MatDialogRef } from '@angular/material';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {
  contactForm = new FormGroup({
    emailFormControl: new FormControl('', [
      Validators.required,
      Validators.pattern(environment.EMAIL_REGEX)]),
    forenameFormControl: new FormControl('', [
      Validators.required]),
    surnameFormControl: new FormControl('', [
      Validators.required]),
    messageFormControl: new FormControl('', [
      Validators.required]),
  });
  constructor(private sendMailService: SendMailService,
    public dialogRef: MatDialogRef<ContactComponent>,
    private toastr: ToastrService) { }

  onNoClick(): void {
    this.dialogRef.close();
  }


  sendMail(forename, surname, message, email) {
    this.sendMailService.sendMail(forename, surname, message, email).subscribe(
      data => {
        this.toastr.success( 'Message has been sent!', 'Great!');
        this.onNoClick();
        console.log(data);
      },
      error => {
        this.toastr.error( 'Something went wrong!', 'Ups!');
        console.log(error);
      });
  }

}
