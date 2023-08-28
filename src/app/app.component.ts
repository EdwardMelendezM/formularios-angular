import { Component } from '@angular/core';
import {FormGroup, FormBuilder, Validators, EmailValidator} from "@angular/forms";
import {cantBeStrip, emailPattern, firstNameAndLastnamePattern} from "./validators/validator-form";
import {ValidatorsService} from "./validators/validators.service";
import {EmailValidatorService} from "./validators/email-validator.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Form';

  public myForm:FormGroup = this.fb.group({
    name:['',[Validators.required, Validators.pattern(this.validatorsServices.firstNameAndLastnamePattern)]],
    email:['',[Validators.required,Validators.pattern(this.validatorsServices.emailPattern)],[new EmailValidatorService()]],
    password:['',[Validators.required, Validators.minLength(6)]]
  })

  constructor(
    private fb:FormBuilder,
    private validatorsServices:ValidatorsService
  ) {}

  isValidField(field:string){
    return this.validatorsServices.isValidField( this.myForm, field )
  }

  onSubmit():void{
    this.myForm.markAllAsTouched();
    console.log(this.myForm)
  }
}
