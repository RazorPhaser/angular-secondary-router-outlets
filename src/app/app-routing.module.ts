import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { AppComponent } from "./app.component";
import { HomeComponent } from "./home/home.component";
import { MySecondaryContent } from "./my-secondary-content-module/my-secondary-content/my-secondary-content.component";

const routes: Routes = [
  { path: "", redirectTo: "home", pathMatch: "full" },
  {
    path: "home",
    component: HomeComponent,
    children: [
      {
        // This must be a child of home to show it from the home component's template
        // i.e. when I go to 
        // https://.../home/(my-secondary-router-outlet:my-secondary-content)
        // populate <router-outlet name="my-secondary-router-outlet"></router-outlet>
        // With the MySecondaryContent component's template
        // when it is part of the HomeComponent's template
        path: "my-secondary-content",
        component: MySecondaryContent,
        outlet: "my-secondary-router-outlet"
      },
    ]
  },
  // path: "my-secondary-content" Will only display for the root if the path is put here
  // e.g. https://.../(my-secondary-router-outlet:my-secondary-content)
  // Angular might be able to find the path for the component, but it won't be able to locate
  // the actual named router outlet in the template of a child component
];

@NgModule({
  imports: [
    RouterModule.forRoot(
      routes
      // ,{ enableTracing: true } // <-- debugging purposes only
    )
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }