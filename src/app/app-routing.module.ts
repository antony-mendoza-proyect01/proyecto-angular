import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {INTERNAL} from './core/conts/routes.conts';
import {SkeletonComponent} from './layaout/skeleton/skeleton.component';
const routes: Routes = [
  {
    path: '',
    redirectTo: INTERNAL.LOGEAR,
    pathMatch: 'full'
  },
  {
    path: INTERNAL.LOGEAR,
    loadChildren: () => import('./modules/login/login.module').then(m => m.LoginModule)
  },
  {
    path: INTERNAL.PADRE,
    component: SkeletonComponent,
    children: [
      {
        path: INTERNAL.CRUDS,
        loadChildren: () => import('./modules/cruds/cruds.module').then(m => m.CrudsModule)
      },
    ]
  },
  {
    path: '**',
    redirectTo: INTERNAL.LOGEAR
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes,
    { useHash: true, scrollPositionRestoration: 'enabled'})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
