import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { GesUsersGuard } from './Guard/ges-users.guard';
import { LoginComponent } from './login/login.component';
import { ListTickectComponent } from './list-tickect/list-tickect.component';
import { FaqComponent } from './faq/faq.component';
import { EditCategorieComponent } from './edit-categorie/edit-categorie.component';
import { GesCategorieComponent } from './ges-categorie/ges-categorie.component';
import { AddCategorieComponent } from './add-categorie/add-categorie.component';
import { GesUsersComponent } from './ges-users/ges-users.component';
import { AddUserComponent } from './add-user/add-user.component';
import { EditTicketComponent } from './edit-ticket/edit-ticket.component';
import { DeleteTicketComponent } from './delete-ticket/delete-ticket.component';
import { AddTickectComponent } from './add-tickect/add-tickect.component';
import { HomeComponent } from './home/home.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'add-ticket', component: AddTickectComponent },
  { path: 'delete-ticket', component: DeleteTicketComponent },
  { path: 'edit-ticket', component: EditTicketComponent },
  { path: 'add-user', component: AddUserComponent },
  { path: 'faq', component: FaqComponent },
  { path: 'ges-users', component: GesUsersComponent },
  { path: 'add-categorie', component: AddCategorieComponent },
  { path: 'ges-categorie', component: GesCategorieComponent },
  { path: 'edit-categorie', component: EditCategorieComponent },
  { path: 'list-ticket', component: ListTickectComponent },
  { path: 'login', component: LoginComponent },
  { path: '**', component: PageNotFoundComponent },

];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

