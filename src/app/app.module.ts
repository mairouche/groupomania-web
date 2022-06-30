import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SigninComponent } from './signin/signin.component';
import { SignupComponent } from './signup/signup.component';
import { HomeComponent } from './home/home.component';
import { HomeHeaderComponent } from './home-header/home-header.component';
import { FooterComponent } from './footer/footer.component';
import { HomeUserinfoComponent } from './home-userinfo/home-userinfo.component';
import { HomePostsComponent } from './home-posts/home-posts.component';
import { HomeMembersComponent } from './home-members/home-members.component';
import { PostFormComponent } from './post-form/post-form.component';
import { PostComponent } from './post/post.component';
import { CommentFormComponent } from './comment-form/comment-form.component';
import { CommentComponent } from './comment/comment.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { TokenInterceptor } from './interceptor/token.interceptor';
import { ReactiveFormsModule } from '@angular/forms';
import { AuthGuard } from './shared/auth/auth.guard';
import { SecureStaticPipe } from './shared/pipe/secure-static.pipe';

const routes: Routes = [
  { path: '', redirectTo: 'signin', pathMatch: 'full' },
  { path: 'signin', component: SigninComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'home', component: HomeComponent, canActivate: [AuthGuard] },
];

@NgModule({
  declarations: [
    AppComponent,
    SigninComponent,
    SignupComponent,
    HomeComponent,
    HomeHeaderComponent,
    FooterComponent,
    HomeUserinfoComponent,
    HomePostsComponent,
    HomeMembersComponent,
    PostFormComponent,
    PostComponent,
    CommentFormComponent,
    CommentComponent,
    SecureStaticPipe,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(routes),
    ReactiveFormsModule,
    HttpClientModule,
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: TokenInterceptor, multi: true },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
