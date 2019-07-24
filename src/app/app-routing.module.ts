import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AngularFireModule } from 'angularfire2';
import { environment } from 'src/environments/environment';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { CustomFormsModule } from 'ng2-validation';
import { TefalshopPocetnaComponent } from './tefalshop-pocetna/tefalshop-pocetna.component';
import { GalleryPageComponent } from './gallery-page/gallery-page.component';
import { AboutPageComponent } from './about-page/about-page.component';
import { ShopComponent } from './shop/shop.component';
import { KorpaComponent } from './korpa/korpa.component';
import { OpisProizvodaComponent } from './opis-proizvoda/opis-proizvoda.component';
import { BlogComponent } from './blog/blog.component';
import { AddBlogComponent } from './add-blog/add-blog.component';
import { EditBlogComponent } from './edit-blog/edit-blog.component';
import { ServeriService } from './serveri.service';
import { ZastitaService } from './zastita.service';
import { AutentifikacijaService } from './autentifikacija.service';
import { SigninComponent } from './signin/signin.component';
import { SignupComponent } from './signup/signup.component';


const routes: Routes = [
  { path: '', component:  TefalshopPocetnaComponent },
  { path: 'home', component:  HomeComponent },
  { path: 'gallery', component:  GalleryPageComponent },
  { path: 'about', component:  AboutPageComponent },
  { path: 'shop', component:  ShopComponent },
  { path: 'korpa', component:  KorpaComponent },
  { path: 'opis/:proizvodId', component:  OpisProizvodaComponent },
  { path: 'addblog', component: AddBlogComponent},
  { path: 'blog/:blogId', component: EditBlogComponent},
  { path: 'blog', component: BlogComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'signin', component: SigninComponent },
  { path: 'signout', component: SigninComponent }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    CustomFormsModule,
    
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }

export const routingComponents = [
                                   HomeComponent,
                                   TefalshopPocetnaComponent,
                                   GalleryPageComponent,
                                   AboutPageComponent,
                                   ShopComponent,
                                   KorpaComponent,
                                   OpisProizvodaComponent,
                                   AddBlogComponent,
                                   EditBlogComponent,
                                   SigninComponent,
                                   SignupComponent,
                                  

]
