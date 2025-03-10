import { Component } from "@angular/core";

@Component({
    templateUrl: "./app.component.html",
    selector: "my-app-root"
})
export class AppComponent {
    

    title: string = "Hello My - App ";

    timer() {
    if(new Date().getHours()>7 && new Date().getHours()<14){
        return "Good Morning";     
    }
    else if(new Date().getHours()>=14 && new Date().getHours()<18){
        return "Good Afternoon";
    }
    else if(new Date().getHours()>=18 && new Date().getHours()<24){
        return "Good Evening";
    }
    else{
        return "Good Night";
    }
}

    constructor() {
        
    }

}