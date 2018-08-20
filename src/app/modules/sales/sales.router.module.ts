import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { SalesPage } from './sales.page';
import { ProductListPage } from './pages/products/product-list/product-list.page';

const routes: Routes = [
  {
    path: 'sales',
    component: SalesPage,
    children: [
      {
        path: 'products',
        outlet: 'products',
        component: ProductListPage
      },
    ]
  },
  {
    path: '',
    redirectTo: '/sales',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SalesPageRoutingModule {}
