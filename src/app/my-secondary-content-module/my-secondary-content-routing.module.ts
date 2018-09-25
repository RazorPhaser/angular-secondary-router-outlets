import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { MySecondaryContent } from "./my-secondary-content/my-secondary-content.component";

const routes: Routes = [
  {
    path: "my-secondary-content",
    component: MySecondaryContent,
    outlet: "my-secondary-router-outlet"
  },
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class MySecondaryContentRoutingModule { }