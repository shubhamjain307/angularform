import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {ReactiveFormsModule} from '@angular/forms';
import { AppComponent } from './app.component';
import { ShowdetailComponent } from './showdetail/showdetail.component';
import {Routes,RouterModule,Router} from '@angular/router';
import { EditComponent } from './edit/edit.component';
import{RecordsService} from './records.service';
import { Services } from './services';

const routes: Routes = [
  { path: '', component: EditComponent },
  { path: 'showdetail', component: ShowdetailComponent},
  { path: 'editdetail', component:EditComponent }

];

@NgModule({
  declarations: [
    AppComponent,
    ShowdetailComponent,
    EditComponent

  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    RouterModule.forRoot(routes)
  ],
  providers: [RecordsService,Services],
  bootstrap: [AppComponent]
})
export class AppModule { }
