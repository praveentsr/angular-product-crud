import { Component } from "@angular/core";
@Component({
    selector:'welcome',
    template:`{{welcomeMessage}}`
})
export class WelcomeComponent{
    welcomeMessage:string="Welcome to our site";
}