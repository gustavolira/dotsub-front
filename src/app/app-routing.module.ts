import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {UploadRoutes} from './upload/upload.routes';
import {UploadComponent} from './upload/upload.component';
import {HomeComponent} from './home/home.component';

@NgModule({
  imports: [
    RouterModule.forRoot([
      {
        path: '',
        component: HomeComponent
      },
      ...UploadRoutes
    ])
  ],
  exports: [RouterModule]
})


export class AppRoutingModule {}

