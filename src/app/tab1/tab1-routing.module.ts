import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Tab1Page } from './tab1.page';

const routes: Routes = [
  {
    path: '',
    component: Tab1Page,
    children: [
      {
        path: 'subtab1',
        loadChildren: () => import('../subtab1/subtab1.module').then(m => m.Subtab1PageModule)
      },
      {
        path: 'subtab2',
        loadChildren: () => import('../subtab2/subtab2.module').then(m => m.Subtab2PageModule)
      },
      {
        path: '',
        redirectTo: 'subtab1'
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Tab1PageRoutingModule {}
