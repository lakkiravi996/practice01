import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { GallaryComponent } from './gallary/gallary.component';
import { ContactComponent } from './contact/contact.component';
import { AboutComponent } from './about/about.component';
import { ProductComponent } from './product/product.component';
import { UsersComponent } from './users/users.component';
import { LoginComponent } from './login/login.component';
import { TodosComponent } from './todos/todos.component';


const routes: Routes = [
// {path:"redirectTo:'Home',pathMatch:'full'"},
{path:"Home",component:HomeComponent},
{path:"About",component:AboutComponent},
{path:"product",component:ProductComponent},
{path:"Gallary",component:GallaryComponent},
{path:"Contact",component:ContactComponent},
{path:"users", component:UsersComponent},
{path:"login", component:LoginComponent},
{path:"todos",component:TodosComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
