import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Route, RouterModule } from '@angular/router';
import { RewardsComponent } from './rewards.component';
import { SharedModule } from '../shared/shared.module';
import { CheckRewardsComponent } from './check-rewards/check-rewards.component';
import { RewardsResolver } from './rewards.resolver';
import { CalculateRewardsPipe } from './calculate-rewards.pipe';
import { AddOrderDialogComponent } from './add-order-dialog/add-order-dialog.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


const routes: Route[] = [
  { path: '', component: RewardsComponent },
  { path: 'rewards', component: CheckRewardsComponent, resolve: { resolverData: RewardsResolver } }
]


@NgModule({
  declarations: [RewardsComponent, CheckRewardsComponent, CalculateRewardsPipe, AddOrderDialogComponent],
  imports: [
    CommonModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forChild(routes)
  ]
})
export class RewardsModule { }
