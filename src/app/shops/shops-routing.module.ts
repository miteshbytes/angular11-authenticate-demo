import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from '../utility/auth.guard';
import { CreateComponent } from './product/create/create.component';
import { EditComponent } from './product/edit/edit.component';
import { IndexComponent } from './product/index/index.component';
import { ViewComponent } from './product/view/view.component';

const routes: Routes = [
  { path: 'product', component: IndexComponent, canActivate: [AuthGuard] },
  { path: 'product/create', component: CreateComponent, canActivate: [AuthGuard] },
  { path: 'product/:productId/view', component: ViewComponent, canActivate: [AuthGuard] },
  { path: 'product/:productId/edit', component: EditComponent, canActivate: [AuthGuard] }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ShopsRoutingModule { }
