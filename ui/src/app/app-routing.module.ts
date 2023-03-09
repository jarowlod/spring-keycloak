import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {SecuredHelloWorldComponent} from "./secured-hello-world/secured-hello-world.component";
import {AuthGuard} from "./auth.guard";
import {AccessDeniedComponent} from "./access-denied/access-denied.component";

const routes: Routes = [
  {
    path: 'hello',
    component: SecuredHelloWorldComponent,
    canActivate: [AuthGuard],
    data: { roles: ['Super_ADMIN'] }
  },
  {
    path: 'access-denied',
    component: AccessDeniedComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
