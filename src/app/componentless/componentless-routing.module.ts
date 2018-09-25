import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { ComponentlessComponent } from "./componentless/componentless.component";
import { MySecondaryContent } from "../my-secondary-content-module/my-secondary-content/my-secondary-content.component";

const myRoutes = [
  {
    path: '',
    pathmatch: 'full',
    component: ComponentlessComponent
  },
  {
    path: "my-secondary-content",
    component: MySecondaryContent,
    outlet: "my-secondary-router-outlet"
  },
];

const routes: Routes = [
  {
    path: "componentless",
    children: myRoutes
  },
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class ComponentlessRoutingModule { }