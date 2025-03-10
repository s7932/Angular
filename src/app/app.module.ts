import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { AppComponent } from './app.component';
import { StudentListComponent } from './student-list/student-list.component';


@NgModule({
    declarations: [AppComponent, StudentListComponent],
    imports: [BrowserModule],
    bootstrap: [AppComponent]
})
export class AppModule {

}