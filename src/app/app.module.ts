import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule} from './app-routing.module';
import { AppComponent } from './app.component';
import { AddTickectComponent } from './add-tickect/add-tickect.component';
import { EditTicketComponent } from './edit-ticket/edit-ticket.component';
import { DeleteTicketComponent } from './delete-ticket/delete-ticket.component';
import { ListTickectComponent } from './list-tickect/list-tickect.component';
import { EditUserComponent } from './edit-user/edit-user.component';
import { GesUsersComponent } from './ges-users/ges-users.component';
import { AddCategorieComponent } from './add-categorie/add-categorie.component';
import { EditCategorieComponent } from './edit-categorie/edit-categorie.component';
import { GesCategorieComponent } from './ges-categorie/ges-categorie.component';
import { HomeComponent } from './home/home.component';
import { AddUserComponent } from './add-user/add-user.component';
import { FaqComponent } from './faq/faq.component';
import { AProposComponent } from './a-propos/a-propos.component';
import { LoginComponent } from './login/login.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    AddTickectComponent,
    EditTicketComponent,
    DeleteTicketComponent,
    ListTickectComponent,
    EditUserComponent,
    GesUsersComponent,
    AddCategorieComponent,
    EditCategorieComponent,
    GesCategorieComponent,
    HomeComponent,
    AddUserComponent,
    FaqComponent,
    AProposComponent,
    LoginComponent,
    PageNotFoundComponent,


  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
  ],
  providers: [ ],
  bootstrap: [AppComponent]
})
export class AppModule { }

