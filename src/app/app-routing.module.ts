import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HelloWorldNgifComponent} from "./hello-world-ngif/hello-world-ngif.component";

const routes: Routes = [
  {path: '', redirectTo: 'store', pathMatch: 'full'},
  {path: 'ngif', component: HelloWorldNgifComponent},
  {path: 'store', loadChildren: () => import('./my-store/my-store.module').then(m => m.MyStoreModule)}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
