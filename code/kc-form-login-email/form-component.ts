import {Component,Input,Output,EventEmitter} from '@angular/core';
import {FormBuilder, ControlGroup, Validators} from '@angular/common';
import {tEmailLoginFormData}from './data-types';


@Component({
    selector: 'kc-form-login-email',
    template: `

    <form [ngFormModel]="EmailLoginForm" class="kc-form">
    
        <ion-item class="kc-form-item">
            <ion-label class="kc-form-label">Email</ion-label>
            <ion-input #email ngControl="email" type="text" class="kc-form-input"></ion-input>
        </ion-item>

        <ion-item class="kc-form-item">
            <ion-label class="kc-form-label">Password</ion-label>
            <ion-input #password ngControl="password" type="password" class="kc-form-input"></ion-input>
        </ion-item>

       <button (click)="_onSubmitClick()" class="kc-form-submit">Submit</button>
  
    </form>

    `
})

export class EmailLoginForm {

    @Output('formSubmit') formSubmit = new EventEmitter();

    EmailLoginForm: ControlGroup;

    constructor(
        private _form: FormBuilder
    ) {
        this.EmailLoginForm = _form.group({

            email: ['', Validators.required],

            password: ['', Validators.required],

        });
    }

    private _onSubmitClick() {
        let result = {
            valid: this.EmailLoginForm.valid,
            value: this.EmailLoginForm.value
        };
        this.formSubmit.emit(result);
    }

}