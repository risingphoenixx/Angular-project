import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddUrlComponent } from './add-url/add-url.component';
import { ListUrlComponent } from './list-url/list-url.component';

const routes: Routes = [
   {
    path:'',redirectTo:'listURL',pathMatch:'full'
  },
  {
    path:'addURL',component: AddUrlComponent
  },
  {
    path:'listURL',component:ListUrlComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
