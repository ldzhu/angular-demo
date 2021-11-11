import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HelloWorldNgIfComponent} from "./hello-world-ngif/hello-world-ng-if.component";

const routes: Routes = [
  {path: '', redirectTo: 'store', pathMatch: 'full'},
  {path: 'ngIf', component: HelloWorldNgIfComponent},
  {path: 'store', loadChildren: () => import('./my-store/my-store.module').then(m => m.MyStoreModule)}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
