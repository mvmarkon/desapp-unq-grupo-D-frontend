import { NgModule } from '@angular/core';
import { Route,Routes, RouterModule } from '@angular/router';
import { AppComponent } from "./app.component";
import { MapComponent } from "./map/map.component";
import { UsersComponent } from "./users/users.component"

const routes: Routes=[
  {
      path: 'map',
      component: MapComponent
    },
  {
    path:'',
    component:UsersComponent
  }
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
