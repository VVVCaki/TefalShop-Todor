import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule, routingComponents } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { FormsModule } from '@angular/forms';
import { TextMaskModule } from 'angular2-text-mask';
import { SweetAlert2Module } from '@sweetalert2/ngx-sweetalert2';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { AngularFireModule } from 'angularfire2';
import { environment } from 'src/environments/environment';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { CustomFormsModule } from 'ng2-validation';
import { NavbarComponent } from './navbar/navbar.component';
import { TefalshopPocetnaComponent } from './tefalshop-pocetna/tefalshop-pocetna.component';
import { JumbotronComponent } from './jumbotron/jumbotron.component';
import { VideofileComponent } from './videofile/videofile.component';
import { PhotoGalleryComponent } from './photo-gallery/photo-gallery.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { FormaComponent } from './forma/forma.component';
import { GeolocationComponent } from './geolocation/geolocation.component';
import { AgmCoreModule} from '@agm/core';
import { GalleryPageComponent } from './gallery-page/gallery-page.component';
import { AboutPageComponent } from './about-page/about-page.component';
import { ShopComponent } from './shop/shop.component';
import { OpisProizvodaComponent } from './opis-proizvoda/opis-proizvoda.component';
import { KorpaComponent } from './korpa/korpa.component';
import { BlogComponent } from './blog/blog.component';
import { AddBlogComponent } from './add-blog/add-blog.component';
import { EditBlogComponent } from './edit-blog/edit-blog.component';
import { ShoppingService } from './shopping.service';
import { PostblogService } from './postblog.service';
import { CarouselComponent } from './carousel/carousel.component';
import { ServeriService } from './serveri.service';
import { ZastitaService } from './zastita.service';
import { AutentifikacijaService } from './autentifikacija.service';
import { SigninComponent } from './signin/signin.component';
import { SignupComponent } from './signup/signup.component';






@NgModule({
  declarations: [
    AppComponent,
    routingComponents,
    HomeComponent,
    NavbarComponent,
    TefalshopPocetnaComponent,
    JumbotronComponent,
    VideofileComponent,
    PhotoGalleryComponent,
    AboutComponent,
    ContactComponent,
    FormaComponent,
    GeolocationComponent,
    GalleryPageComponent,
    AboutPageComponent,
    ShopComponent,
    OpisProizvodaComponent,
    KorpaComponent,
    BlogComponent,
    AddBlogComponent,
    EditBlogComponent,
    CarouselComponent,
    SigninComponent,
    SignupComponent,
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    TextMaskModule,
    SweetAlert2Module.forRoot({
      buttonsStyling: false,
      customClass: 'modal-content',
      confirmButtonClass: 'btn btn-primary',
      cancelButtonClass: 'btn'
    }),
    HttpClientModule,
    RouterModule,
   
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    CustomFormsModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyCx29Nk9yJjk6Cw_5W-Lda4Ib4nHk9DMe4'
    }),
   
  ],
  providers: [
              ShoppingService,
              PostblogService,
              ServeriService,
              ZastitaService,
              AutentifikacijaService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
