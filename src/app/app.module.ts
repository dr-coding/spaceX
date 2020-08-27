import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { Routes,RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { TwoColumnLayoutComponent } from './shared/two-column-layout/two-column-layout.component';
import { FiltersComponent } from './filters/filters.component';
import { SpacexViewComponent } from './spacex-view/spacex-view.component';

export const routes:Routes =[{
  path:'spaceX/:launch_Success:land_success:launch_year',
  component:AppComponent
},
{
  path:'',
  redirectTo:'spaceX',
  pathMatch:'full'
}
]

@NgModule({
  declarations: [
    AppComponent,
    TwoColumnLayoutComponent,
    FiltersComponent,
    SpacexViewComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    ReactiveFormsModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
  
 }
