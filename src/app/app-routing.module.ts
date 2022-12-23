import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RewardsModule } from './rewards/rewards.module';

const routes: Routes = [
  {path:'', loadChildren:()=> RewardsModule}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
