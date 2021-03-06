import { Component } from '@angular/core';

@Component({
    selector : 'app-greeter',
    templateUrl: './greeter.component.html',
    styleUrls: ['./greeter.component.css']
})
export class GreeterComponent{
    message = 'Dummy greet message';

    onGreetClick(userName){
        this.message = `Hi ${userName}, Have a nice day!`;
    }
}