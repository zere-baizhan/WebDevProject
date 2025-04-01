import { NgModule } from "@angular/core";
import { AuthModule } from './auth/auth.module';
import { BlogModule } from './blog/blog.module';
import { SharedModule } from './shared/shared.module';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  imports: [
  
    AuthModule,
       BlogModule,
       SharedModule,
       HttpClientModule

  ]
})
export class AppModule { }
