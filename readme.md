Email Login Form
v0.1 (19/6/16) - ionic2 beta.9

A form that can be used for account login based on email.
It will query the user for email, password.

kc-form-login-email.ts exports
class EmailLoginForm
interface tEmailLoginFormData

How to use:
<kc-form-login-email></kc-form-login-email>

Events:
(formSubmit)
Triggers when the user clicks on 'Submit' button
Return the following object
{
    valid: boolean, // represent is the form is valid or not
    value: {            //tEmailRegistrationFormData
        email:  string,      //the email field value
        password: string,   //the password field value
    }
}


version tracking:
v0.1. launching version
