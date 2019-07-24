(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/about-page/about-page.component.html":
/*!********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/about-page/about-page.component.html ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h3>O Tefal Shopu</h3>\n<div class=\"textOverImage\"\nstyle=\"background-image:url(https://i.ibb.co/mXg170J/abouttefal.jpg)\"\ndata-text=\"Tefal shop\nTefalove inovacije nisu puka slučajnost, neprestano ih osmišljavamo jer želimo da udovoljimo jednoj osobi: VAMA!Brinemo o vama i životnoj sredini jer želimo da ostvarimo održiv rast. Malo humora, mrvica dovitljivosti, to je naš recept!\n\">\n</div>\n<div>\n    <h3>Naša misija</h3>\n    <p>Naša misija je da vam ponudimo proizvode i usluge koji će vam omogućiti da pripremite ukusne, raznolike i zdrave obroke, i da vama, članovima vaše porodice i vašim prijateljima pomognemo u svakodnevnim obavezama.</p>\n</div>\n<div>\n    <h3>Naše inovacije</h3>\n    <p>\n        Ubeđeni smo da je ključ uspeha u inovacijama.\n\nU Tefalu primenjujemo svoje znanje iz oblasti tehnologije, ergonomije, svakodnevnog korišćenja proizvoda i navika potrošača kako bismo saznali vaše potrebe i osmislili nova rešenja, proizvode i usluge koji će unaprediti vaš svakodnevni život.\n\nZnamo da možemo da vam ponudimo inovacije koje će potpuno izmeniti vaš život ako osluškujemo vaše potrebe.\n    </p>\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/about/about.component.html":
/*!**********************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/about/about.component.html ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n\n<div class=\"textOverImage\"\n    style=\"background-image:url(https://i.ibb.co/mXg170J/abouttefal.jpg)\"\n    data-text=\"Tefal shop\n    Tefalove inovacije nisu puka slučajnost, neprestano ih osmišljavamo jer želimo da udovoljimo jednoj osobi: VAMA!Brinemo o vama i životnoj sredini jer želimo da ostvarimo održiv rast. Malo humora, mrvica dovitljivosti, to je naš recept!\n    \">\n</div>\n\n\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/add-blog/add-blog.component.html":
/*!****************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/add-blog/add-blog.component.html ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h2 >Dodaj blog:</h2>\n<div style=\"padding-bottom: 20px;\">\n    <a \n    style=\" margin-bottom:20px; color:white; font-family: monospace; font-weight: bold;\"\n    class=\"add-to-cart btn btn-danger  \" \n    routerLink='/blog'>Nazad\n    <i class=\"fa fa-arrow-circle-right\" aria-hidden=\"true\"></i>\n    \n</a>\n</div>\n<div class=\"container\">\n    <div class=\"row\">\n        <div class=\"col-md-3\"></div>\n        <div class=\"col-md-6\">\n            <form (ngSubmit)=\"addNewBlog(f.value)\" #f=\"ngForm\">\n                <div class=\"form-group div1\">\n                    <label for=\"title\">Naslov</label>\n                    <input type=\"text\"\n                    class=\"form-control\"\n                    id=\"title\"\n                    ngModel\n                    required\n                    name=\"title\"\n                    #title=\"ngModel\">\n                    <div class=\"alert alert-danger col-md-12\"\n                    *ngIf=\"!title.valid && title.touched\">\n                    Morate uneti naslov!\n                </div>\n                </div>\n                <div class=\"form-group div1\">\n                    <label for=\"description\">Opis</label>\n                    <input type=\"text\"\n                    class=\"form-control\"\n                    id=\"description\"\n                    ngModel\n                    required\n                    name=\"description\"\n                    #description=\"ngModel\">\n                    <div class=\"alert alert-danger col-md-12\"\n                    *ngIf=\"!description.valid && description.touched\">\n                    Morate uneti kratak opis!\n                    </div>\n                </div>\n                <div class=\"form-group div1\">\n                        <label for=\"date\">Datum</label>\n                        <input type=\"text\"\n                        class=\"form-control\"\n                        id=\"date\"\n                        ngModel\n                        required\n                        name=\"date\"\n                        #date=\"ngModel\">\n                        <div class=\"alert alert-danger col-md-12\"\n                        *ngIf=\"!date.valid && date.touched\">\n                        Morate uneti datum!\n                        </div>\n                    </div>\n                <div class=\"form-group div1\">\n                    <label for=\"url\">Url</label>\n                    <input type=\"text\" class=\"form-control\" id=\"url\" ngModel name=\"url\">\n                </div>\n               <button type=\"submit\"\n                class=\"btn btn-success float-right\"\n                style=\"color: white;\n                font-weight: bold;\n                font-family: monospace;\"\n                [disabled]=\"!f.valid\">Dodaj blog</button>\n                \n            </form>\n        </div>\n    </div>\n</div>\n\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/app.component.html":
/*!**************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/app.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-navbar></app-navbar>\n\n<router-outlet></router-outlet>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/blog/blog.component.html":
/*!********************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/blog/blog.component.html ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h3>Novosti o Tefal Shopu</h3>\n<div>\n        <ng-template [ngIf]=\"autentifikacijaService.prijavljen()\">\n            <a \n                style=\"margin-left:20px; margin-bottom:20px; color: white; font-weight: bold;\"\n                class=\"add-to-cart btn btn-danger\" \n                routerLink='/addblog'>\n                <i class=\"fa fa-pencil\" aria-hidden=\"true\"></i>\n                Dodaj blog\n            </a>\n        </ng-template>\n</div>\n<div *ngFor=\"let blog of bloglist; index as blogId\">\n        <div class=\"col-md-11 row\" id=\"cart\"  >\n            <img class=\"cars-img-top\" [src]=\"blog.url\" >\n            <div class=\"col-md-7\">\n                <div class=\"card-block \">\n                    <h5 class=\"card-title\">{{blog.title}}</h5>\n                            <p id=\"datep\"><em>{{blog.date}}</em></p>\n                            <p>{{blog.description}}</p>\n                        <div id=\"editbtn\">\n                                <ng-template [ngIf]=\"autentifikacijaService.prijavljen()\">\n                                        <a \n                                            class=\"add-to-cart btn btn-success\" \n                                            [routerLink]=\"['/blog', blogId]\">\n                                            <i class=\"fa fa-ellipsis-v\" aria-hidden=\"true\"></i>\n                                            Izmeni\n                                        </a>\n                                </ng-template>\n                        </div>\n                       <p id=\"bottomrow\" style=\"text-align: center; font-size: 25px;  \">\n                            <a href=\"https://www.facebook.com/\">\n                                <i class=\"fa fa-facebook-square\" aria-hidden=\"true\" style=\"padding-right: 40px; color: white;\"></i>\n                            </a>\n                            <a href=\"https://twitter.com/twitter?lang=en\">\n                                <i class=\"fa fa-twitter-square\" style=\"padding-right: 40px; color: white;\" ></i>\n                            </a>\n                            <a href=\"https://www.instagram.com/\">\n                                <i class=\"fa fa-instagram\" aria-hidden=\"true\" style=\"padding-right: 40px; color: white;\"></i>\n                            </a>\n                            \n                       </p>\n              </div>\n            </div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/carousel/carousel.component.html":
/*!****************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/carousel/carousel.component.html ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"bigdiv\" class=\"container py-3\" >\n          <div class=\"carousel slide\" data-ride=\"carousel\" id=\"multi_item\">\n            <div class=\"carousel-inner v-2\" role=\"listbox\">\n              <div class=\"carousel-item active\" >\n                <div class=\"row\">\n                  <div class=\"col-12 col-md-4 item\">\n                    <div class=\"card mb-2\" style=\"width:290px; height:410px;\">\n                      <img class=\"card-img-top\" src=\"./assets/img/folder1/slika1.png\" alt=\"TEFAL Multicooker 8in1\">\n                      <div class=\"card-body\">\n                        <h4 class=\"card-title\">TEFAL Multicooker 8in1</h4>\n                        <a \n                            class=\"btn btn-success\" \n                            [routerLink]=\"['/opis', 0]\">\n                            <i class=\"fa fa-ellipsis-v\" aria-hidden=\"true\"></i>\n                            Detaljnije\n                        </a>\n                      </div>\n                    </div>\n                  </div>\n                  <div class=\"col-12 col-md-4 item\">\n                      <div class=\"card mb-2\" style=\"width:290px; height:410px;\">\n                          <img class=\"card-img-top\" src=\"./assets/img/folder2/slika1.png\" alt=\"TEFAL ActiFry Express XL\">\n                          <div class=\"card-body\">\n                            <h4 class=\"card-title\">TEFAL ActiFry Express XL</h4>\n                            <a \n                                class=\"btn btn-success\" \n                                [routerLink]=\"['/opis', 1]\">\n                                <i class=\"fa fa-ellipsis-v\" aria-hidden=\"true\"></i>\n                                Detaljnije\n                            </a>\n                          </div>\n                        </div>\n                  </div>\n                  <div class=\"col-12 col-md-4 item\">\n                      <div class=\"card mb-2\" style=\"width:290px; height:410px;\">\n                          <img class=\"card-img-top\" src=\"./assets/img/folder3/slika1.png\" alt=\"TEFAL Vitacuisine Compact\">\n                          <div class=\"card-body\">\n                            <h4 class=\"card-title\">TEFAL Vitacuisine Compact</h4>\n                            <a \n                                class=\"btn btn-success\" \n                                [routerLink]=\"['/opis', 2]\">\n                                <i class=\"fa fa-ellipsis-v\" aria-hidden=\"true\"></i>\n                                Detaljnije\n                            </a>\n                          </div>\n                      </div>\n                  </div>\n                </div>\n              </div>\n              <div class=\"carousel-item\">\n                <div class=\"row\">\n                  <div class=\"col-12 col-md-4 item\">\n                      <div class=\"card mb-2\" style=\"width:290px; height:410px;\">\n                          <img class=\"card-img-top\" src=\"./assets/img/folder4/slika1.png\" alt=\"TEFAL Masterchef Gourmet\">\n                          <div class=\"card-body\">\n                            <h4 class=\"card-title\">TEFAL Masterchef Gourmet</h4>\n                            <a \n                                class=\"btn btn-success\" \n                                [routerLink]=\"['/opis', 3]\">\n                                <i class=\"fa fa-ellipsis-v\" aria-hidden=\"true\"></i>\n                                Detaljnije\n                            </a>\n                          </div>\n                        </div>\n                  </div>\n                  <div class=\"col-12 col-md-4 item\">\n                      <div class=\"card mb-2\" style=\"width:290px; height:410px;\">\n                          <img class=\"card-img-top\" src=\"./assets/img/folder5/slika1.png\" alt=\"TEFAL Infiny Press\">\n                          <div class=\"card-body\">\n                            <h4 class=\"card-title\">TEFAL Infiny Press</h4>\n                            <a \n                                class=\"btn btn-success\" \n                                [routerLink]=\"['/opis', 4]\">\n                                <i class=\"fa fa-ellipsis-v\" aria-hidden=\"true\"></i>\n                                Detaljnije\n                            </a>\n                          </div>\n                        </div>\n                  </div>\n                  <div class=\"col-12 col-md-4 item\">\n                      <div class=\"card mb-2\" style=\"width:290px; height:410px;\">\n                          <img class=\"card-img-top\" src=\"./assets/img/folder6/slika1.png\" alt=\"TEFAL Fresh Express + \">\n                          <div class=\"card-body\">\n                            <h4 class=\"card-title\">TEFAL Fresh Express + </h4>\n                            <a \n                                class=\"btn btn-success\" \n                                [routerLink]=\"['/opis', 5]\">\n                                <i class=\"fa fa-ellipsis-v\" aria-hidden=\"true\"></i>\n                                Detaljnije\n                            </a>\n                          </div>\n                        </div>\n                  </div>\n                </div>\n              </div>\n              <div class=\"carousel-item\">\n                <div class=\"row\">\n                  <div class=\"col-12 col-md-4 item\">\n                      <div class=\"card mb-2\" style=\"width:290px; height:410px;\">\n                          <img class=\"card-img-top\" src=\"./assets/img/folder7/slika1.png\" alt=\"TEFAL Pain & Délices\">\n                          <div class=\"card-body\">\n                            <h4 class=\"card-title\">TEFAL Pain & Délices</h4>\n                            <a \n                                class=\"btn btn-success\" \n                                [routerLink]=\"['/opis', 6]\">\n                                <i class=\"fa fa-ellipsis-v\" aria-hidden=\"true\"></i>\n                                Detaljnije\n                            </a>\n                          </div>\n                        </div>\n                  </div>\n                  <div class=\"col-12 col-md-4 item\">\n                      <div class=\"card mb-2\" style=\"width:290px; height:410px;\">\n                          <img class=\"card-img-top\" src=\"./assets/img/folder8/slika1.png\" alt=\"TEFAL OptiGrill+ Snacking & Baking GC714834\">\n                          <div class=\"card-body\">\n                            <h4 class=\"card-title\">TEFAL OptiGrill+ Snacking & Baking GC714834</h4>\n                            <a \n                                class=\"btn btn-success\" \n                                [routerLink]=\"['/opis', 7]\">\n                                <i class=\"fa fa-ellipsis-v\" aria-hidden=\"true\"></i>\n                                Detaljnije\n                            </a>\n                          </div>\n                        </div>\n                  </div>\n                  <div class=\"col-12 col-md-4 item\">\n                      <div class=\"card mb-2\" style=\"width:290px; height:410px;\">\n                          <img class=\"card-img-top\" src=\"./assets/img/folder6/slika1.png\" alt=\"TEFAL Fresh Express + \">\n                          <div class=\"card-body\">\n                            <h4 class=\"card-title\">TEFAL Fresh Express + </h4>\n                            <a \n                                class=\"btn btn-success\" \n                                [routerLink]=\"['/opis', 5]\">\n                                <i class=\"fa fa-ellipsis-v\" aria-hidden=\"true\"></i>\n                                Detaljnije\n                            </a>\n                          </div>\n                        </div>\n                  </div>\n                </div>\n              </div>\n            </div>\n            <!--Controls-->\n            <div class=\"divcar\" >\n            <a class=\"carousel-control-prev\" href=\"#multi_item\" role=\"button\" data-slide=\"prev\">\n                <i class=\"fa fa-chevron-circle-left\"></i>\n              <span class=\"sr-only\">Previous</span>\n            </a>\n          </div >\n          <div>\n              <a class=\"carousel-control-next\" href=\"#multi_item\" role=\"button\" data-slide=\"next\">\n                  <i class=\"fa fa-chevron-circle-right\"></i>\n                <span class=\"sr-only\">Next</span>\n              </a>\n          </div>\n            \n              <!--Indicators-->\n            <div id=\"car-indicators\">\n                <ol class=\"carousel-indicators\">\n                  <li data-target=\"#multi_item\" data-slide-to=\"0\" class=\"active\"></li>\n                  <li data-target=\"#multi_item\" data-slide-to=\"1\"></li>\n                  <li data-target=\"#multi_item\" data-slide-to=\"2\"></li>\n                </ol>\n              </div>\n          </div>\n        </div>\n        \n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/contact/contact.component.html":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/contact/contact.component.html ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"contact1\"  >\n    <h3>Kontakt:</h3>\n    <p id=\"p11\"><i class=\"fa fa-home\" ></i>11 070 Novi Beograd</p>\n    <p id=\"p11\"><i class=\"fa fa-address-card\" ></i>Djordja Stanojevica 11b</p>\n    <p id=\"p11\"><i class=\"fa fa-envelope\" ></i> Info@sebgroupe.co.rs</p>\n    <p id=\"p11\"><i class=\"fa fa-phone\" ></i>+381 11/6302 338</p>\n    \n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/edit-blog/edit-blog.component.html":
/*!******************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/edit-blog/edit-blog.component.html ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h2>Izmeni blog</h2>\n\n<div >\n    <a \n    style=\"margin-left:80px; margin-bottom:20px; \"\n    class=\"add-to-cart btn btn-danger\" \n    routerLink='/blog'>\n    <i class=\"fa fa-arrow-circle-o-left\" aria-hidden=\"true\"></i>\n    Nazad\n</a>\n</div>\n<div class=\"row col-md-10\">\n    <div class=\"col-md-12\" >\n        <form id=\"div2\" #f=\"ngForm\" (ngSubmit)=\"save(f.value)\" *ngIf=\"blog\">\n                <div class=\"form-group\" >\n                        <label for=\"title\">Naslov</label>\n                        <input \n                        ngModel \n                        required\n                        #title=\"ngModel\"\n                        name=\"title\" \n                        id=\"title\" \n                        type=\"text\" \n                        class=\"form-control\"\n                        [(ngModel)]=\"blog.title\" >\n                        <div \n                            class=\"alert alert-danger\" \n                            *ngIf=\"title.touched && title.invalid\">\n                            Morate uneti naslov!\n                        </div>\n                </div>\n                <div class=\"form-group\" >\n                        <label for=\"description\">Opis</label>\n                        <textarea \n                        ngModel \n                        required\n                        #description=\"ngModel\"\n                        name=\"description\" \n                        id=\"description\" \n                        type=\"text\" \n                        class=\"form-control\"\n                        [(ngModel)]=\"blog.description\" ></textarea>\n                        <div \n                            class=\"alert alert-danger\" \n                            *ngIf=\"description.touched && description.invalid\">\n                            Morate uneti kratak opis!\n                        </div>\n                </div>\n                <div class=\"form-group\" >\n                        <label for=\"Date\">Datum</label>\n                        <input\n                        ngModel \n                        required\n                        #date=\"ngModel\"\n                        name=\"date\" \n                        id=\"date\" \n                        type=\"text\" \n                        class=\"form-control\"\n                        [(ngModel)]=\"blog.date\" >\n                        <div \n                            class=\"alert alert-danger\" \n                            *ngIf=\"date.touched && date.invalid\">\n                            Morate uneti datum!\n                        </div>\n                </div>\n                <div class=\"form-group\">\n                        <label for=\"imageUrl\">Slika url</label>\n                        <input \n                        ngModel \n                        required\n                        \n                        #imageUrl=\"ngModel\"\n                        name=\"imageUrl\" \n                        id=\"imageUrl\" \n                        type=\"text\" \n                        class=\"form-control\"\n                        [(ngModel)]=\"blog.url\">\n                </div>\n                <div \n                      class=\"alert alert-danger\" \n                        *ngIf=\"imageUrl.touched && imageUrl.invalid\">\n                            <div *ngIf=\"imageUrl.errors.required\">Morate uneti URL slike!</div>\n                            \n                </div>\n                <img [src]=\"blog.url\" style=\"height: 200px; width: auto; margin-left: 80px; margin-right: 80px;\">\n                <div style=\"margin: 20px; text-align: center;\">\n                        <button  [disabled]=\"!f.valid\" class=\"btn btn-success btn-block \" style=\"font-family: monospace; color: white; text-align: center; font-weight: bold;\">Sacuvaj izmene</button>\n                </div>\n                \n        </form>\n    </div>\n\n</div>\n\n\n\n\n\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/forma/forma.component.html":
/*!**********************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/forma/forma.component.html ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"divForm\" >\n        \n    <form #userForm=\"ngForm\" (ngSubmit)=\"onSubmit(); userForm.reset()\" novalidate >\n            <fieldset>\n            <legend><b>Kontakt forma:</b></legend>\n        <div>\n            <div class=\"form-group\">\n                    <i class=\"fa fa-user\" ></i><label class=\" col-md-6\"for=\"firstName\">Ime i prezime:</label>\n                    <input    \n                    id=\"firstName\" \n                    type=\"text\"  \n                    class=\"form-control col-md-10 \"\n                    ngModel\n                    #nameRef=\"ngModel\"\n                    required\n                    minlength=\"3\"\n                    name=\"firstName\"\n                    placeholder=\"Pera Peric\">\n                \n                <div *ngIf=\"nameRef.errors && (nameRef.dirty || nameRef.touched)\" class=\"alert alert-danger col-md-10\">\n                    <div [hidden]=\"!nameRef.errors.required\">Molimo unesite Vase ime i prezime.</div>\n                    <div [hidden]=\"!nameRef.errors.minlength\">Ime i prezime moraju sadrzati bar 3 slova.</div>\n                </div>\n            </div>\n            <div class=\"form-group\">\n                    <i class=\"fa fa-phone\"></i> <label class=\"control-label col-md-6\" for=\"phone\">Telefon:</label>\n                <input  \n                    id=\"phone\" \n                    type=\"text\" \n                    class=\"form-control col-md-10\" \n                    ngModel\n                    #phoneRef=\"ngModel\"\n                    required\n                    name=\"phone\"\n                    placeholder=\"+ (123) 456-7890\"\n                    [textMask]=\"{mask: phoneMask}\">\n                 <div *ngIf=\"phoneRef.errors && (phoneRef.dirty || phoneRef.touched)\" class=\"alert alert-danger col-md-10\">\n                        <div [hidden]=\"!phoneRef.errors.required\">Molimo unesite broj telefona.</div>\n                    \n                        \n                </div>\n               \n            </div>\n            <div class=\"form-group\">\n                    <i class=\"fa fa-envelope\" ></i><label class=\"control-label col-md-6\" for=\"email\">Email:</label>\n                <input  \n                    id=\"email\" \n                    type=\"email\" \n                    class=\"form-control col-md-10\" \n                    ngModel\n                    #emailRef=\"ngModel\"\n                    required\n                    email\n                    name=\"email\"\n                    placeholder=\"toskea@gmail.com\">\n                 <div *ngIf=\"emailRef.errors && (emailRef.dirty ||emailRef.touched)\" class=\"alert alert-danger col-md-10\">\n                        <div [hidden]=\"!emailRef.errors.required\">Molimo unesite Vas email.</div>\n                        <div [hidden]=\"!emailRef.errors.email\">Unesite validan email.</div>\n                 </div>\n            </div>\n            <div class=\"form-group\">\n                    <i class=\"fa fa-home\" ></i><label class=\"control-label col-md-6\" for=\"address\">Adresa:</label>\n                <input  \n                    id=\"address\" \n                    type=\"text\" \n                    class=\"form-control col-md-10\"\n                    ngModel\n                    #addressRef=\"ngModel\"\n                    required\n                    minlength=\"5\"\n                    name=\"address\"\n                    placeholder=\"Dunavska 7\">\n                 <div *ngIf=\"addressRef.errors && (addressRef.dirty ||addressRef.touched)\" class=\"alert alert-danger col-md-10\">\n                        <div [hidden]=\"!addressRef.errors.required\">Molimo unesite Vasu adresu.</div>\n                        <div [hidden]=\"!addressRef.errors.minlength\">Adresa mora sadrzati bar 3 slova.</div>\n                </div>\n            </div>\n            <div class=\"form-group\">\n                    <i class=\"fa fa-book\" ></i><label class=\"control-label col-md-6\" for=\"subject\">Predmet:</label>\n                <input  \n                    id=\"subject\" \n                    type=\"text\" \n                    ngModel\n                    #subjectRef=\"ngModel\"\n                    required\n                    class=\"form-control col-md-10\" \n                    name=\"subject\"\n                    placeholder=\"Komentar broj 1\">\n                <div *ngIf=\"subjectRef.errors && (subjectRef.dirty ||subjectRef.touched)\" class=\"alert alert-danger col-md-10\">\n                        <div [hidden]=\"!subjectRef.errors.required\">Molimo unesite naslov Vaseg komentara.</div>\n                </div>\n            </div>\n            <div class=\"form-group\">\n                    <i class=\"fa fa-pencil\" ></i><label class=\"control-label col-md-6\"  for=\"comment\">Komentar:</label>\n                <textarea  \n                    name=\"comment\" \n                    id=\"comment\" \n                    cols=\"25\" \n                    rows=\"6\"\n                    wrap=\"soft\"\n                    class=\"form-control col-md-10\" \n                    placeholder=\"Unesite tekst ovde...\" ></textarea>\n            </div>\n            \n            <button \n            type=\"submit\" \n            id=\"btnAlert\"\n            class=\"btn\"\n            [disabled]=\"!userForm.form.valid\" \n           \n            >Posalji</button>\n        </div>\n    </fieldset>\n        </form>\n    \n</div>\n\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/gallery-page/gallery-page.component.html":
/*!************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/gallery-page/gallery-page.component.html ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"grid1\">\n    <h3>Galerija Tefal proizvoda</h3>\n           \n    <div class=\"thumbnails group\" >\n        <a href=\"assets/img/gallery1.jpg\" data-lightbox=\"gallery\" data-title=\"Aparat za sendvice\"><img src=\"assets/img/gallery1.jpg\" alt=\"Image 1\"></a>\n        <a href=\"assets/img/gallery2.png\" data-lightbox=\"gallery\" data-title=\"Pecnica za hleb\"><img src=\"assets/img/gallery2.png\" alt=\"Image 2\"></a>\n        <a href=\"assets/img/gallerypage/sendvicar1.jpg\" data-lightbox=\"gallery\" data-title=\"Aparat za bakine kolace\"><img src=\"assets/img/gallerypage/sendvicar1.jpg\" alt=\"Image 3\"></a>\n        <a href=\"assets/img/gallery4.png\" data-lightbox=\"gallery\" data-title=\"Mikrotalasna\"><img src=\"assets/img/gallery4-thumb.png\" alt=\"Image 4\"></a>\n        <a href=\"assets/img/gallery5.png\" data-lightbox=\"gallery\" data-title=\"Sokovnik\"><img src=\"assets/img/gallery5-thumb.png\" alt=\"Image 5\"></a>\n        <a href=\"assets/img/gallery6.png\" data-lightbox=\"gallery\" data-title=\"Ekspres lonac\"><img src=\"assets/img/gallery6-thumb.png\" alt=\"Image 6\"></a>\n        <a href=\"assets/img/gallerypage/stapnimikser.jpg\" data-lightbox=\"gallery\" data-title=\"Stapni mikser\"><img src=\"assets/img/gallerypage/stapnimikser.jpg\" alt=\"Image 7\"></a>\n        <a href=\"assets/img/gallerypage/secko.jpg\" data-lightbox=\"gallery\" data-title=\"Mini sokovnik\"><img src=\"assets/img/gallerypage/secko.jpg\" alt=\"Image 8\"></a>\n        \n        <a href=\"assets/img/gallerypage/gallery9.png\" data-lightbox=\"gallery\" data-title=\"Pecnica za hleb\"><img src=\"assets/img/gallerypage/gallery9.png\" alt=\"Image 9\"></a>\n        <a href=\"assets/img/gallerypage/gallery10.png\" data-lightbox=\"gallery\" data-title=\"Ekspres lonac\"><img src=\"assets/img/gallerypage/gallery10.png\" alt=\"Image 10\"></a>\n        <a href=\"assets/img/gallerypage/gallery11.jpg\" data-lightbox=\"gallery\" data-title=\"Sokovnik\"><img src=\"assets/img/gallerypage/gallery11.jpg\" alt=\"Image 11\"></a>\n        <a href=\"assets/img/gallerypage/gallery12.png\" data-lightbox=\"gallery\" data-title=\"Friteza\"><img src=\"assets/img/gallerypage/gallery12.png\" alt=\"Image 12\"></a>\n        <a href=\"assets/img/gallerypage/gallery13.png\" data-lightbox=\"gallery\" data-title=\"Friteza za krompir\"><img src=\"assets/img/gallerypage/gallery13.png\" alt=\"Image 13\"></a>\n        <a href=\"assets/img/gallerypage/gallery14.png\" data-lightbox=\"gallery\" data-title=\"Mirkotalasna\"><img src=\"assets/img/gallerypage/gallery14.png\" alt=\"Image 14\"></a>\n        <a href=\"assets/img/gallerypage/gallery15.png\" data-lightbox=\"gallery\" data-title=\"Ringla za kuvanje\"><img src=\"assets/img/gallerypage/gallery15.png\" alt=\"Image 15\"></a>\n        <a href=\"assets/img/gallerypage/gallery16.png\" data-lightbox=\"gallery\" data-title=\"Ekspres lonac\"><img src=\"assets/img/gallerypage/gallery16.png\" alt=\"Image 16\"></a>\n    </div>\n    \n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/geolocation/geolocation.component.html":
/*!**********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/geolocation/geolocation.component.html ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"geo1\">\n    <agm-map \n        [latitude]=\"latitude\" \n        [longitude]=\"longitude\" \n        (mapClick)=\"onChoseLocation($event)\" >\n            <agm-marker \n                [latitude]=\"latitude\" \n                [longitude]=\"longitude\">\n            </agm-marker>\n    </agm-map>\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/home/home.component.html":
/*!********************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/home/home.component.html ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-jumbotron></app-jumbotron>\n<app-carousel></app-carousel>\n<app-videofile></app-videofile>\n<app-photo-gallery></app-photo-gallery>\n<app-about></app-about>\n<div id=\"div0\">\n    <table>\n        <tr>\n            <td><app-contact></app-contact></td>\n            <td></td>\n            <td><app-forma></app-forma></td>\n        </tr>\n    </table>\n</div>\n<app-geolocation></app-geolocation>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/jumbotron/jumbotron.component.html":
/*!******************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/jumbotron/jumbotron.component.html ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"jumbotron text-center\" style=\"background-color: white\">\n        <h1> {{ title }}!</h1>\n        \n        <img width=\"900px\" height=\"300px\" style=\"padding-bottom: 10px;\" alt=\"Naslovna Tefal Shop\" src=\"assets/jumbotrontefal.jpg\">\n        \n        <p id=\"p1\">\n                Tefal vam je sve ove godine nudio raznovrsna inovativna rešenja i uz vašu pomoć smo postali najveći svetski proizvođač posuđa sa nelepljivom oblogom, kao i u lider u proizvodnji pegli, kuhinjskih aparata, aparata za kuvanje na pari, proizvoda za pripremu hrane i pića i telesnih vaga. Tefal se danas nalazi u vašoj blizini, u više od 120 zemalja sveta.\n        </p>\n        <hr class=\"my-4\">\n       \n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/korpa/korpa.component.html":
/*!**********************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/korpa/korpa.component.html ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h1>Shooping Cart</h1>\n\n<div id=\"tableDIV\">\n    <a \n    class=\"add-to-cart btn btn-danger\" \n    routerLink='/shop'\n    style=\"color: white; \n    font-weight: bold; \n    margin-bottom: 10px;\n    font-family: monospace;\n    cursor: pointer;\">\n    <i class=\"fa fa-arrow-circle-o-left\" aria-hidden=\"true\"></i>\n    Nazad u Shop\n</a>\n<a \n  class=\"btn btn-success\"  \n  style=\n       \"color: white; \n        font-weight: bold;\n        margin-left: 20px; \n        margin-bottom: 10px;\n        font-family: monospace;\n        cursor: pointer;\"\n  (click)=\"isprazniKorpu(proizvod)\">\n  Isprazni Korpu\n</a>\n    <table class=\"table table-collapse col-md-10  table-success table-bordered table-hover \" >\n        <thead>\n            <tr>\n                <td></td>\n                <td>Proizvodi</td>\n                <td>Cena</td>\n                <td>Kolicina</td>\n                <td>Total</td>\n            </tr>\n        </thead>\n        <tbody *ngFor=\"let proizvod of korpa\" >\n            <tr>\n                <td><img class=\"cars-img-top align-middle\" [src]=\"proizvod.url\" style=\"height:80px ; width: auto ;\"></td>\n                <td class=\"align-middle\" style=\"text-align: left;\">{{proizvod.name}}</td>\n                <td class=\"align-middle\">{{proizvod.price}}</td>\n                <td class=\"align-middle\">{{brojStavki()}}</td>\n                <td class=\"align-middle\"></td>\n            </tr>\n        </tbody>\n    </table>\n</div>\n<div style=\"padding-top: 20px; float: right; margin-right: 220px;\">\n    <a \n    class=\"btn btn-danger\"  \n    style=\n        \"color: white; \n            font-weight: bold;\n            margin-left: 20px; \n            margin-bottom: 10px;\n            font-family: monospace;\n            font-size: 16px;\n            cursor: pointer;\"\n    (click)=\"izvrsiKupovinu()\">\n    <i class=\"fa fa-shopping-cart\" style=\"font-size:16px;  \"></i>\n    Kupi\n    </a>\n</div>\n\n\n\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/navbar/navbar.component.html":
/*!************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/navbar/navbar.component.html ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<link rel=\"stylesheet\" href=\"https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css\">\n\n<nav class=\"navbar navbar-expand-lg  bg-success  navbar-dark\"   >\n    \n    <a class=\"navbar-brand navbar-dark\" routerLink=\"/\">{{appName}}</a>\n    <button class=\"navbar-toggler navbar-light\"  type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarSupportedContent\" aria-controls=\"navbarSupportedContent\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n      <span class=\"navbar-toggler-icon\" ></span>\n    </button>\n    \n    <div class=\"collapse navbar-collapse\"  id=\"navbarSupportedContent\">\n      <ul class=\"navbar-nav mr-auto navbar-dark \">\n          \n          <li class=\"nav-item \"   style=\"cursor: pointer;\">\n              <a class=\"nav-link\" routerLink=\"/home\" routerLinkActive=\"active\">Home </a>\n          </li>\n          \n          <li class=\"nav-item \"   style=\"cursor: pointer;\" >\n            <a class=\"nav-link\" routerLink=\"/blog\" routerLinkActive=\"active\">Blog </a>\n          </li>\n        \n          <li class=\"nav-item\"    style=\"cursor: pointer;\">\n            <a class=\"nav-link\" routerLink='/about' routerLinkActive=\"active\">O nama</a>\n        </li>\n\n        <li class=\"nav-item\"    style=\"cursor: pointer;\">\n            <a class=\"nav-link\" routerLink='/gallery' routerLinkActive=\"active\">Galerija</a>\n        </li>\n          \n          <li class=\"nav-item\"   style=\"cursor: pointer;\" >\n            <a class=\"nav-link\" routerLink=\"/shop\" routerLinkActive=\"active\" >Prodavnica</a>\n          </li>\n          <ng-template [ngIf]=\"autentifikacijaService.prijavljen()\">\n            <li class=\"nav-item\"   style=\"cursor: pointer;\">\n          <a class=\"nav-link \"  routerLink='/korpa' routerLinkActive=\"active\" >\n            <i class=\"fa fa-shopping-cart\" style=\"font-size:16px; padding-right: 5px; \"></i>Korpa<i  id=\"cart_n\"></i>\n          </a> \n        </li>\n        </ng-template>\n        \n      \n\n          \n      </ul>\n      <form class=\"form-inline my-2 my-lg-0 \">\n          \n              <a href=\"https://www.facebook.com/\" >\n                <i class=\"fa fa-facebook\" style=\"font-size:20px; padding-right: 20px; color: rgba(255, 255, 255, 0.658);\"></i>\n              </a>\n              <a href=\"https://twitter.com/twitter?lang=en\" >\n                  <i class=\"fa fa-twitter\" style=\"font-size:20px; padding-right: 20px; color: rgba(255, 255, 255, 0.658); \"></i>\n              </a>\n                <a href=\"https://www.instagram.com/\" >\n                    <i class=\"fa fa-instagram\" style=\"font-size:20px; padding-right: 20px; color: rgba(255, 255, 255, 0.658); \"></i>\n                </a>\n                <ng-template [ngIf]=\"!autentifikacijaService.prijavljen()\">\n                  <a class=\"nav-link\" routerLink='/signin' routerLinkActive=\"active\" style=\"cursor: pointer; color: rgba(255, 255, 255, 0.658);\">\n                      <i class=\"fa fa-user\" style=\"font-size:16px; padding-right: 5px; \"></i>Registracija\n                  </a>  \n              \n                <a class=\"nav-link\" routerLink='/signup' routerLinkActive=\"active\" style=\"cursor: pointer; color: rgba(255, 255, 255, 0.658);\">\n                    <i class=\"fa fa-user\" style=\"font-size:16px; padding-right: 5px; \"></i>Logovanje\n              </a>   \n            </ng-template>\n              <ng-template [ngIf]=\"autentifikacijaService.prijavljen()\">\n                <a class=\"nav-link\" style=\"cursor: pointer;\" (click)=\"odjaviSe()\" style=\"cursor: pointer; color: rgba(255, 255, 255, 0.658);\"  >\n                      <i class=\"fa fa-user\" style=\"font-size:16px; padding-right: 5px; \"></i>Izloguj se\n                </a> \n              </ng-template>\n      </form>\n    \n    </div>\n  </nav>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/opis-proizvoda/opis-proizvoda.component.html":
/*!****************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/opis-proizvoda/opis-proizvoda.component.html ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h1>Product Details</h1>\n<div class=\"container\">\n  <div class=\"row\">\n    <div *ngIf=\"proizvod\">\n      <div class=\"col-md-12\">\n          <div class=\"card \">\n              <div id=\"grid1\" >\n                    <div class=\"thumbnails group\" >\n                        <a [href]=\"proizvod.url1\" data-lightbox=\"gallery\"><img [src]=\"proizvod.url1\" alt=\"Image 1\"></a>\n                        <a [href]=\"proizvod.url2\" data-lightbox=\"gallery\"><img [src]=\"proizvod.url2\" alt=\"Image 2\"></a>\n                        <a [href]=\"proizvod.url3\" data-lightbox=\"gallery\"><img [src]=\"proizvod.url3\" alt=\"Image 3\"></a>\n                        <a [href]=\"proizvod.url4\" data-lightbox=\"gallery\"><img [src]=\"proizvod.url4\" alt=\"Image 4\"></a>\n                    </div>\n              </div>\n              <div class=\"card-block \" >\n                  <h4 class=\"card-title\">{{proizvod.name}}</h4>\n                  <p \n                      class=\"card-text col-md-3\" \n                      style=\n                          \"font-size: 25px; \n                          color: white; \n                          font-weight: bold; \n                          border: 2px solid black; \n                          background-color: black;\n                          font-family: monospace;\n                          text-align: center;\">\n                          Cena: €{{proizvod.price}}\n                  </p>\n                  <p class=\"card-text\" *ngIf=\"proizvod.description\">Opis: {{proizvod.description}}</p>\n                  <ng-template [ngIf]=\"autentifikacijaService.prijavljen()\">\n                      <a class=\"add-to-cart btn btn-success\"\n                          style=\n                            \"color:white; \n                            font-weight: bold;\n                            margin-right: 20px;\"\n                          routerLink=\"/korpa\"\n                          (click)=\"staviUKorpu(proizvod)\">\n                          Ubaci u korpu\n                      </a>\n                </ng-template>\n                  <a \n                    class=\"add-to-cart btn btn-info\" \n                    routerLink='/shop'\n                    style=\"color: white; font-weight: bold;; margin-right: 10px;\">\n                    Nazad u Shop\n                </a>\n                </div>\n             \n    </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/photo-gallery/photo-gallery.component.html":
/*!**************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/photo-gallery/photo-gallery.component.html ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"grid1\">\n        <div class=\"thumbnails group\" >\n            <a href=\"assets/img/gallery1.jpg\" data-lightbox=\"gallery\" data-title=\"Aparat za sendvice\"><img src=\"assets/img/gallery1-thumb.jpg\" alt=\"Image 1\"></a>\n            <a href=\"assets/img/gallery2.png\" data-lightbox=\"gallery\" data-title=\"Pecnica za hleb\"><img src=\"assets/img/gallery2-thumb.png\" alt=\"Image 2\"></a>\n            <a href=\"assets/img/gallery3.png\" data-lightbox=\"gallery\" data-title=\"Mini friteza\"><img src=\"assets/img/gallery3-thumb.jpg\" alt=\"Image 3\"></a>\n            <a href=\"assets/img/gallery4.png\" data-lightbox=\"gallery\" data-title=\"Mikrotalasna\"><img src=\"assets/img/gallery4-thumb.png\" alt=\"Image 4\"></a>\n            <a href=\"assets/img/gallery5.png\" data-lightbox=\"gallery\" data-title=\"Sokovnik\"><img src=\"assets/img/gallery5-thumb.png\" alt=\"Image 5\"></a>\n            <a href=\"assets/img/gallery6.png\" data-lightbox=\"gallery\" data-title=\"Ekspres lonac\"><img src=\"assets/img/gallery6-thumb.png\" alt=\"Image 6\"></a>\n            <a href=\"assets/img/gallery7.png\" data-lightbox=\"gallery\" data-title=\"Elektricno rende\"><img src=\"assets/img/gallery7-thumb.jpg\" alt=\"Image 7\"></a>\n            <a href=\"assets/img/gallery8.png\" data-lightbox=\"gallery\" data-title=\"Mikser\"><img src=\"assets/img/gallery8-thumb.jpg\" alt=\"Image 8\"></a>\n        </div>\n        <div id=\"ShowMore\">\n            <button (click)=\"goGallery()\" class=\"btn btn-danger \" style=\"font-family: monospace; font-weight: bold; clear: both;\">Prikazi vise</button>\n        </div>\n    </div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/shop/shop.component.html":
/*!********************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/shop/shop.component.html ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h3>Lista Tefal proizvoda</h3>\n<div class=\"row p-4\">\n    <div *ngFor=\"let proizvod of proizvodi; index as proizvodId\">\n       <div class=\"col-md-6\">\n           <div class=\"card\" style=\"width: 20rem\">\n               <img class=\"cars-img-top\" [src]=\"proizvod.url\" >\n               <div class=\"card-block\">\n                 <h5 class=\"card-title\">{{proizvod.name}}</h5>\n                 <p class=\"card-text\" style=\"font-size: 30px; font-weight: bold;\">€{{proizvod.price}}</p>\n                \n                 <a \n                    class=\"add-to-cart btn btn-info\" \n                    [routerLink]=\"['/opis', proizvodId]\"\n                    style=\"color: white; font-weight: bold;; margin-right: 10px; font-family: monospace;\">\n                    Detaljnije\n                </a>\n                \n\n                <ng-template [ngIf]=\"autentifikacijaService.prijavljen()\">\n                    <a \n                        class=\"add-to-cart btn btn-success\"\n                        (click)=\"staviUKorpu(proizvod)\"\n                        style=\"color: white; font-weight: bold; font-family: monospace; cursor: pointer\">\n                        Ubaci u korpu\n                    </a></ng-template>\n                \n       </div>\n   </div>\n  </div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/signin/signin.component.html":
/*!************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/signin/signin.component.html ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<header id=\"section\">\n    <div class=\"bckg\">\n      <div class=\"container content\">\n        <div class=\"row\">\n          <div class=\"col-md-6 d-none d-md-block \">\n            <h1 class=\"display-4\"><strong>Registracija</strong></h1>\n            <h4>Ako zelis da vidis ostatak stranice, registruj se</h4>\n          </div>\n          <div class=\"col-md-6\">\n            <div class=\"card  text-center card-form\">\n              <div class=\"card-body\">\n                <form (ngSubmit)=\"prijaviSe(f)\" #f=\"ngForm\">\n                  <div class=\"form-group\">\n                    <input \n                    type=\"email\" \n                    placeholder=\"Email\" \n                    id=\"email\" \n                    name=\"email\" \n                    ngModel\n                    #emailRef=\"ngModel\"\n                    required\n                    email\n                    class=\"form-control form-control-lg\">\n                  </div>\n                  <div *ngIf=\"emailRef.errors && (emailRef.dirty ||emailRef.touched)\" class=\"alert alert-danger col-md-12\">\n                    <div [hidden]=\"!emailRef.errors.required\">Molimo unesite Vas email.</div>\n                    <div [hidden]=\"!emailRef.errors.email\">Unesite validan email.</div>\n             </div>\n                  <div class=\"form-group\">\n                    <input \n                    type=\"password\" \n                    placeholder=\"Sifra\" \n                    id=\"password\" \n                    name=\"sifra\" \n                    ngModel \n                    #passwordRef=\"ngModel\"\n                    required\n                    minlength=\"6\"\n                    class=\"form-control form-control-lg\">\n                  </div>\n                  <div *ngIf=\"passwordRef.errors && (passwordRef.dirty || passwordRef.touched)\" class=\"alert alert-danger col-md-12\">\n                    <div [hidden]=\"!passwordRef.errors.required\">Molimo unesite sifru..</div>\n                    <div [hidden]=\"!passwordRef.errors.minlength\">Sifra mora da ima najmanje 6 karaktera.</div>\n                </div>\n                  <button \n                    class=\"btn btn-block btn-success\"\n                    type=\"submit\"\n                    [disabled]=\"!f.form.valid\" >Registruj se</button>\n                </form>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </header>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/signup/signup.component.html":
/*!************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/signup/signup.component.html ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<header id=\"section\">\n    <div class=\"bckg\">\n      <div class=\"container content\">\n        <div class=\"row\">\n          <div class=\"col-md-6 d-none d-md-block text-info\">\n            <h1 class=\"display-4\"><strong>Loguj se</strong></h1>\n            <h4>Uloguj se ako zelis da vidis ostatak stranice</h4>\n          </div>\n          <div class=\"col-md-6\">\n            <div class=\"card  text-center card-form\">\n              <div class=\"card-body\">\n                <form (ngSubmit)=\"registrujSe(f)\" #f=\"ngForm\">\n                  <div class=\"form-group\">\n                    <input \n                    type=\"email\" \n                    placeholder=\"Email\" \n                    id=\"email\" \n                    name=\"email\" \n                    ngModel\n                    #emailRef=\"ngModel\"\n                    required\n                    email\n                    class=\"form-control form-control-lg\">\n                  </div>\n                  <div *ngIf=\"emailRef.errors && (emailRef.dirty ||emailRef.touched)\" class=\"alert alert-danger col-md-12\">\n                    <div [hidden]=\"!emailRef.errors.required\">Molimo unesite Vas email.</div>\n                    <div [hidden]=\"!emailRef.errors.email\">Molimo unesite validan email.</div>\n             </div>\n                  <div class=\"form-group\">\n                    <label for=\"sifra\"></label>\n                    <input \n                    type=\"password\" \n                    placeholder=\"Sifra\" \n                    id=\"password\" \n                    name=\"sifra\" \n                    ngModel \n                    #passwordRef=\"ngModel\"\n                    required\n                    minlength=\"6\"\n                    class=\"form-control form-control-lg\">\n                  </div>\n                  <div *ngIf=\"passwordRef.errors && (passwordRef.dirty || passwordRef.touched)\" class=\"alert alert-danger col-md-12\">\n                    <div [hidden]=\"!passwordRef.errors.required\">Molimo unesite sifru.</div>\n                    <div [hidden]=\"!passwordRef.errors.minlength\">Sifra mora da ima najmanje 6 karaktera.</div>\n                </div>\n                  <button \n                  class=\"btn btn-block btn-danger\" \n                  type=\"submit\"\n                  [disabled]=\"!f.form.valid\">Loguj se</button>\n                </form>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </header>\n  "

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/tefalshop-pocetna/tefalshop-pocetna.component.html":
/*!**********************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/tefalshop-pocetna/tefalshop-pocetna.component.html ***!
  \**********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"jumbotron text-center\" style=\"background-color: white\">\n        <h1> Dobro dosli u <img src=\"assets/tefallogo.gif\"></h1>\n        \n        <img style=\"padding-bottom: 10px; height: 200px; width: 200px;\" alt=\"Logo Tefal Shop\" src=\"assets/tefalLOGO.jpg\">\n        \n        <p id=\"p1\">\n                  Naša misija je da vam ponudimo proizvode i usluge koji će vam omogućiti da pripremite ukusne, raznolike i zdrave obroke, i da vama, članovima vaše porodice i vašim prijateljima pomognemo u svakodnevnim obavezama.\n        </p>\n        <hr class=\"my-4\">\n       \n    </div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/videofile/videofile.component.html":
/*!******************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/videofile/videofile.component.html ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"text-center\" style=\"text-align: center;\">\n    <h2>Sa nasim aparatima mozete brzo i lako napraviti:</h2>\n    <div >\n        <table id=\"divtable1\">\n                <tr>\n                        <td>\n                                <video controls=\"controls\" id=\"video1\" >\n                                        <source src=\"assets/salataodpovrca.mp4\" type=\"video/mp4\" />\n                                </video><br/>\n                        </td>\n                        <td>\n                                <video controls=\"controls\" id=\"video1\" >\n                                        <source src=\"assets/vocnasalata.mp4\" type=\"video/mp4\" />\n                                </video><br/>\n                        </td>\n                        <td>\n                                <video controls=\"controls\" id=\"video1\" >\n                                        <source src=\"assets/tzaziki salata.mp4\" type=\"video/mp4\" />\n                                </video><br/>\n                        </td>\n                        <td>\n                                <video controls=\"controls\" id=\"video1\" >\n                                        <source src=\"assets/taboulisalata.mp4\" type=\"video/mp4\" />\n                                </video><br/>\n                        </td>\n                </tr>\n                <tr id=\"hedertable1\" >\n                    <td>Salata od povrca</td>\n                    <td>Vocna salata</td>\n                    <td>Tzaziki salata</td>\n                    <td>Tabouli salata</td>\n                </tr>\n        </table>\n</div >\n<div style=\"padding-top: 50px;\"> \n        <table id=\"table1\" >\n                <tr>\n                    <td>Tefal pesma</td>\n                    <td>\n                        <audio controls=\"controls\" id=\"audio1\">\n                            <source src=\"assets/tefalpesma.mp3\" type=\"audio/mp3\"/>\n                     </audio>\n                    </td>\n                </tr>\n\n            </table>\n</div>\n            \n        \n    </div>\n"

/***/ }),

/***/ "./src/app/about-page/about-page.component.css":
/*!*****************************************************!*\
  !*** ./src/app/about-page/about-page.component.css ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".textOverImage{\r\n    position: relative;\r\n    width: 900px;\r\n    height: 200px;\r\n    float: left;\r\n    margin-left: 100px;\r\n    margin-right: 100px;\r\n    margin-bottom: 100px;\r\n    background-size: 100%;\r\n    background-position: center;\r\n    -webkit-transition:0.5s ;\r\n    transition:0.5s ;\r\n    clear: both;\r\n    font-family: monospace;\r\n    font-size: 20px;\r\n    color:red;\r\n    border-radius: 10px;\r\n    \r\n}\r\n\r\n.textOverImage:hover{\r\n    background-size: 110%;\r\n    font-family: monospace;\r\n    font-size: 20px;\r\n    color:red;\r\n    border-radius: 10px;\r\n}\r\n\r\n.textOverImage:after{\r\n    position: absolute;\r\n    top: 100%;\r\n    bottom: 0;\r\n    left: 0;\r\n    right: 0;\r\n    white-space: pre-wrap;\r\n    word-wrap: break-word;\r\n    overflow: hidden;\r\n    background-color: rgba(0,0,0,0);\r\n    color: #fff;\r\n    padding:8px;\r\n    content: attr(data-text);\r\n    -webkit-transition: 0.5s ;\r\n    transition: 0.5s ;\r\n    font-family: monospace;\r\n    text-align: center;\r\n    font-size: 20px;\r\n    color:red;\r\n    border-radius: 10px;\r\n    \r\n}\r\n\r\n.textOverImage:hover:after{\r\n    top: 0;\r\n    padding: 8px;\r\n    background-color: rgba(0,0,0,0.6);\r\n    border-radius: 10px;\r\n}\r\n\r\n.textOverImage:first-line{\r\n    color:red;\r\n    font-weight: bold;\r\n    font-size: 1.5em;\r\n    border-radius: 10px;\r\n}\r\n\r\nh3 {\r\n    font-family: monospace;\r\n    font-weight: bold;\r\n    color: rgb(202, 1, 1);\r\n    text-align: center;\r\n    padding-bottom: 26px;\r\n    padding-top: 20px;\r\n}\r\n\r\np {\r\n    font-family: monospace;\r\n    font-size: 20px;\r\n    color:rgb(202, 1, 1);\r\n    padding-left: 100px;\r\n    padding-right: 100px;\r\n    text-align: center;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWJvdXQtcGFnZS9hYm91dC1wYWdlLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxrQkFBa0I7SUFDbEIsWUFBWTtJQUNaLGFBQWE7SUFDYixXQUFXO0lBQ1gsa0JBQWtCO0lBQ2xCLG1CQUFtQjtJQUNuQixvQkFBb0I7SUFDcEIscUJBQXFCO0lBQ3JCLDJCQUEyQjtJQUMzQix3QkFBZ0I7SUFBaEIsZ0JBQWdCO0lBQ2hCLFdBQVc7SUFDWCxzQkFBc0I7SUFDdEIsZUFBZTtJQUNmLFNBQVM7SUFDVCxtQkFBbUI7O0FBRXZCOztBQUVBO0lBQ0kscUJBQXFCO0lBQ3JCLHNCQUFzQjtJQUN0QixlQUFlO0lBQ2YsU0FBUztJQUNULG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixTQUFTO0lBQ1QsU0FBUztJQUNULE9BQU87SUFDUCxRQUFRO0lBQ1IscUJBQXFCO0lBQ3JCLHFCQUFxQjtJQUNyQixnQkFBZ0I7SUFDaEIsK0JBQStCO0lBQy9CLFdBQVc7SUFDWCxXQUFXO0lBQ1gsd0JBQXdCO0lBQ3hCLHlCQUFpQjtJQUFqQixpQkFBaUI7SUFDakIsc0JBQXNCO0lBQ3RCLGtCQUFrQjtJQUNsQixlQUFlO0lBQ2YsU0FBUztJQUNULG1CQUFtQjs7QUFFdkI7O0FBRUE7SUFDSSxNQUFNO0lBQ04sWUFBWTtJQUNaLGlDQUFpQztJQUNqQyxtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSxTQUFTO0lBQ1QsaUJBQWlCO0lBQ2pCLGdCQUFnQjtJQUNoQixtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSxzQkFBc0I7SUFDdEIsaUJBQWlCO0lBQ2pCLHFCQUFxQjtJQUNyQixrQkFBa0I7SUFDbEIsb0JBQW9CO0lBQ3BCLGlCQUFpQjtBQUNyQjs7QUFFQTtJQUNJLHNCQUFzQjtJQUN0QixlQUFlO0lBQ2Ysb0JBQW9CO0lBQ3BCLG1CQUFtQjtJQUNuQixvQkFBb0I7SUFDcEIsa0JBQWtCO0FBQ3RCIiwiZmlsZSI6InNyYy9hcHAvYWJvdXQtcGFnZS9hYm91dC1wYWdlLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIudGV4dE92ZXJJbWFnZXtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIHdpZHRoOiA5MDBweDtcclxuICAgIGhlaWdodDogMjAwcHg7XHJcbiAgICBmbG9hdDogbGVmdDtcclxuICAgIG1hcmdpbi1sZWZ0OiAxMDBweDtcclxuICAgIG1hcmdpbi1yaWdodDogMTAwcHg7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxMDBweDtcclxuICAgIGJhY2tncm91bmQtc2l6ZTogMTAwJTtcclxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcclxuICAgIHRyYW5zaXRpb246MC41cyA7XHJcbiAgICBjbGVhcjogYm90aDtcclxuICAgIGZvbnQtZmFtaWx5OiBtb25vc3BhY2U7XHJcbiAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgICBjb2xvcjpyZWQ7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gICAgXHJcbn1cclxuXHJcbi50ZXh0T3ZlckltYWdlOmhvdmVye1xyXG4gICAgYmFja2dyb3VuZC1zaXplOiAxMTAlO1xyXG4gICAgZm9udC1mYW1pbHk6IG1vbm9zcGFjZTtcclxuICAgIGZvbnQtc2l6ZTogMjBweDtcclxuICAgIGNvbG9yOnJlZDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbn1cclxuXHJcbi50ZXh0T3ZlckltYWdlOmFmdGVye1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgdG9wOiAxMDAlO1xyXG4gICAgYm90dG9tOiAwO1xyXG4gICAgbGVmdDogMDtcclxuICAgIHJpZ2h0OiAwO1xyXG4gICAgd2hpdGUtc3BhY2U6IHByZS13cmFwO1xyXG4gICAgd29yZC13cmFwOiBicmVhay13b3JkO1xyXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwwLDAsMCk7XHJcbiAgICBjb2xvcjogI2ZmZjtcclxuICAgIHBhZGRpbmc6OHB4O1xyXG4gICAgY29udGVudDogYXR0cihkYXRhLXRleHQpO1xyXG4gICAgdHJhbnNpdGlvbjogMC41cyA7XHJcbiAgICBmb250LWZhbWlseTogbW9ub3NwYWNlO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgZm9udC1zaXplOiAyMHB4O1xyXG4gICAgY29sb3I6cmVkO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICAgIFxyXG59XHJcblxyXG4udGV4dE92ZXJJbWFnZTpob3ZlcjphZnRlcntcclxuICAgIHRvcDogMDtcclxuICAgIHBhZGRpbmc6IDhweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwwLDAsMC42KTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbn1cclxuXHJcbi50ZXh0T3ZlckltYWdlOmZpcnN0LWxpbmV7XHJcbiAgICBjb2xvcjpyZWQ7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgIGZvbnQtc2l6ZTogMS41ZW07XHJcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG59XHJcblxyXG5oMyB7XHJcbiAgICBmb250LWZhbWlseTogbW9ub3NwYWNlO1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICBjb2xvcjogcmdiKDIwMiwgMSwgMSk7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBwYWRkaW5nLWJvdHRvbTogMjZweDtcclxuICAgIHBhZGRpbmctdG9wOiAyMHB4O1xyXG59XHJcblxyXG5wIHtcclxuICAgIGZvbnQtZmFtaWx5OiBtb25vc3BhY2U7XHJcbiAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgICBjb2xvcjpyZ2IoMjAyLCAxLCAxKTtcclxuICAgIHBhZGRpbmctbGVmdDogMTAwcHg7XHJcbiAgICBwYWRkaW5nLXJpZ2h0OiAxMDBweDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/about-page/about-page.component.ts":
/*!****************************************************!*\
  !*** ./src/app/about-page/about-page.component.ts ***!
  \****************************************************/
/*! exports provided: AboutPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AboutPageComponent", function() { return AboutPageComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let AboutPageComponent = class AboutPageComponent {
    constructor() { }
    ngOnInit() {
    }
};
AboutPageComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-about-page',
        template: __webpack_require__(/*! raw-loader!./about-page.component.html */ "./node_modules/raw-loader/index.js!./src/app/about-page/about-page.component.html"),
        styles: [__webpack_require__(/*! ./about-page.component.css */ "./src/app/about-page/about-page.component.css")]
    })
], AboutPageComponent);



/***/ }),

/***/ "./src/app/about/about.component.css":
/*!*******************************************!*\
  !*** ./src/app/about/about.component.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".textOverImage{\r\n    position: relative;\r\n    width: 900px;\r\n    height: 200px;\r\n    float: left;\r\n    margin-left: 100px;\r\n    margin-right: 100px;\r\n    margin-bottom: 100px;\r\n    background-size: 100%;\r\n    background-position: center;\r\n    -webkit-transition:0.5s ;\r\n    transition:0.5s ;\r\n    clear: both;\r\n    font-family: monospace;\r\n    font-size: 20px;\r\n    color:red;\r\n    border-radius: 10px;\r\n    \r\n}\r\n\r\n.textOverImage:hover{\r\n    background-size: 110%;\r\n    font-family: monospace;\r\n    font-size: 20px;\r\n    color:red;\r\n    border-radius: 10px;\r\n}\r\n\r\n.textOverImage:after{\r\n    position: absolute;\r\n    top: 100%;\r\n    bottom: 0;\r\n    left: 0;\r\n    right: 0;\r\n    white-space: pre-wrap;\r\n    word-wrap: break-word;\r\n    overflow: hidden;\r\n    background-color: rgba(0,0,0,0);\r\n    color: #fff;\r\n    padding:8px;\r\n    content: attr(data-text);\r\n    -webkit-transition: 0.5s ;\r\n    transition: 0.5s ;\r\n    font-family: monospace;\r\n    text-align: center;\r\n    font-size: 20px;\r\n    color:red;\r\n    border-radius: 10px;\r\n    \r\n}\r\n\r\n.textOverImage:hover:after{\r\n    top: 0;\r\n    padding: 8px;\r\n    background-color: rgba(0,0,0,0.6);\r\n    border-radius: 10px;\r\n}\r\n\r\n.textOverImage:first-line{\r\n    color:red;\r\n    font-weight: bold;\r\n    font-size: 1.5em;\r\n    border-radius: 10px;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWJvdXQvYWJvdXQuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGtCQUFrQjtJQUNsQixZQUFZO0lBQ1osYUFBYTtJQUNiLFdBQVc7SUFDWCxrQkFBa0I7SUFDbEIsbUJBQW1CO0lBQ25CLG9CQUFvQjtJQUNwQixxQkFBcUI7SUFDckIsMkJBQTJCO0lBQzNCLHdCQUFnQjtJQUFoQixnQkFBZ0I7SUFDaEIsV0FBVztJQUNYLHNCQUFzQjtJQUN0QixlQUFlO0lBQ2YsU0FBUztJQUNULG1CQUFtQjs7QUFFdkI7O0FBRUE7SUFDSSxxQkFBcUI7SUFDckIsc0JBQXNCO0lBQ3RCLGVBQWU7SUFDZixTQUFTO0lBQ1QsbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLFNBQVM7SUFDVCxTQUFTO0lBQ1QsT0FBTztJQUNQLFFBQVE7SUFDUixxQkFBcUI7SUFDckIscUJBQXFCO0lBQ3JCLGdCQUFnQjtJQUNoQiwrQkFBK0I7SUFDL0IsV0FBVztJQUNYLFdBQVc7SUFDWCx3QkFBd0I7SUFDeEIseUJBQWlCO0lBQWpCLGlCQUFpQjtJQUNqQixzQkFBc0I7SUFDdEIsa0JBQWtCO0lBQ2xCLGVBQWU7SUFDZixTQUFTO0lBQ1QsbUJBQW1COztBQUV2Qjs7QUFFQTtJQUNJLE1BQU07SUFDTixZQUFZO0lBQ1osaUNBQWlDO0lBQ2pDLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLFNBQVM7SUFDVCxpQkFBaUI7SUFDakIsZ0JBQWdCO0lBQ2hCLG1CQUFtQjtBQUN2QiIsImZpbGUiOiJzcmMvYXBwL2Fib3V0L2Fib3V0LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIudGV4dE92ZXJJbWFnZXtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIHdpZHRoOiA5MDBweDtcclxuICAgIGhlaWdodDogMjAwcHg7XHJcbiAgICBmbG9hdDogbGVmdDtcclxuICAgIG1hcmdpbi1sZWZ0OiAxMDBweDtcclxuICAgIG1hcmdpbi1yaWdodDogMTAwcHg7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxMDBweDtcclxuICAgIGJhY2tncm91bmQtc2l6ZTogMTAwJTtcclxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcclxuICAgIHRyYW5zaXRpb246MC41cyA7XHJcbiAgICBjbGVhcjogYm90aDtcclxuICAgIGZvbnQtZmFtaWx5OiBtb25vc3BhY2U7XHJcbiAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgICBjb2xvcjpyZWQ7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gICAgXHJcbn1cclxuXHJcbi50ZXh0T3ZlckltYWdlOmhvdmVye1xyXG4gICAgYmFja2dyb3VuZC1zaXplOiAxMTAlO1xyXG4gICAgZm9udC1mYW1pbHk6IG1vbm9zcGFjZTtcclxuICAgIGZvbnQtc2l6ZTogMjBweDtcclxuICAgIGNvbG9yOnJlZDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbn1cclxuXHJcbi50ZXh0T3ZlckltYWdlOmFmdGVye1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgdG9wOiAxMDAlO1xyXG4gICAgYm90dG9tOiAwO1xyXG4gICAgbGVmdDogMDtcclxuICAgIHJpZ2h0OiAwO1xyXG4gICAgd2hpdGUtc3BhY2U6IHByZS13cmFwO1xyXG4gICAgd29yZC13cmFwOiBicmVhay13b3JkO1xyXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwwLDAsMCk7XHJcbiAgICBjb2xvcjogI2ZmZjtcclxuICAgIHBhZGRpbmc6OHB4O1xyXG4gICAgY29udGVudDogYXR0cihkYXRhLXRleHQpO1xyXG4gICAgdHJhbnNpdGlvbjogMC41cyA7XHJcbiAgICBmb250LWZhbWlseTogbW9ub3NwYWNlO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgZm9udC1zaXplOiAyMHB4O1xyXG4gICAgY29sb3I6cmVkO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICAgIFxyXG59XHJcblxyXG4udGV4dE92ZXJJbWFnZTpob3ZlcjphZnRlcntcclxuICAgIHRvcDogMDtcclxuICAgIHBhZGRpbmc6IDhweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwwLDAsMC42KTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbn1cclxuXHJcbi50ZXh0T3ZlckltYWdlOmZpcnN0LWxpbmV7XHJcbiAgICBjb2xvcjpyZWQ7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgIGZvbnQtc2l6ZTogMS41ZW07XHJcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG59Il19 */"

/***/ }),

/***/ "./src/app/about/about.component.ts":
/*!******************************************!*\
  !*** ./src/app/about/about.component.ts ***!
  \******************************************/
/*! exports provided: AboutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AboutComponent", function() { return AboutComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let AboutComponent = class AboutComponent {
    constructor() { }
    ngOnInit() {
    }
};
AboutComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-about',
        template: __webpack_require__(/*! raw-loader!./about.component.html */ "./node_modules/raw-loader/index.js!./src/app/about/about.component.html"),
        styles: [__webpack_require__(/*! ./about.component.css */ "./src/app/about/about.component.css")]
    })
], AboutComponent);



/***/ }),

/***/ "./src/app/add-blog/add-blog.component.css":
/*!*************************************************!*\
  !*** ./src/app/add-blog/add-blog.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "h2 {\r\n    padding-top: 20px;\r\n    font-family: monospace;\r\n    font-weight: bold;\r\n    color: white;\r\n    text-align: center;\r\n}\r\n\r\n.div1 {\r\n    font-family: monospace;\r\n    color: white ;\r\n    font-weight: bold;\r\n    \r\n}\r\n\r\n.container {\r\n    background-color: rgba(238, 8, 8, 0.705);\r\n    border: 2px solid black;\r\n    border-radius: 10px;\r\n    margin-top: 20px;\r\n    padding-bottom: 10px;\r\n    padding-top: 10px;\r\n}\r\n\r\n.alert{\r\n    background-color: rgb(66, 4, 4);\r\n    color: white;\r\n    font-size: 12px;\r\n    font-weight: bold;\r\n}\r\n\r\nh3 {\r\n    font-family: monospace;\r\n    color:  rgb(202, 1, 1);\r\n    padding-top: 20px;\r\n    padding-left: 50px;\r\n    padding-bottom: 10px;\r\n    font-weight: bold;\r\n    text-align: center;\r\n}\r\n\r\n.add-to-cart {\r\n    float: right;\r\n    top:20px;\r\n    right:20px;\r\n    margin-right: 70px;\r\n    font-family: monospace;\r\n\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWRkLWJsb2cvYWRkLWJsb2cuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGlCQUFpQjtJQUNqQixzQkFBc0I7SUFDdEIsaUJBQWlCO0lBQ2pCLFlBQVk7SUFDWixrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxzQkFBc0I7SUFDdEIsYUFBYTtJQUNiLGlCQUFpQjs7QUFFckI7O0FBRUE7SUFDSSx3Q0FBd0M7SUFDeEMsdUJBQXVCO0lBQ3ZCLG1CQUFtQjtJQUNuQixnQkFBZ0I7SUFDaEIsb0JBQW9CO0lBQ3BCLGlCQUFpQjtBQUNyQjs7QUFFQTtJQUNJLCtCQUErQjtJQUMvQixZQUFZO0lBQ1osZUFBZTtJQUNmLGlCQUFpQjtBQUNyQjs7QUFFQTtJQUNJLHNCQUFzQjtJQUN0QixzQkFBc0I7SUFDdEIsaUJBQWlCO0lBQ2pCLGtCQUFrQjtJQUNsQixvQkFBb0I7SUFDcEIsaUJBQWlCO0lBQ2pCLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLFlBQVk7SUFDWixRQUFRO0lBQ1IsVUFBVTtJQUNWLGtCQUFrQjtJQUNsQixzQkFBc0I7O0FBRTFCIiwiZmlsZSI6InNyYy9hcHAvYWRkLWJsb2cvYWRkLWJsb2cuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbImgyIHtcclxuICAgIHBhZGRpbmctdG9wOiAyMHB4O1xyXG4gICAgZm9udC1mYW1pbHk6IG1vbm9zcGFjZTtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcblxyXG4uZGl2MSB7XHJcbiAgICBmb250LWZhbWlseTogbW9ub3NwYWNlO1xyXG4gICAgY29sb3I6IHdoaXRlIDtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgXHJcbn1cclxuXHJcbi5jb250YWluZXIge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyMzgsIDgsIDgsIDAuNzA1KTtcclxuICAgIGJvcmRlcjogMnB4IHNvbGlkIGJsYWNrO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICAgIG1hcmdpbi10b3A6IDIwcHg7XHJcbiAgICBwYWRkaW5nLWJvdHRvbTogMTBweDtcclxuICAgIHBhZGRpbmctdG9wOiAxMHB4O1xyXG59XHJcblxyXG4uYWxlcnR7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoNjYsIDQsIDQpO1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gICAgZm9udC1zaXplOiAxMnB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbn1cclxuXHJcbmgzIHtcclxuICAgIGZvbnQtZmFtaWx5OiBtb25vc3BhY2U7XHJcbiAgICBjb2xvcjogIHJnYigyMDIsIDEsIDEpO1xyXG4gICAgcGFkZGluZy10b3A6IDIwcHg7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDUwcHg7XHJcbiAgICBwYWRkaW5nLWJvdHRvbTogMTBweDtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcblxyXG4uYWRkLXRvLWNhcnQge1xyXG4gICAgZmxvYXQ6IHJpZ2h0O1xyXG4gICAgdG9wOjIwcHg7XHJcbiAgICByaWdodDoyMHB4O1xyXG4gICAgbWFyZ2luLXJpZ2h0OiA3MHB4O1xyXG4gICAgZm9udC1mYW1pbHk6IG1vbm9zcGFjZTtcclxuXHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/add-blog/add-blog.component.ts":
/*!************************************************!*\
  !*** ./src/app/add-blog/add-blog.component.ts ***!
  \************************************************/
/*! exports provided: AddBlogComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddBlogComponent", function() { return AddBlogComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var src_app_bloglist__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/bloglist */ "./src/app/bloglist.ts");
/* harmony import */ var src_app_postblog_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/postblog.service */ "./src/app/postblog.service.ts");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! sweetalert2 */ "./node_modules/sweetalert2/dist/sweetalert2.all.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_5__);







let AddBlogComponent = class AddBlogComponent {
    constructor(route, router, postblogService) {
        this.route = route;
        this.router = router;
        this.postblogService = postblogService;
        this.bloglist = src_app_bloglist__WEBPACK_IMPORTED_MODULE_3__["bloglist"];
    }
    ngOnInit() {
        this.route.paramMap.subscribe(params => {
            this.blog = this.bloglist[+params.get('blogId')];
        });
    }
    addNewBlog(blog) {
        this.postblogService.dodajUBlogKorpu(blog);
        this.router.navigate(['/blog']);
        sweetalert2__WEBPACK_IMPORTED_MODULE_5___default.a.fire({
            position: 'top-end',
            type: 'success',
            title: 'Uspesno ste dodali blog!',
            showConfirmButton: false,
            timer: 2000
        });
    }
};
AddBlogComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: src_app_postblog_service__WEBPACK_IMPORTED_MODULE_4__["PostblogService"] }
];
AddBlogComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-add-blog',
        template: __webpack_require__(/*! raw-loader!./add-blog.component.html */ "./node_modules/raw-loader/index.js!./src/app/add-blog/add-blog.component.html"),
        styles: [__webpack_require__(/*! ./add-blog.component.css */ "./src/app/add-blog/add-blog.component.css")]
    })
], AddBlogComponent);



/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule, routingComponents */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "routingComponents", function() { return routingComponents; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var angularfire2__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! angularfire2 */ "./node_modules/angularfire2/index.js");
/* harmony import */ var angularfire2__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(angularfire2__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var angularfire2_database__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! angularfire2/database */ "./node_modules/angularfire2/database/index.js");
/* harmony import */ var angularfire2_database__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(angularfire2_database__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var angularfire2_auth__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! angularfire2/auth */ "./node_modules/angularfire2/auth/index.js");
/* harmony import */ var angularfire2_auth__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(angularfire2_auth__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var ng2_validation__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ng2-validation */ "./node_modules/ng2-validation/dist/index.js");
/* harmony import */ var ng2_validation__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(ng2_validation__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _tefalshop_pocetna_tefalshop_pocetna_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./tefalshop-pocetna/tefalshop-pocetna.component */ "./src/app/tefalshop-pocetna/tefalshop-pocetna.component.ts");
/* harmony import */ var _gallery_page_gallery_page_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./gallery-page/gallery-page.component */ "./src/app/gallery-page/gallery-page.component.ts");
/* harmony import */ var _about_page_about_page_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./about-page/about-page.component */ "./src/app/about-page/about-page.component.ts");
/* harmony import */ var _shop_shop_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./shop/shop.component */ "./src/app/shop/shop.component.ts");
/* harmony import */ var _korpa_korpa_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./korpa/korpa.component */ "./src/app/korpa/korpa.component.ts");
/* harmony import */ var _opis_proizvoda_opis_proizvoda_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./opis-proizvoda/opis-proizvoda.component */ "./src/app/opis-proizvoda/opis-proizvoda.component.ts");
/* harmony import */ var _blog_blog_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./blog/blog.component */ "./src/app/blog/blog.component.ts");
/* harmony import */ var _add_blog_add_blog_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./add-blog/add-blog.component */ "./src/app/add-blog/add-blog.component.ts");
/* harmony import */ var _edit_blog_edit_blog_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./edit-blog/edit-blog.component */ "./src/app/edit-blog/edit-blog.component.ts");
/* harmony import */ var _signin_signin_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./signin/signin.component */ "./src/app/signin/signin.component.ts");
/* harmony import */ var _signup_signup_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./signup/signup.component */ "./src/app/signup/signup.component.ts");




















const routes = [
    { path: '', component: _tefalshop_pocetna_tefalshop_pocetna_component__WEBPACK_IMPORTED_MODULE_9__["TefalshopPocetnaComponent"] },
    { path: 'home', component: _home_home_component__WEBPACK_IMPORTED_MODULE_3__["HomeComponent"] },
    { path: 'gallery', component: _gallery_page_gallery_page_component__WEBPACK_IMPORTED_MODULE_10__["GalleryPageComponent"] },
    { path: 'about', component: _about_page_about_page_component__WEBPACK_IMPORTED_MODULE_11__["AboutPageComponent"] },
    { path: 'shop', component: _shop_shop_component__WEBPACK_IMPORTED_MODULE_12__["ShopComponent"] },
    { path: 'korpa', component: _korpa_korpa_component__WEBPACK_IMPORTED_MODULE_13__["KorpaComponent"] },
    { path: 'opis/:proizvodId', component: _opis_proizvoda_opis_proizvoda_component__WEBPACK_IMPORTED_MODULE_14__["OpisProizvodaComponent"] },
    { path: 'addblog', component: _add_blog_add_blog_component__WEBPACK_IMPORTED_MODULE_16__["AddBlogComponent"] },
    { path: 'blog/:blogId', component: _edit_blog_edit_blog_component__WEBPACK_IMPORTED_MODULE_17__["EditBlogComponent"] },
    { path: 'blog', component: _blog_blog_component__WEBPACK_IMPORTED_MODULE_15__["BlogComponent"] },
    { path: 'signup', component: _signup_signup_component__WEBPACK_IMPORTED_MODULE_19__["SignupComponent"] },
    { path: 'signin', component: _signin_signin_component__WEBPACK_IMPORTED_MODULE_18__["SigninComponent"] },
    { path: 'signout', component: _signin_signin_component__WEBPACK_IMPORTED_MODULE_18__["SigninComponent"] }
];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes),
            angularfire2__WEBPACK_IMPORTED_MODULE_4__["AngularFireModule"].initializeApp(src_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].firebase),
            angularfire2_database__WEBPACK_IMPORTED_MODULE_6__["AngularFireDatabaseModule"],
            angularfire2_auth__WEBPACK_IMPORTED_MODULE_7__["AngularFireAuthModule"],
            ng2_validation__WEBPACK_IMPORTED_MODULE_8__["CustomFormsModule"],
        ],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], AppRoutingModule);

const routingComponents = [
    _home_home_component__WEBPACK_IMPORTED_MODULE_3__["HomeComponent"],
    _tefalshop_pocetna_tefalshop_pocetna_component__WEBPACK_IMPORTED_MODULE_9__["TefalshopPocetnaComponent"],
    _gallery_page_gallery_page_component__WEBPACK_IMPORTED_MODULE_10__["GalleryPageComponent"],
    _about_page_about_page_component__WEBPACK_IMPORTED_MODULE_11__["AboutPageComponent"],
    _shop_shop_component__WEBPACK_IMPORTED_MODULE_12__["ShopComponent"],
    _korpa_korpa_component__WEBPACK_IMPORTED_MODULE_13__["KorpaComponent"],
    _opis_proizvoda_opis_proizvoda_component__WEBPACK_IMPORTED_MODULE_14__["OpisProizvodaComponent"],
    _add_blog_add_blog_component__WEBPACK_IMPORTED_MODULE_16__["AddBlogComponent"],
    _edit_blog_edit_blog_component__WEBPACK_IMPORTED_MODULE_17__["EditBlogComponent"],
    _signin_signin_component__WEBPACK_IMPORTED_MODULE_18__["SigninComponent"],
    _signup_signup_component__WEBPACK_IMPORTED_MODULE_19__["SignupComponent"],
];


/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var firebase__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! firebase */ "./node_modules/firebase/dist/index.cjs.js");
/* harmony import */ var firebase__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(firebase__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _autentifikacija_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./autentifikacija.service */ "./src/app/autentifikacija.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");





let AppComponent = class AppComponent {
    constructor(autentifikacijaService, router) {
        this.autentifikacijaService = autentifikacijaService;
        this.router = router;
        this.title = 'TefalShop';
    }
    ngOnInit() {
        firebase__WEBPACK_IMPORTED_MODULE_2__["initializeApp"]({
            apiKey: "AIzaSyCGhXSQwGqYaQb2fuicX3VhSAUpAdE6RU4",
            authDomain: "tefal-shop.firebaseapp.com",
        });
    }
    odjaviSe() {
        this.autentifikacijaService.odjaviSe();
        this.router.navigate(['/signin']);
    }
};
AppComponent.ctorParameters = () => [
    { type: _autentifikacija_service__WEBPACK_IMPORTED_MODULE_3__["AutentifikacijaService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] }
];
AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-root',
        template: __webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/index.js!./src/app/app.component.html"),
        styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
    })
], AppComponent);



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var angular2_text_mask__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! angular2-text-mask */ "./node_modules/angular2-text-mask/dist/angular2TextMask.js");
/* harmony import */ var angular2_text_mask__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(angular2_text_mask__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _sweetalert2_ngx_sweetalert2__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @sweetalert2/ngx-sweetalert2 */ "./node_modules/@sweetalert2/ngx-sweetalert2/fesm2015/sweetalert2-ngx-sweetalert2.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var angularfire2_database__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! angularfire2/database */ "./node_modules/angularfire2/database/index.js");
/* harmony import */ var angularfire2_database__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(angularfire2_database__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var angularfire2_auth__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! angularfire2/auth */ "./node_modules/angularfire2/auth/index.js");
/* harmony import */ var angularfire2_auth__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(angularfire2_auth__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var ng2_validation__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ng2-validation */ "./node_modules/ng2-validation/dist/index.js");
/* harmony import */ var ng2_validation__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(ng2_validation__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./navbar/navbar.component */ "./src/app/navbar/navbar.component.ts");
/* harmony import */ var _tefalshop_pocetna_tefalshop_pocetna_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./tefalshop-pocetna/tefalshop-pocetna.component */ "./src/app/tefalshop-pocetna/tefalshop-pocetna.component.ts");
/* harmony import */ var _jumbotron_jumbotron_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./jumbotron/jumbotron.component */ "./src/app/jumbotron/jumbotron.component.ts");
/* harmony import */ var _videofile_videofile_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./videofile/videofile.component */ "./src/app/videofile/videofile.component.ts");
/* harmony import */ var _photo_gallery_photo_gallery_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./photo-gallery/photo-gallery.component */ "./src/app/photo-gallery/photo-gallery.component.ts");
/* harmony import */ var _about_about_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./about/about.component */ "./src/app/about/about.component.ts");
/* harmony import */ var _contact_contact_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./contact/contact.component */ "./src/app/contact/contact.component.ts");
/* harmony import */ var _forma_forma_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./forma/forma.component */ "./src/app/forma/forma.component.ts");
/* harmony import */ var _geolocation_geolocation_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./geolocation/geolocation.component */ "./src/app/geolocation/geolocation.component.ts");
/* harmony import */ var _agm_core__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @agm/core */ "./node_modules/@agm/core/index.js");
/* harmony import */ var _gallery_page_gallery_page_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./gallery-page/gallery-page.component */ "./src/app/gallery-page/gallery-page.component.ts");
/* harmony import */ var _about_page_about_page_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./about-page/about-page.component */ "./src/app/about-page/about-page.component.ts");
/* harmony import */ var _shop_shop_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./shop/shop.component */ "./src/app/shop/shop.component.ts");
/* harmony import */ var _opis_proizvoda_opis_proizvoda_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./opis-proizvoda/opis-proizvoda.component */ "./src/app/opis-proizvoda/opis-proizvoda.component.ts");
/* harmony import */ var _korpa_korpa_component__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./korpa/korpa.component */ "./src/app/korpa/korpa.component.ts");
/* harmony import */ var _blog_blog_component__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./blog/blog.component */ "./src/app/blog/blog.component.ts");
/* harmony import */ var _add_blog_add_blog_component__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./add-blog/add-blog.component */ "./src/app/add-blog/add-blog.component.ts");
/* harmony import */ var _edit_blog_edit_blog_component__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ./edit-blog/edit-blog.component */ "./src/app/edit-blog/edit-blog.component.ts");
/* harmony import */ var _shopping_service__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ./shopping.service */ "./src/app/shopping.service.ts");
/* harmony import */ var _postblog_service__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! ./postblog.service */ "./src/app/postblog.service.ts");
/* harmony import */ var _carousel_carousel_component__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! ./carousel/carousel.component */ "./src/app/carousel/carousel.component.ts");
/* harmony import */ var _serveri_service__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! ./serveri.service */ "./src/app/serveri.service.ts");
/* harmony import */ var _zastita_service__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! ./zastita.service */ "./src/app/zastita.service.ts");
/* harmony import */ var _autentifikacija_service__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! ./autentifikacija.service */ "./src/app/autentifikacija.service.ts");
/* harmony import */ var _signin_signin_component__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! ./signin/signin.component */ "./src/app/signin/signin.component.ts");
/* harmony import */ var _signup_signup_component__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(/*! ./signup/signup.component */ "./src/app/signup/signup.component.ts");








































let AppModule = class AppModule {
};
AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        declarations: [
            _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["routingComponents"],
            _home_home_component__WEBPACK_IMPORTED_MODULE_5__["HomeComponent"],
            _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_14__["NavbarComponent"],
            _tefalshop_pocetna_tefalshop_pocetna_component__WEBPACK_IMPORTED_MODULE_15__["TefalshopPocetnaComponent"],
            _jumbotron_jumbotron_component__WEBPACK_IMPORTED_MODULE_16__["JumbotronComponent"],
            _videofile_videofile_component__WEBPACK_IMPORTED_MODULE_17__["VideofileComponent"],
            _photo_gallery_photo_gallery_component__WEBPACK_IMPORTED_MODULE_18__["PhotoGalleryComponent"],
            _about_about_component__WEBPACK_IMPORTED_MODULE_19__["AboutComponent"],
            _contact_contact_component__WEBPACK_IMPORTED_MODULE_20__["ContactComponent"],
            _forma_forma_component__WEBPACK_IMPORTED_MODULE_21__["FormaComponent"],
            _geolocation_geolocation_component__WEBPACK_IMPORTED_MODULE_22__["GeolocationComponent"],
            _gallery_page_gallery_page_component__WEBPACK_IMPORTED_MODULE_24__["GalleryPageComponent"],
            _about_page_about_page_component__WEBPACK_IMPORTED_MODULE_25__["AboutPageComponent"],
            _shop_shop_component__WEBPACK_IMPORTED_MODULE_26__["ShopComponent"],
            _opis_proizvoda_opis_proizvoda_component__WEBPACK_IMPORTED_MODULE_27__["OpisProizvodaComponent"],
            _korpa_korpa_component__WEBPACK_IMPORTED_MODULE_28__["KorpaComponent"],
            _blog_blog_component__WEBPACK_IMPORTED_MODULE_29__["BlogComponent"],
            _add_blog_add_blog_component__WEBPACK_IMPORTED_MODULE_30__["AddBlogComponent"],
            _edit_blog_edit_blog_component__WEBPACK_IMPORTED_MODULE_31__["EditBlogComponent"],
            _carousel_carousel_component__WEBPACK_IMPORTED_MODULE_34__["CarouselComponent"],
            _signin_signin_component__WEBPACK_IMPORTED_MODULE_38__["SigninComponent"],
            _signup_signup_component__WEBPACK_IMPORTED_MODULE_39__["SignupComponent"],
        ],
        imports: [
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormsModule"],
            angular2_text_mask__WEBPACK_IMPORTED_MODULE_7__["TextMaskModule"],
            _sweetalert2_ngx_sweetalert2__WEBPACK_IMPORTED_MODULE_8__["SweetAlert2Module"].forRoot({
                buttonsStyling: false,
                customClass: 'modal-content',
                confirmButtonClass: 'btn btn-primary',
                cancelButtonClass: 'btn'
            }),
            _angular_common_http__WEBPACK_IMPORTED_MODULE_9__["HttpClientModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_10__["RouterModule"],
            angularfire2_database__WEBPACK_IMPORTED_MODULE_11__["AngularFireDatabaseModule"],
            angularfire2_auth__WEBPACK_IMPORTED_MODULE_12__["AngularFireAuthModule"],
            ng2_validation__WEBPACK_IMPORTED_MODULE_13__["CustomFormsModule"],
            _agm_core__WEBPACK_IMPORTED_MODULE_23__["AgmCoreModule"].forRoot({
                apiKey: 'AIzaSyCx29Nk9yJjk6Cw_5W-Lda4Ib4nHk9DMe4'
            }),
        ],
        providers: [
            _shopping_service__WEBPACK_IMPORTED_MODULE_32__["ShoppingService"],
            _postblog_service__WEBPACK_IMPORTED_MODULE_33__["PostblogService"],
            _serveri_service__WEBPACK_IMPORTED_MODULE_35__["ServeriService"],
            _zastita_service__WEBPACK_IMPORTED_MODULE_36__["ZastitaService"],
            _autentifikacija_service__WEBPACK_IMPORTED_MODULE_37__["AutentifikacijaService"],
        ],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
    })
], AppModule);



/***/ }),

/***/ "./src/app/autentifikacija.service.ts":
/*!********************************************!*\
  !*** ./src/app/autentifikacija.service.ts ***!
  \********************************************/
/*! exports provided: AutentifikacijaService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AutentifikacijaService", function() { return AutentifikacijaService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var firebase__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! firebase */ "./node_modules/firebase/dist/index.cjs.js");
/* harmony import */ var firebase__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(firebase__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");




let AutentifikacijaService = class AutentifikacijaService {
    constructor(router) {
        this.router = router;
    }
    prijaviKorisnika(email, sifra) {
        firebase__WEBPACK_IMPORTED_MODULE_1__["auth"]().createUserWithEmailAndPassword(email, sifra)
            .then((response) => {
            this.router.navigate(['/']);
            firebase__WEBPACK_IMPORTED_MODULE_1__["auth"]().currentUser.getIdToken()
                .then((token) => this.token = token);
        })
            .catch((error) => console.log(error));
    }
    vratiToken() {
        firebase__WEBPACK_IMPORTED_MODULE_1__["auth"]().currentUser.getIdToken()
            .then((token) => this.token = token);
        return this.token;
    }
    registrujKorisnika(email, sifra) {
        firebase__WEBPACK_IMPORTED_MODULE_1__["auth"]().createUserWithEmailAndPassword(email, sifra)
            .catch((error) => console.log(error));
    }
    prijavljen() {
        return this.token != null;
    }
    odjaviSe() {
        firebase__WEBPACK_IMPORTED_MODULE_1__["auth"]().signOut();
        this.token = null;
    }
};
AutentifikacijaService.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
];
AutentifikacijaService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Injectable"])({
        providedIn: 'root'
    })
], AutentifikacijaService);



/***/ }),

/***/ "./src/app/blog/blog.component.css":
/*!*****************************************!*\
  !*** ./src/app/blog/blog.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "h2{\r\n    padding-top: 20px;\r\n    padding-bottom: 20px;\r\n    font-family: monospace;\r\n    font-weight: bold;\r\n    color: rgb(202, 1, 1);\r\n    text-align: center;\r\n}\r\n\r\n img  {\r\n    height: 300px;\r\n    width: 350px;\r\n    margin: 20px;\r\n    border-radius: 50%;\r\n}\r\n\r\n #cart {\r\n    background-color: rgba(238, 8, 8, 0.705);\r\n    border: 2px solid black;\r\n    border-radius: 15%;\r\n    margin-left: 20px;\r\n    margin-right: 20px;\r\n    margin-bottom: 20px;\r\n}\r\n\r\n h5 {\r\n    font-family: monospace;\r\n    color: white;\r\n    padding-top: 20px;\r\n    padding-bottom: 10px;\r\n    font-weight: bold;\r\n    text-align: left;\r\n    font-size: 30px;\r\n    text-shadow: 1px 1px black;\r\n    text-decoration: underline;\r\n    text-align: center;\r\n}\r\n\r\n p {\r\n    font-family: monospace;\r\n    color: white;\r\n    text-shadow: 1px 1px black;\r\n    font-weight: bold;\r\n    text-align: center;\r\n}\r\n\r\n #datep {\r\n    font-family: monospace;\r\n    color: white;\r\n    text-shadow: 1px 1px black;\r\n    font-weight: bold;\r\n    text-align: center;\r\n    font-size: 20px;\r\n\r\n}\r\n\r\n #editbtn {\r\n    text-align: right;\r\n  \r\n}\r\n\r\n .add-to-cart {\r\n    color: white; \r\n    font-family: monospace;\r\n    font-weight: bold; \r\n    margin-right: 10px;\r\n    text-align: right;\r\n    padding-left: 20px;\r\n    padding-right: 20px;\r\n}\r\n\r\n h3 {\r\n    font-family: monospace;\r\n    color:  rgb(202, 1, 1);\r\n    padding-top: 20px;\r\n    padding-left: 50px;\r\n    padding-bottom: 10px;\r\n    font-weight: bold;\r\n    text-align: center;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYmxvZy9ibG9nLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxpQkFBaUI7SUFDakIsb0JBQW9CO0lBQ3BCLHNCQUFzQjtJQUN0QixpQkFBaUI7SUFDakIscUJBQXFCO0lBQ3JCLGtCQUFrQjtBQUN0Qjs7Q0FFQztJQUNHLGFBQWE7SUFDYixZQUFZO0lBQ1osWUFBWTtJQUNaLGtCQUFrQjtBQUN0Qjs7Q0FFQTtJQUNJLHdDQUF3QztJQUN4Qyx1QkFBdUI7SUFDdkIsa0JBQWtCO0lBQ2xCLGlCQUFpQjtJQUNqQixrQkFBa0I7SUFDbEIsbUJBQW1CO0FBQ3ZCOztDQUVBO0lBQ0ksc0JBQXNCO0lBQ3RCLFlBQVk7SUFDWixpQkFBaUI7SUFDakIsb0JBQW9CO0lBQ3BCLGlCQUFpQjtJQUNqQixnQkFBZ0I7SUFDaEIsZUFBZTtJQUNmLDBCQUEwQjtJQUMxQiwwQkFBMEI7SUFDMUIsa0JBQWtCO0FBQ3RCOztDQUVBO0lBQ0ksc0JBQXNCO0lBQ3RCLFlBQVk7SUFDWiwwQkFBMEI7SUFDMUIsaUJBQWlCO0lBQ2pCLGtCQUFrQjtBQUN0Qjs7Q0FFQTtJQUNJLHNCQUFzQjtJQUN0QixZQUFZO0lBQ1osMEJBQTBCO0lBQzFCLGlCQUFpQjtJQUNqQixrQkFBa0I7SUFDbEIsZUFBZTs7QUFFbkI7O0NBRUE7SUFDSSxpQkFBaUI7O0FBRXJCOztDQUNBO0lBQ0ksWUFBWTtJQUNaLHNCQUFzQjtJQUN0QixpQkFBaUI7SUFDakIsa0JBQWtCO0lBQ2xCLGlCQUFpQjtJQUNqQixrQkFBa0I7SUFDbEIsbUJBQW1CO0FBQ3ZCOztDQUVBO0lBQ0ksc0JBQXNCO0lBQ3RCLHNCQUFzQjtJQUN0QixpQkFBaUI7SUFDakIsa0JBQWtCO0lBQ2xCLG9CQUFvQjtJQUNwQixpQkFBaUI7SUFDakIsa0JBQWtCO0FBQ3RCIiwiZmlsZSI6InNyYy9hcHAvYmxvZy9ibG9nLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJoMntcclxuICAgIHBhZGRpbmctdG9wOiAyMHB4O1xyXG4gICAgcGFkZGluZy1ib3R0b206IDIwcHg7XHJcbiAgICBmb250LWZhbWlseTogbW9ub3NwYWNlO1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICBjb2xvcjogcmdiKDIwMiwgMSwgMSk7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuXHJcbiBpbWcgIHtcclxuICAgIGhlaWdodDogMzAwcHg7XHJcbiAgICB3aWR0aDogMzUwcHg7XHJcbiAgICBtYXJnaW46IDIwcHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbn1cclxuXHJcbiNjYXJ0IHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjM4LCA4LCA4LCAwLjcwNSk7XHJcbiAgICBib3JkZXI6IDJweCBzb2xpZCBibGFjaztcclxuICAgIGJvcmRlci1yYWRpdXM6IDE1JTtcclxuICAgIG1hcmdpbi1sZWZ0OiAyMHB4O1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAyMHB4O1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMjBweDtcclxufVxyXG5cclxuaDUge1xyXG4gICAgZm9udC1mYW1pbHk6IG1vbm9zcGFjZTtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIHBhZGRpbmctdG9wOiAyMHB4O1xyXG4gICAgcGFkZGluZy1ib3R0b206IDEwcHg7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgIHRleHQtYWxpZ246IGxlZnQ7XHJcbiAgICBmb250LXNpemU6IDMwcHg7XHJcbiAgICB0ZXh0LXNoYWRvdzogMXB4IDFweCBibGFjaztcclxuICAgIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcblxyXG5wIHtcclxuICAgIGZvbnQtZmFtaWx5OiBtb25vc3BhY2U7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICB0ZXh0LXNoYWRvdzogMXB4IDFweCBibGFjaztcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcblxyXG4jZGF0ZXAge1xyXG4gICAgZm9udC1mYW1pbHk6IG1vbm9zcGFjZTtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIHRleHQtc2hhZG93OiAxcHggMXB4IGJsYWNrO1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBmb250LXNpemU6IDIwcHg7XHJcblxyXG59XHJcblxyXG4jZWRpdGJ0biB7XHJcbiAgICB0ZXh0LWFsaWduOiByaWdodDtcclxuICBcclxufVxyXG4uYWRkLXRvLWNhcnQge1xyXG4gICAgY29sb3I6IHdoaXRlOyBcclxuICAgIGZvbnQtZmFtaWx5OiBtb25vc3BhY2U7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDsgXHJcbiAgICBtYXJnaW4tcmlnaHQ6IDEwcHg7XHJcbiAgICB0ZXh0LWFsaWduOiByaWdodDtcclxuICAgIHBhZGRpbmctbGVmdDogMjBweDtcclxuICAgIHBhZGRpbmctcmlnaHQ6IDIwcHg7XHJcbn1cclxuXHJcbmgzIHtcclxuICAgIGZvbnQtZmFtaWx5OiBtb25vc3BhY2U7XHJcbiAgICBjb2xvcjogIHJnYigyMDIsIDEsIDEpO1xyXG4gICAgcGFkZGluZy10b3A6IDIwcHg7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDUwcHg7XHJcbiAgICBwYWRkaW5nLWJvdHRvbTogMTBweDtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59Il19 */"

/***/ }),

/***/ "./src/app/blog/blog.component.ts":
/*!****************************************!*\
  !*** ./src/app/blog/blog.component.ts ***!
  \****************************************/
/*! exports provided: BlogComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BlogComponent", function() { return BlogComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_app_bloglist__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/bloglist */ "./src/app/bloglist.ts");
/* harmony import */ var src_app_postblog_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/postblog.service */ "./src/app/postblog.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _autentifikacija_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../autentifikacija.service */ "./src/app/autentifikacija.service.ts");






let BlogComponent = class BlogComponent {
    constructor(postblogService, autentifikacijaService, router) {
        this.postblogService = postblogService;
        this.autentifikacijaService = autentifikacijaService;
        this.router = router;
        this.bloglist = src_app_bloglist__WEBPACK_IMPORTED_MODULE_2__["bloglist"];
    }
    ngOnInit() {
    }
};
BlogComponent.ctorParameters = () => [
    { type: src_app_postblog_service__WEBPACK_IMPORTED_MODULE_3__["PostblogService"] },
    { type: _autentifikacija_service__WEBPACK_IMPORTED_MODULE_5__["AutentifikacijaService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] }
];
BlogComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-blog',
        template: __webpack_require__(/*! raw-loader!./blog.component.html */ "./node_modules/raw-loader/index.js!./src/app/blog/blog.component.html"),
        styles: [__webpack_require__(/*! ./blog.component.css */ "./src/app/blog/blog.component.css")]
    })
], BlogComponent);



/***/ }),

/***/ "./src/app/bloglist.ts":
/*!*****************************!*\
  !*** ./src/app/bloglist.ts ***!
  \*****************************/
/*! exports provided: bloglist */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "bloglist", function() { return bloglist; });
const bloglist = [
    {
        'title': 'TOP QUALITY MEDAL 2018/2019!',
        'description': 'Tefal Shop je dobitnik zlatne plakete za 2018/2019 godinu. Potvrdili potrosaci, jos jednom smo pokazali da su nasi proizvodi vrhunskog kvaliteta. Nadamo se zlatnoj medalji i naredne godine.',
        'url': 'assets/img/medalja.jpg',
        'date': '14.01.2019.'
    },
    {
        'title': 'MOGUCNOST POPRAVKE I DO 10 GODINA!',
        'description': 'Tefal Shop nudi garanciju cak do 10 godina na neke proizvode. Bez obzira sto su u pitanju proizvodi vrhunskog kvaliteta, Tefal Shop izlazi u susret svojim potrosacima i nudi mogucnost popravke, ili zamene cak i do 10 godina.',
        'url': 'assets/img/medalja2.jpg',
        'date': '03.06.2019.'
    },
];


/***/ }),

/***/ "./src/app/carousel/carousel.component.css":
/*!*************************************************!*\
  !*** ./src/app/carousel/carousel.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".card{\r\n    text-align: center;\r\n    border: 2px solid rgba(238, 8, 8, 0.705);\r\n    background-color: white;\r\n}\r\n\r\n.btn {\r\n    border-radius: 5%;\r\n    text-align: center;\r\n    margin-right: 10px;\r\n    font-weight: bold;\r\n    font-family: monospace;\r\n    color: white;\r\n    font-size: 15px;\r\n    \r\n\r\n}\r\n\r\n.card-title{\r\n    font-weight: bold;\r\n    font-family: monospace;\r\n    font-size: 15px;\r\n    color: rgba(238, 8, 8, 0.705);\r\n    font-weight: bold;\r\n    padding-bottom: 10px;\r\n}\r\n\r\n.card-img-top {\r\n    height: 300px;\r\n    width: 290x;\r\n}\r\n\r\n#car-indicators {\r\n    border: 1px solid rgba(238, 8, 8, 0.705);\r\n    margin-top: 50px;\r\n}\r\n\r\n.carousel-indicators li {\r\n    display: inline-block;\r\n    width: 20px;\r\n    height: 20px;\r\n    margin: 10px;\r\n    text-indent: 0;\r\n    cursor: pointer;\r\n    border: none;\r\n    border-radius: 50%;\r\n    background-color: #db7b7b;\r\n    box-shadow: inset 1px 1px 1px 1px rgba(0,0,0,0.5); \r\n    border: 1px solid black;   \r\n}\r\n\r\n.carousel-indicators .active {\r\n    width: 20px;\r\n    height: 20px;\r\n    margin: 10px;\r\n    background-color: rgba(238, 8, 8, 0.705);\r\n}\r\n\r\n.divcar .carousel-control-prev,  .carousel-control-next  {\r\n    font-size: 60px;\r\n    border-radius: 10px;\r\n    color:white ;\r\n    height: 470px;\r\n    width: 80px;\r\n    box-shadow: inset 1px 10px 10px 50px rgba(0,0,0,0.5);\r\n\r\n}\r\n\r\n#bigdiv {\r\n    border: 1px solid black;\r\n    border-radius: 10px;\r\n    background-color: rgba(238, 8, 8, 0.705);\r\n    margin-bottom: 100px;\r\n    margin-top: 5px;\r\n}\r\n\r\n#sale  {\r\n    width: 100px;\r\n    height: 100px;\r\n    margin-left: 80px;\r\n    margin-right: 150px;\r\n}\r\n\r\n#sale2  {\r\n    width: 500px;\r\n    height: auto;\r\n    \r\n   \r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY2Fyb3VzZWwvY2Fyb3VzZWwuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGtCQUFrQjtJQUNsQix3Q0FBd0M7SUFDeEMsdUJBQXVCO0FBQzNCOztBQUVBO0lBQ0ksaUJBQWlCO0lBQ2pCLGtCQUFrQjtJQUNsQixrQkFBa0I7SUFDbEIsaUJBQWlCO0lBQ2pCLHNCQUFzQjtJQUN0QixZQUFZO0lBQ1osZUFBZTs7O0FBR25COztBQUVBO0lBQ0ksaUJBQWlCO0lBQ2pCLHNCQUFzQjtJQUN0QixlQUFlO0lBQ2YsNkJBQTZCO0lBQzdCLGlCQUFpQjtJQUNqQixvQkFBb0I7QUFDeEI7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsV0FBVztBQUNmOztBQUVBO0lBQ0ksd0NBQXdDO0lBQ3hDLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLHFCQUFxQjtJQUNyQixXQUFXO0lBQ1gsWUFBWTtJQUNaLFlBQVk7SUFDWixjQUFjO0lBQ2QsZUFBZTtJQUNmLFlBQVk7SUFDWixrQkFBa0I7SUFDbEIseUJBQXlCO0lBQ3pCLGlEQUFpRDtJQUNqRCx1QkFBdUI7QUFDM0I7O0FBQ0E7SUFDSSxXQUFXO0lBQ1gsWUFBWTtJQUNaLFlBQVk7SUFDWix3Q0FBd0M7QUFDNUM7O0FBRUE7SUFDSSxlQUFlO0lBQ2YsbUJBQW1CO0lBQ25CLFlBQVk7SUFDWixhQUFhO0lBQ2IsV0FBVztJQUNYLG9EQUFvRDs7QUFFeEQ7O0FBS0E7SUFDSSx1QkFBdUI7SUFDdkIsbUJBQW1CO0lBQ25CLHdDQUF3QztJQUN4QyxvQkFBb0I7SUFDcEIsZUFBZTtBQUNuQjs7QUFHQTtJQUNJLFlBQVk7SUFDWixhQUFhO0lBQ2IsaUJBQWlCO0lBQ2pCLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLFlBQVk7SUFDWixZQUFZOzs7QUFHaEIiLCJmaWxlIjoic3JjL2FwcC9jYXJvdXNlbC9jYXJvdXNlbC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNhcmR7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBib3JkZXI6IDJweCBzb2xpZCByZ2JhKDIzOCwgOCwgOCwgMC43MDUpO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbn1cclxuXHJcbi5idG4ge1xyXG4gICAgYm9yZGVyLXJhZGl1czogNSU7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDEwcHg7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgIGZvbnQtZmFtaWx5OiBtb25vc3BhY2U7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICBmb250LXNpemU6IDE1cHg7XHJcbiAgICBcclxuXHJcbn1cclxuXHJcbi5jYXJkLXRpdGxle1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICBmb250LWZhbWlseTogbW9ub3NwYWNlO1xyXG4gICAgZm9udC1zaXplOiAxNXB4O1xyXG4gICAgY29sb3I6IHJnYmEoMjM4LCA4LCA4LCAwLjcwNSk7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgIHBhZGRpbmctYm90dG9tOiAxMHB4O1xyXG59XHJcblxyXG4uY2FyZC1pbWctdG9wIHtcclxuICAgIGhlaWdodDogMzAwcHg7XHJcbiAgICB3aWR0aDogMjkweDtcclxufVxyXG5cclxuI2Nhci1pbmRpY2F0b3JzIHtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoMjM4LCA4LCA4LCAwLjcwNSk7XHJcbiAgICBtYXJnaW4tdG9wOiA1MHB4O1xyXG59XHJcblxyXG4uY2Fyb3VzZWwtaW5kaWNhdG9ycyBsaSB7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICB3aWR0aDogMjBweDtcclxuICAgIGhlaWdodDogMjBweDtcclxuICAgIG1hcmdpbjogMTBweDtcclxuICAgIHRleHQtaW5kZW50OiAwO1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgYm9yZGVyOiBub25lO1xyXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2RiN2I3YjtcclxuICAgIGJveC1zaGFkb3c6IGluc2V0IDFweCAxcHggMXB4IDFweCByZ2JhKDAsMCwwLDAuNSk7IFxyXG4gICAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7ICAgXHJcbn1cclxuLmNhcm91c2VsLWluZGljYXRvcnMgLmFjdGl2ZSB7XHJcbiAgICB3aWR0aDogMjBweDtcclxuICAgIGhlaWdodDogMjBweDtcclxuICAgIG1hcmdpbjogMTBweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjM4LCA4LCA4LCAwLjcwNSk7XHJcbn1cclxuXHJcbi5kaXZjYXIgLmNhcm91c2VsLWNvbnRyb2wtcHJldiwgIC5jYXJvdXNlbC1jb250cm9sLW5leHQgIHtcclxuICAgIGZvbnQtc2l6ZTogNjBweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgICBjb2xvcjp3aGl0ZSA7XHJcbiAgICBoZWlnaHQ6IDQ3MHB4O1xyXG4gICAgd2lkdGg6IDgwcHg7XHJcbiAgICBib3gtc2hhZG93OiBpbnNldCAxcHggMTBweCAxMHB4IDUwcHggcmdiYSgwLDAsMCwwLjUpO1xyXG5cclxufVxyXG5cclxuXHJcblxyXG5cclxuI2JpZ2RpdiB7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcclxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDIzOCwgOCwgOCwgMC43MDUpO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMTAwcHg7XHJcbiAgICBtYXJnaW4tdG9wOiA1cHg7XHJcbn1cclxuXHJcblxyXG4jc2FsZSAge1xyXG4gICAgd2lkdGg6IDEwMHB4O1xyXG4gICAgaGVpZ2h0OiAxMDBweDtcclxuICAgIG1hcmdpbi1sZWZ0OiA4MHB4O1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAxNTBweDtcclxufVxyXG5cclxuI3NhbGUyICB7XHJcbiAgICB3aWR0aDogNTAwcHg7XHJcbiAgICBoZWlnaHQ6IGF1dG87XHJcbiAgICBcclxuICAgXHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/carousel/carousel.component.ts":
/*!************************************************!*\
  !*** ./src/app/carousel/carousel.component.ts ***!
  \************************************************/
/*! exports provided: CarouselComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CarouselComponent", function() { return CarouselComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let CarouselComponent = class CarouselComponent {
    constructor() { }
    ngOnInit() {
    }
};
CarouselComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-carousel',
        template: __webpack_require__(/*! raw-loader!./carousel.component.html */ "./node_modules/raw-loader/index.js!./src/app/carousel/carousel.component.html"),
        styles: [__webpack_require__(/*! ./carousel.component.css */ "./src/app/carousel/carousel.component.css")]
    })
], CarouselComponent);



/***/ }),

/***/ "./src/app/contact/contact.component.css":
/*!***********************************************!*\
  !*** ./src/app/contact/contact.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#contact1{\r\n    width: 350px;\r\n    height: 250px;\r\n    font-family: monospace;\r\n    position: relative;\r\n    float: left;\r\n    left: 15%;\r\n    padding-top: 10px;\r\n    padding-left: 10px;\r\n    margin-right: 200px;\r\n    clear: left;\r\n    background-color: rgb(202, 1, 1);\r\n    border-radius: 5%;\r\n    border: 1px solid black;\r\n   \r\n}\r\n\r\nh3{\r\n    font-weight: bold;\r\n    color:white;\r\n    text-align: center;\r\n    font-family: monospace;\r\n}\r\n\r\n.fa{\r\n    color:white;\r\n    font-size: 30px;\r\n    padding-left:10px;\r\n    padding-right:10px;\r\n    \r\n}\r\n\r\n#p11 {\r\n    font-family: monospace;\r\n    color:white;\r\n    padding-left:10px;\r\n    padding-right:10px;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29udGFjdC9jb250YWN0LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxZQUFZO0lBQ1osYUFBYTtJQUNiLHNCQUFzQjtJQUN0QixrQkFBa0I7SUFDbEIsV0FBVztJQUNYLFNBQVM7SUFDVCxpQkFBaUI7SUFDakIsa0JBQWtCO0lBQ2xCLG1CQUFtQjtJQUNuQixXQUFXO0lBQ1gsZ0NBQWdDO0lBQ2hDLGlCQUFpQjtJQUNqQix1QkFBdUI7O0FBRTNCOztBQUVBO0lBQ0ksaUJBQWlCO0lBQ2pCLFdBQVc7SUFDWCxrQkFBa0I7SUFDbEIsc0JBQXNCO0FBQzFCOztBQUVBO0lBQ0ksV0FBVztJQUNYLGVBQWU7SUFDZixpQkFBaUI7SUFDakIsa0JBQWtCOztBQUV0Qjs7QUFFQTtJQUNJLHNCQUFzQjtJQUN0QixXQUFXO0lBQ1gsaUJBQWlCO0lBQ2pCLGtCQUFrQjtBQUN0QiIsImZpbGUiOiJzcmMvYXBwL2NvbnRhY3QvY29udGFjdC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiI2NvbnRhY3Qxe1xyXG4gICAgd2lkdGg6IDM1MHB4O1xyXG4gICAgaGVpZ2h0OiAyNTBweDtcclxuICAgIGZvbnQtZmFtaWx5OiBtb25vc3BhY2U7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBmbG9hdDogbGVmdDtcclxuICAgIGxlZnQ6IDE1JTtcclxuICAgIHBhZGRpbmctdG9wOiAxMHB4O1xyXG4gICAgcGFkZGluZy1sZWZ0OiAxMHB4O1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAyMDBweDtcclxuICAgIGNsZWFyOiBsZWZ0O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDIwMiwgMSwgMSk7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1JTtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xyXG4gICBcclxufVxyXG5cclxuaDN7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgIGNvbG9yOndoaXRlO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgZm9udC1mYW1pbHk6IG1vbm9zcGFjZTtcclxufVxyXG5cclxuLmZhe1xyXG4gICAgY29sb3I6d2hpdGU7XHJcbiAgICBmb250LXNpemU6IDMwcHg7XHJcbiAgICBwYWRkaW5nLWxlZnQ6MTBweDtcclxuICAgIHBhZGRpbmctcmlnaHQ6MTBweDtcclxuICAgIFxyXG59XHJcblxyXG4jcDExIHtcclxuICAgIGZvbnQtZmFtaWx5OiBtb25vc3BhY2U7XHJcbiAgICBjb2xvcjp3aGl0ZTtcclxuICAgIHBhZGRpbmctbGVmdDoxMHB4O1xyXG4gICAgcGFkZGluZy1yaWdodDoxMHB4O1xyXG59Il19 */"

/***/ }),

/***/ "./src/app/contact/contact.component.ts":
/*!**********************************************!*\
  !*** ./src/app/contact/contact.component.ts ***!
  \**********************************************/
/*! exports provided: ContactComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactComponent", function() { return ContactComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let ContactComponent = class ContactComponent {
    constructor() { }
    ngOnInit() {
    }
};
ContactComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-contact',
        template: __webpack_require__(/*! raw-loader!./contact.component.html */ "./node_modules/raw-loader/index.js!./src/app/contact/contact.component.html"),
        styles: [__webpack_require__(/*! ./contact.component.css */ "./src/app/contact/contact.component.css")]
    })
], ContactComponent);



/***/ }),

/***/ "./src/app/edit-blog/edit-blog.component.css":
/*!***************************************************!*\
  !*** ./src/app/edit-blog/edit-blog.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "h2{\r\n    padding-top: 20px;\r\n    padding-bottom: 20px;\r\n    font-family: monospace;\r\n    font-weight: bold;\r\n    color: white;\r\n    text-align: center;\r\n}\r\n\r\n.add-to-cart {\r\n    color:white; \r\n    font-family: monospace;\r\n    font-weight: bold; \r\n    margin-right: 10px;\r\n    text-align: right;\r\n    padding-left: 20px;\r\n    padding-right: 20px;\r\n}\r\n\r\n.row {\r\n    background-color: rgba(238, 8, 8, 0.705);\r\n    border: 2px solid black;\r\n    border-radius: 10px;\r\n    font-family: monospace;\r\n    color: white;\r\n    margin-left: 80px;\r\n    margin-right: 80px;\r\n    margin-bottom: 80px;\r\n    \r\n}\r\n\r\n#div2 {\r\n margin-left: 100px;\r\n margin-right: 100px;\r\n\r\n}\r\n\r\nlabel {\r\n    font-family: monospace;\r\n    font-weight: bold;\r\n    font-size: 20px;\r\n}\r\n\r\n.form-control {\r\n    font-family: monospace;\r\n    font-size: 12px;\r\n}\r\n\r\n.alert{\r\n    background-color: rgb(66, 4, 4);\r\n    color: white;\r\n    font-size: 12px;\r\n    font-weight: bold;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZWRpdC1ibG9nL2VkaXQtYmxvZy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksaUJBQWlCO0lBQ2pCLG9CQUFvQjtJQUNwQixzQkFBc0I7SUFDdEIsaUJBQWlCO0lBQ2pCLFlBQVk7SUFDWixrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxXQUFXO0lBQ1gsc0JBQXNCO0lBQ3RCLGlCQUFpQjtJQUNqQixrQkFBa0I7SUFDbEIsaUJBQWlCO0lBQ2pCLGtCQUFrQjtJQUNsQixtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSx3Q0FBd0M7SUFDeEMsdUJBQXVCO0lBQ3ZCLG1CQUFtQjtJQUNuQixzQkFBc0I7SUFDdEIsWUFBWTtJQUNaLGlCQUFpQjtJQUNqQixrQkFBa0I7SUFDbEIsbUJBQW1COztBQUV2Qjs7QUFFQTtDQUNDLGtCQUFrQjtDQUNsQixtQkFBbUI7O0FBRXBCOztBQUVBO0lBQ0ksc0JBQXNCO0lBQ3RCLGlCQUFpQjtJQUNqQixlQUFlO0FBQ25COztBQUVBO0lBQ0ksc0JBQXNCO0lBQ3RCLGVBQWU7QUFDbkI7O0FBQ0E7SUFDSSwrQkFBK0I7SUFDL0IsWUFBWTtJQUNaLGVBQWU7SUFDZixpQkFBaUI7QUFDckIiLCJmaWxlIjoic3JjL2FwcC9lZGl0LWJsb2cvZWRpdC1ibG9nLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJoMntcclxuICAgIHBhZGRpbmctdG9wOiAyMHB4O1xyXG4gICAgcGFkZGluZy1ib3R0b206IDIwcHg7XHJcbiAgICBmb250LWZhbWlseTogbW9ub3NwYWNlO1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuXHJcbi5hZGQtdG8tY2FydCB7XHJcbiAgICBjb2xvcjp3aGl0ZTsgXHJcbiAgICBmb250LWZhbWlseTogbW9ub3NwYWNlO1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7IFxyXG4gICAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xyXG4gICAgdGV4dC1hbGlnbjogcmlnaHQ7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDIwcHg7XHJcbiAgICBwYWRkaW5nLXJpZ2h0OiAyMHB4O1xyXG59XHJcblxyXG4ucm93IHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjM4LCA4LCA4LCAwLjcwNSk7XHJcbiAgICBib3JkZXI6IDJweCBzb2xpZCBibGFjaztcclxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgICBmb250LWZhbWlseTogbW9ub3NwYWNlO1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gICAgbWFyZ2luLWxlZnQ6IDgwcHg7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDgwcHg7XHJcbiAgICBtYXJnaW4tYm90dG9tOiA4MHB4O1xyXG4gICAgXHJcbn1cclxuXHJcbiNkaXYyIHtcclxuIG1hcmdpbi1sZWZ0OiAxMDBweDtcclxuIG1hcmdpbi1yaWdodDogMTAwcHg7XHJcblxyXG59XHJcblxyXG5sYWJlbCB7XHJcbiAgICBmb250LWZhbWlseTogbW9ub3NwYWNlO1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICBmb250LXNpemU6IDIwcHg7XHJcbn1cclxuXHJcbi5mb3JtLWNvbnRyb2wge1xyXG4gICAgZm9udC1mYW1pbHk6IG1vbm9zcGFjZTtcclxuICAgIGZvbnQtc2l6ZTogMTJweDtcclxufVxyXG4uYWxlcnR7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoNjYsIDQsIDQpO1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gICAgZm9udC1zaXplOiAxMnB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/edit-blog/edit-blog.component.ts":
/*!**************************************************!*\
  !*** ./src/app/edit-blog/edit-blog.component.ts ***!
  \**************************************************/
/*! exports provided: EditBlogComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditBlogComponent", function() { return EditBlogComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var src_app_bloglist__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/bloglist */ "./src/app/bloglist.ts");
/* harmony import */ var src_app_postblog_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/postblog.service */ "./src/app/postblog.service.ts");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! sweetalert2 */ "./node_modules/sweetalert2/dist/sweetalert2.all.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_5__);







let EditBlogComponent = class EditBlogComponent {
    constructor(route, router, postblogService) {
        this.route = route;
        this.router = router;
        this.postblogService = postblogService;
        this.bloglist = src_app_bloglist__WEBPACK_IMPORTED_MODULE_3__["bloglist"];
    }
    ngOnInit() {
        this.route.paramMap.subscribe(params => {
            this.blog = this.bloglist[+params.get('blogId')];
        });
    }
    save() {
        this.postblogService.uzmiBlog();
        this.router.navigate(['/blog']);
        sweetalert2__WEBPACK_IMPORTED_MODULE_5___default.a.fire({
            position: 'top-end',
            type: 'success',
            title: 'You changes are saved!',
            showConfirmButton: false,
            timer: 2000
        });
    }
};
EditBlogComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: src_app_postblog_service__WEBPACK_IMPORTED_MODULE_4__["PostblogService"] }
];
EditBlogComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-edit-blog',
        template: __webpack_require__(/*! raw-loader!./edit-blog.component.html */ "./node_modules/raw-loader/index.js!./src/app/edit-blog/edit-blog.component.html"),
        styles: [__webpack_require__(/*! ./edit-blog.component.css */ "./src/app/edit-blog/edit-blog.component.css")]
    })
], EditBlogComponent);



/***/ }),

/***/ "./src/app/forma/forma.component.css":
/*!*******************************************!*\
  !*** ./src/app/forma/forma.component.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#divForm {\r\n    width: 450px;\r\n    height: 650px;\r\n    font-family: monospace;\r\n    font-weight: bold;\r\n    position: relative;\r\n    left: 30px;\r\n    top: 50px;\r\n    right: 50px;\r\n    color: rgb(202, 1, 1);\r\n \r\n    padding-top: 10px;\r\n    padding-left: 10px;\r\n    background-color: white;\r\n    border-radius: 5%;\r\n    margin-bottom: 300px;\r\n}\r\n\r\n.fa{\r\n    color:rgb(202, 1, 1);\r\n    font-size: 30px;\r\n    padding-left:10px;\r\n}\r\n\r\n.btn {\r\n    padding-left: 100px;\r\n    padding-right: 100px;\r\n    text-align: center;\r\n    position: relative;\r\n    left: 50px;\r\n    background-color: rgb(202, 1, 1);\r\n    color: black;\r\n}\r\n\r\n.form-control.ng-pristine.ng-invalid.ng-touched{\r\n    border: 2px solid red;\r\n}\r\n\r\n.alert{\r\n    background-color: rgb(202, 1, 1);\r\n    color:white;\r\n    font-size: 10px;\r\n    font-weight: bold;\r\n}\r\n\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZm9ybWEvZm9ybWEuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLFlBQVk7SUFDWixhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLGlCQUFpQjtJQUNqQixrQkFBa0I7SUFDbEIsVUFBVTtJQUNWLFNBQVM7SUFDVCxXQUFXO0lBQ1gscUJBQXFCOztJQUVyQixpQkFBaUI7SUFDakIsa0JBQWtCO0lBQ2xCLHVCQUF1QjtJQUN2QixpQkFBaUI7SUFDakIsb0JBQW9CO0FBQ3hCOztBQUVBO0lBQ0ksb0JBQW9CO0lBQ3BCLGVBQWU7SUFDZixpQkFBaUI7QUFDckI7O0FBRUE7SUFDSSxtQkFBbUI7SUFDbkIsb0JBQW9CO0lBQ3BCLGtCQUFrQjtJQUNsQixrQkFBa0I7SUFDbEIsVUFBVTtJQUNWLGdDQUFnQztJQUNoQyxZQUFZO0FBQ2hCOztBQUVBO0lBQ0kscUJBQXFCO0FBQ3pCOztBQUVBO0lBQ0ksZ0NBQWdDO0lBQ2hDLFdBQVc7SUFDWCxlQUFlO0lBQ2YsaUJBQWlCO0FBQ3JCIiwiZmlsZSI6InNyYy9hcHAvZm9ybWEvZm9ybWEuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIiNkaXZGb3JtIHtcclxuICAgIHdpZHRoOiA0NTBweDtcclxuICAgIGhlaWdodDogNjUwcHg7XHJcbiAgICBmb250LWZhbWlseTogbW9ub3NwYWNlO1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBsZWZ0OiAzMHB4O1xyXG4gICAgdG9wOiA1MHB4O1xyXG4gICAgcmlnaHQ6IDUwcHg7XHJcbiAgICBjb2xvcjogcmdiKDIwMiwgMSwgMSk7XHJcbiBcclxuICAgIHBhZGRpbmctdG9wOiAxMHB4O1xyXG4gICAgcGFkZGluZy1sZWZ0OiAxMHB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1JTtcclxuICAgIG1hcmdpbi1ib3R0b206IDMwMHB4O1xyXG59XHJcblxyXG4uZmF7XHJcbiAgICBjb2xvcjpyZ2IoMjAyLCAxLCAxKTtcclxuICAgIGZvbnQtc2l6ZTogMzBweDtcclxuICAgIHBhZGRpbmctbGVmdDoxMHB4O1xyXG59XHJcblxyXG4uYnRuIHtcclxuICAgIHBhZGRpbmctbGVmdDogMTAwcHg7XHJcbiAgICBwYWRkaW5nLXJpZ2h0OiAxMDBweDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIGxlZnQ6IDUwcHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjAyLCAxLCAxKTtcclxuICAgIGNvbG9yOiBibGFjaztcclxufVxyXG5cclxuLmZvcm0tY29udHJvbC5uZy1wcmlzdGluZS5uZy1pbnZhbGlkLm5nLXRvdWNoZWR7XHJcbiAgICBib3JkZXI6IDJweCBzb2xpZCByZWQ7XHJcbn1cclxuXHJcbi5hbGVydHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyMDIsIDEsIDEpO1xyXG4gICAgY29sb3I6d2hpdGU7XHJcbiAgICBmb250LXNpemU6IDEwcHg7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxufVxyXG5cclxuIl19 */"

/***/ }),

/***/ "./src/app/forma/forma.component.ts":
/*!******************************************!*\
  !*** ./src/app/forma/forma.component.ts ***!
  \******************************************/
/*! exports provided: FormaComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormaComponent", function() { return FormaComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! sweetalert2 */ "./node_modules/sweetalert2/dist/sweetalert2.all.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_2__);



let FormaComponent = class FormaComponent {
    constructor() {
        this.phoneMask = ['+', '(', /[1-9]/, /\d/, /\d/, ')', ' ', /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/];
    }
    onSubmit() {
        sweetalert2__WEBPACK_IMPORTED_MODULE_2___default.a.fire('Hvala na komentaru!', '', 'success');
    }
};
FormaComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-forma',
        template: __webpack_require__(/*! raw-loader!./forma.component.html */ "./node_modules/raw-loader/index.js!./src/app/forma/forma.component.html"),
        styles: [__webpack_require__(/*! ./forma.component.css */ "./src/app/forma/forma.component.css")]
    })
], FormaComponent);



/***/ }),

/***/ "./src/app/gallery-page/gallery-page.component.css":
/*!*********************************************************!*\
  !*** ./src/app/gallery-page/gallery-page.component.css ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "img{\r\n    max-width: 100%;\r\n    height: auto;\r\n    \r\n  \r\n}\r\n\r\n.thumbnails{\r\n    margin-right: -15px;\r\n  \r\n    \r\n\r\n}\r\n\r\n.thumbnails a {\r\n    float: left;\r\n    width: 25%;\r\n    padding-right: 15px;\r\n    margin-bottom: 15px;\r\n    box-sizing: border-box;\r\n    \r\n\r\n}\r\n\r\n.thumbnails img {\r\n    display: block;\r\n    -webkit-transition: all 0.2s ease-in-out;\r\n    transition: all 0.2s ease-in-out;\r\n    \r\n}\r\n\r\n.thumbnails:hover img {\r\n    opacity: 0.4;\r\n    -webkit-transform: scale(0.86) ;\r\n            transform: scale(0.86) ;\r\n}\r\n\r\n.thumbnails img:hover {\r\n    opacity: 1.0;\r\n    -webkit-transform: scale(1.1);\r\n            transform: scale(1.1);\r\n    box-shadow: 0 0 40px rgb(202, 1, 1);\r\n    \r\n}\r\n\r\n#grid1 {\r\n    height: auto;\r\n    padding-top: 20px;\r\n    padding-right: 100px;\r\n    padding-left: 100px;\r\n    padding-bottom: 100px;\r\n}\r\n\r\n#ShowMore {\r\n    float: right;\r\n    background-color: white;\r\n    padding-bottom: 100px;\r\n    \r\n\r\n}\r\n\r\nh3 {\r\n    font-family: monospace;\r\n    font-weight: bold;\r\n    color: rgb(202, 1, 1);\r\n    text-align: center;\r\n    padding-bottom: 26px;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZ2FsbGVyeS1wYWdlL2dhbGxlcnktcGFnZS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksZUFBZTtJQUNmLFlBQVk7OztBQUdoQjs7QUFFQTtJQUNJLG1CQUFtQjs7OztBQUl2Qjs7QUFFQTtJQUNJLFdBQVc7SUFDWCxVQUFVO0lBQ1YsbUJBQW1CO0lBQ25CLG1CQUFtQjtJQUNuQixzQkFBc0I7OztBQUcxQjs7QUFFQTtJQUNJLGNBQWM7SUFDZCx3Q0FBZ0M7SUFBaEMsZ0NBQWdDOztBQUVwQzs7QUFFQTtJQUNJLFlBQVk7SUFDWiwrQkFBdUI7WUFBdkIsdUJBQXVCO0FBQzNCOztBQUVBO0lBQ0ksWUFBWTtJQUNaLDZCQUFxQjtZQUFyQixxQkFBcUI7SUFDckIsbUNBQW1DOztBQUV2Qzs7QUFFQTtJQUNJLFlBQVk7SUFDWixpQkFBaUI7SUFDakIsb0JBQW9CO0lBQ3BCLG1CQUFtQjtJQUNuQixxQkFBcUI7QUFDekI7O0FBRUE7SUFDSSxZQUFZO0lBQ1osdUJBQXVCO0lBQ3ZCLHFCQUFxQjs7O0FBR3pCOztBQUVBO0lBQ0ksc0JBQXNCO0lBQ3RCLGlCQUFpQjtJQUNqQixxQkFBcUI7SUFDckIsa0JBQWtCO0lBQ2xCLG9CQUFvQjtBQUN4QiIsImZpbGUiOiJzcmMvYXBwL2dhbGxlcnktcGFnZS9nYWxsZXJ5LXBhZ2UuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbImltZ3tcclxuICAgIG1heC13aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogYXV0bztcclxuICAgIFxyXG4gIFxyXG59XHJcblxyXG4udGh1bWJuYWlsc3tcclxuICAgIG1hcmdpbi1yaWdodDogLTE1cHg7XHJcbiAgXHJcbiAgICBcclxuXHJcbn1cclxuXHJcbi50aHVtYm5haWxzIGEge1xyXG4gICAgZmxvYXQ6IGxlZnQ7XHJcbiAgICB3aWR0aDogMjUlO1xyXG4gICAgcGFkZGluZy1yaWdodDogMTVweDtcclxuICAgIG1hcmdpbi1ib3R0b206IDE1cHg7XHJcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gICAgXHJcblxyXG59XHJcblxyXG4udGh1bWJuYWlscyBpbWcge1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC4ycyBlYXNlLWluLW91dDtcclxuICAgIFxyXG59XHJcblxyXG4udGh1bWJuYWlsczpob3ZlciBpbWcge1xyXG4gICAgb3BhY2l0eTogMC40O1xyXG4gICAgdHJhbnNmb3JtOiBzY2FsZSgwLjg2KSA7XHJcbn1cclxuXHJcbi50aHVtYm5haWxzIGltZzpob3ZlciB7XHJcbiAgICBvcGFjaXR5OiAxLjA7XHJcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMSk7XHJcbiAgICBib3gtc2hhZG93OiAwIDAgNDBweCByZ2IoMjAyLCAxLCAxKTtcclxuICAgIFxyXG59XHJcblxyXG4jZ3JpZDEge1xyXG4gICAgaGVpZ2h0OiBhdXRvO1xyXG4gICAgcGFkZGluZy10b3A6IDIwcHg7XHJcbiAgICBwYWRkaW5nLXJpZ2h0OiAxMDBweDtcclxuICAgIHBhZGRpbmctbGVmdDogMTAwcHg7XHJcbiAgICBwYWRkaW5nLWJvdHRvbTogMTAwcHg7XHJcbn1cclxuXHJcbiNTaG93TW9yZSB7XHJcbiAgICBmbG9hdDogcmlnaHQ7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxuICAgIHBhZGRpbmctYm90dG9tOiAxMDBweDtcclxuICAgIFxyXG5cclxufVxyXG5cclxuaDMge1xyXG4gICAgZm9udC1mYW1pbHk6IG1vbm9zcGFjZTtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgY29sb3I6IHJnYigyMDIsIDEsIDEpO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgcGFkZGluZy1ib3R0b206IDI2cHg7XHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/gallery-page/gallery-page.component.ts":
/*!********************************************************!*\
  !*** ./src/app/gallery-page/gallery-page.component.ts ***!
  \********************************************************/
/*! exports provided: GalleryPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GalleryPageComponent", function() { return GalleryPageComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let GalleryPageComponent = class GalleryPageComponent {
    constructor() { }
    ngOnInit() {
    }
};
GalleryPageComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-gallery-page',
        template: __webpack_require__(/*! raw-loader!./gallery-page.component.html */ "./node_modules/raw-loader/index.js!./src/app/gallery-page/gallery-page.component.html"),
        styles: [__webpack_require__(/*! ./gallery-page.component.css */ "./src/app/gallery-page/gallery-page.component.css")]
    })
], GalleryPageComponent);



/***/ }),

/***/ "./src/app/geolocation/geolocation.component.css":
/*!*******************************************************!*\
  !*** ./src/app/geolocation/geolocation.component.css ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "agm-map {\r\n    height: 400px;\r\n    \r\n}\r\n\r\n#geo1 {\r\n    margin-top: 100px;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZ2VvbG9jYXRpb24vZ2VvbG9jYXRpb24uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGFBQWE7O0FBRWpCOztBQUVBO0lBQ0ksaUJBQWlCO0FBQ3JCIiwiZmlsZSI6InNyYy9hcHAvZ2VvbG9jYXRpb24vZ2VvbG9jYXRpb24uY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbImFnbS1tYXAge1xyXG4gICAgaGVpZ2h0OiA0MDBweDtcclxuICAgIFxyXG59XHJcblxyXG4jZ2VvMSB7XHJcbiAgICBtYXJnaW4tdG9wOiAxMDBweDtcclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/geolocation/geolocation.component.ts":
/*!******************************************************!*\
  !*** ./src/app/geolocation/geolocation.component.ts ***!
  \******************************************************/
/*! exports provided: GeolocationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GeolocationComponent", function() { return GeolocationComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let GeolocationComponent = class GeolocationComponent {
    constructor() {
        this.latitude = 44.807776;
        this.longitude = 20.404629;
    }
    onChoseLocation(event) {
        this.latitude = event.coords.lat;
        this.longitude = event.coords.lng;
    }
};
GeolocationComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-geolocation',
        template: __webpack_require__(/*! raw-loader!./geolocation.component.html */ "./node_modules/raw-loader/index.js!./src/app/geolocation/geolocation.component.html"),
        styles: [__webpack_require__(/*! ./geolocation.component.css */ "./src/app/geolocation/geolocation.component.css")]
    })
], GeolocationComponent);



/***/ }),

/***/ "./src/app/home/home.component.css":
/*!*****************************************!*\
  !*** ./src/app/home/home.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#div1 {\r\n \r\n    position: relative;\r\n    top: 300px;\r\n   \r\n}\r\n\r\n#div0 {\r\n    padding-bottom: 100px;\r\n    margin-bottom: 100px;\r\n    clear: both;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZS9ob21lLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7O0lBRUksa0JBQWtCO0lBQ2xCLFVBQVU7O0FBRWQ7O0FBRUE7SUFDSSxxQkFBcUI7SUFDckIsb0JBQW9CO0lBQ3BCLFdBQVc7QUFDZiIsImZpbGUiOiJzcmMvYXBwL2hvbWUvaG9tZS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiI2RpdjEge1xyXG4gXHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICB0b3A6IDMwMHB4O1xyXG4gICBcclxufVxyXG5cclxuI2RpdjAge1xyXG4gICAgcGFkZGluZy1ib3R0b206IDEwMHB4O1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMTAwcHg7XHJcbiAgICBjbGVhcjogYm90aDtcclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/home/home.component.ts":
/*!****************************************!*\
  !*** ./src/app/home/home.component.ts ***!
  \****************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let HomeComponent = class HomeComponent {
    constructor() { }
    ngOnInit() {
    }
};
HomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-home',
        template: __webpack_require__(/*! raw-loader!./home.component.html */ "./node_modules/raw-loader/index.js!./src/app/home/home.component.html"),
        styles: [__webpack_require__(/*! ./home.component.css */ "./src/app/home/home.component.css")]
    })
], HomeComponent);



/***/ }),

/***/ "./src/app/jumbotron/jumbotron.component.css":
/*!***************************************************!*\
  !*** ./src/app/jumbotron/jumbotron.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "h1 {\r\n    font-family: monospace;\r\n    font-weight: bold;\r\n    color: rgb(202, 1, 1);\r\n    font-size: 40px;\r\n}\r\n\r\n#p1 {\r\n    font-family: monospace;\r\n    font-weight: bold;\r\n    font-size: 20px;\r\n    color:  rgb(202, 1, 1);\r\n    padding-left: 100px;\r\n    padding-right: 100px;\r\n    padding-top: 20px;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvanVtYm90cm9uL2p1bWJvdHJvbi5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksc0JBQXNCO0lBQ3RCLGlCQUFpQjtJQUNqQixxQkFBcUI7SUFDckIsZUFBZTtBQUNuQjs7QUFFQTtJQUNJLHNCQUFzQjtJQUN0QixpQkFBaUI7SUFDakIsZUFBZTtJQUNmLHNCQUFzQjtJQUN0QixtQkFBbUI7SUFDbkIsb0JBQW9CO0lBQ3BCLGlCQUFpQjtBQUNyQiIsImZpbGUiOiJzcmMvYXBwL2p1bWJvdHJvbi9qdW1ib3Ryb24uY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbImgxIHtcclxuICAgIGZvbnQtZmFtaWx5OiBtb25vc3BhY2U7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgIGNvbG9yOiByZ2IoMjAyLCAxLCAxKTtcclxuICAgIGZvbnQtc2l6ZTogNDBweDtcclxufVxyXG5cclxuI3AxIHtcclxuICAgIGZvbnQtZmFtaWx5OiBtb25vc3BhY2U7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgIGZvbnQtc2l6ZTogMjBweDtcclxuICAgIGNvbG9yOiAgcmdiKDIwMiwgMSwgMSk7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDEwMHB4O1xyXG4gICAgcGFkZGluZy1yaWdodDogMTAwcHg7XHJcbiAgICBwYWRkaW5nLXRvcDogMjBweDtcclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/jumbotron/jumbotron.component.ts":
/*!**************************************************!*\
  !*** ./src/app/jumbotron/jumbotron.component.ts ***!
  \**************************************************/
/*! exports provided: JumbotronComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "JumbotronComponent", function() { return JumbotronComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let JumbotronComponent = class JumbotronComponent {
    constructor() {
        this.title = 'Tefal Shop';
    }
    ngOnInit() {
    }
};
JumbotronComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-jumbotron',
        template: __webpack_require__(/*! raw-loader!./jumbotron.component.html */ "./node_modules/raw-loader/index.js!./src/app/jumbotron/jumbotron.component.html"),
        styles: [__webpack_require__(/*! ./jumbotron.component.css */ "./src/app/jumbotron/jumbotron.component.css")]
    })
], JumbotronComponent);



/***/ }),

/***/ "./src/app/korpa/korpa.component.css":
/*!*******************************************!*\
  !*** ./src/app/korpa/korpa.component.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "h1 {\r\n    font-family: monospace;\r\n    color:black;\r\n    padding-top: 20px;\r\n    padding-left: 50px;\r\n    font-size: 35px;\r\n    font-weight: bold;\r\n    text-align: center;\r\n}\r\n\r\n\r\n\r\n#tableDIV {\r\n    margin: 5%;\r\n    \r\n}\r\n\r\n\r\n\r\nthead {\r\n    font-family: monospace;\r\n    color:black;\r\n    font-weight: bold;\r\n    text-align: center;\r\n    font-size: 25px;\r\n}\r\n\r\n\r\n\r\ntbody {\r\n    font-family: monospace;\r\n    color:black;\r\n    text-align: center;\r\n    \r\n}\r\n\r\n\r\n\r\n.align-middle {\r\n    font-size: 20px;\r\n    font-family: monospace;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAva29ycGEva29ycGEuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLHNCQUFzQjtJQUN0QixXQUFXO0lBQ1gsaUJBQWlCO0lBQ2pCLGtCQUFrQjtJQUNsQixlQUFlO0lBQ2YsaUJBQWlCO0lBQ2pCLGtCQUFrQjtBQUN0Qjs7OztBQUlBO0lBQ0ksVUFBVTs7QUFFZDs7OztBQUVBO0lBQ0ksc0JBQXNCO0lBQ3RCLFdBQVc7SUFDWCxpQkFBaUI7SUFDakIsa0JBQWtCO0lBQ2xCLGVBQWU7QUFDbkI7Ozs7QUFFQTtJQUNJLHNCQUFzQjtJQUN0QixXQUFXO0lBQ1gsa0JBQWtCOztBQUV0Qjs7OztBQUVBO0lBQ0ksZUFBZTtJQUNmLHNCQUFzQjtBQUMxQiIsImZpbGUiOiJzcmMvYXBwL2tvcnBhL2tvcnBhLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJoMSB7XHJcbiAgICBmb250LWZhbWlseTogbW9ub3NwYWNlO1xyXG4gICAgY29sb3I6YmxhY2s7XHJcbiAgICBwYWRkaW5nLXRvcDogMjBweDtcclxuICAgIHBhZGRpbmctbGVmdDogNTBweDtcclxuICAgIGZvbnQtc2l6ZTogMzVweDtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcblxyXG5cclxuXHJcbiN0YWJsZURJViB7XHJcbiAgICBtYXJnaW46IDUlO1xyXG4gICAgXHJcbn1cclxuXHJcbnRoZWFkIHtcclxuICAgIGZvbnQtZmFtaWx5OiBtb25vc3BhY2U7XHJcbiAgICBjb2xvcjpibGFjaztcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgZm9udC1zaXplOiAyNXB4O1xyXG59XHJcblxyXG50Ym9keSB7XHJcbiAgICBmb250LWZhbWlseTogbW9ub3NwYWNlO1xyXG4gICAgY29sb3I6YmxhY2s7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBcclxufVxyXG5cclxuLmFsaWduLW1pZGRsZSB7XHJcbiAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgICBmb250LWZhbWlseTogbW9ub3NwYWNlO1xyXG59Il19 */"

/***/ }),

/***/ "./src/app/korpa/korpa.component.ts":
/*!******************************************!*\
  !*** ./src/app/korpa/korpa.component.ts ***!
  \******************************************/
/*! exports provided: KorpaComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "KorpaComponent", function() { return KorpaComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_app_shopping_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shopping.service */ "./src/app/shopping.service.ts");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! sweetalert2 */ "./node_modules/sweetalert2/dist/sweetalert2.all.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");





let KorpaComponent = class KorpaComponent {
    constructor(shoppingservice, router) {
        this.shoppingservice = shoppingservice;
        this.router = router;
        this.suma = 0;
        this.cene = [];
        this.korpa = this.shoppingservice.uzmiPredmete();
    }
    ngOnInit() {
    }
    isprazniKorpu() {
        this.korpa = this.shoppingservice.ocistiKorpu();
        sweetalert2__WEBPACK_IMPORTED_MODULE_3___default.a.fire({
            position: 'top-end',
            type: 'success',
            title: 'Ispaznili ste Vasu kopru!',
            showConfirmButton: false,
            timer: 2000
        });
    }
    brojStavki() {
        return this.korpa.length;
    }
    izvrsiKupovinu() {
        const swalWithBootstrapButtons = sweetalert2__WEBPACK_IMPORTED_MODULE_3___default.a.mixin({
            customClass: {
                cancelButton: 'btn btn-danger',
                confirmButton: 'btn btn-success'
            },
            buttonsStyling: false,
        });
        swalWithBootstrapButtons.fire({
            title: 'Da li zelite da kupite?',
            text: "Necete moci posle da otkazete porudzbinu!",
            type: 'warning',
            showCancelButton: true,
            confirmButtonText: 'Da, porucujem!',
            cancelButtonText: 'Ne, otkazujem!',
            reverseButtons: true
        }).then((result) => {
            if (result.value) {
                swalWithBootstrapButtons.fire('Uspesno ste izvrsili kupovinu!', 'Ocekujte porudzbinu u naredna 3 radna dana.', 'success'),
                    this.korpa = this.shoppingservice.ocistiKorpu();
                this.router.navigate(['/home']);
            }
            else if (
            // Read more about handling dismissals
            result.dismiss === sweetalert2__WEBPACK_IMPORTED_MODULE_3___default.a.DismissReason.cancel) {
                swalWithBootstrapButtons.fire('Otkazali ste kupovinu', 'Mozete promeniti vasu porudzbinu. :)', 'error');
            }
        });
    }
};
KorpaComponent.ctorParameters = () => [
    { type: src_app_shopping_service__WEBPACK_IMPORTED_MODULE_2__["ShoppingService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] }
];
KorpaComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-korpa',
        template: __webpack_require__(/*! raw-loader!./korpa.component.html */ "./node_modules/raw-loader/index.js!./src/app/korpa/korpa.component.html"),
        styles: [__webpack_require__(/*! ./korpa.component.css */ "./src/app/korpa/korpa.component.css")]
    })
], KorpaComponent);



/***/ }),

/***/ "./src/app/navbar/navbar.component.css":
/*!*********************************************!*\
  !*** ./src/app/navbar/navbar.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "nav .navbar-nav  li a{\r\n    font-family: monospace !important;\r\n    font-weight: bold !important;\r\n    }\r\n\r\n.nav-link, .navbar-brand {\r\n    font-family: monospace !important;\r\n    font-weight: bold !important;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbmF2YmFyL25hdmJhci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksaUNBQWlDO0lBQ2pDLDRCQUE0QjtJQUM1Qjs7QUFFSjtJQUNJLGlDQUFpQztJQUNqQyw0QkFBNEI7QUFDaEMiLCJmaWxlIjoic3JjL2FwcC9uYXZiYXIvbmF2YmFyLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJuYXYgLm5hdmJhci1uYXYgIGxpIGF7XHJcbiAgICBmb250LWZhbWlseTogbW9ub3NwYWNlICFpbXBvcnRhbnQ7XHJcbiAgICBmb250LXdlaWdodDogYm9sZCAhaW1wb3J0YW50O1xyXG4gICAgfVxyXG5cclxuLm5hdi1saW5rLCAubmF2YmFyLWJyYW5kIHtcclxuICAgIGZvbnQtZmFtaWx5OiBtb25vc3BhY2UgIWltcG9ydGFudDtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkICFpbXBvcnRhbnQ7XHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/navbar/navbar.component.ts":
/*!********************************************!*\
  !*** ./src/app/navbar/navbar.component.ts ***!
  \********************************************/
/*! exports provided: NavbarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavbarComponent", function() { return NavbarComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! sweetalert2 */ "./node_modules/sweetalert2/dist/sweetalert2.all.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _autentifikacija_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../autentifikacija.service */ "./src/app/autentifikacija.service.ts");





let NavbarComponent = class NavbarComponent {
    constructor(autentifikacijaService, router) {
        this.autentifikacijaService = autentifikacijaService;
        this.router = router;
        this.appName = 'Tefal Shop';
    }
    ngOnInit() {
    }
    odjaviSe() {
        this.autentifikacijaService.odjaviSe();
        this.router.navigate(['/signin']);
        sweetalert2__WEBPACK_IMPORTED_MODULE_2___default.a.fire({
            position: 'top-end',
            type: 'success',
            title: 'Izlogovali ste se!',
            showConfirmButton: false,
            timer: 2000
        });
    }
};
NavbarComponent.ctorParameters = () => [
    { type: _autentifikacija_service__WEBPACK_IMPORTED_MODULE_4__["AutentifikacijaService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }
];
NavbarComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-navbar',
        template: __webpack_require__(/*! raw-loader!./navbar.component.html */ "./node_modules/raw-loader/index.js!./src/app/navbar/navbar.component.html"),
        styles: [__webpack_require__(/*! ./navbar.component.css */ "./src/app/navbar/navbar.component.css")]
    })
], NavbarComponent);



/***/ }),

/***/ "./src/app/opis-proizvoda/opis-proizvoda.component.css":
/*!*************************************************************!*\
  !*** ./src/app/opis-proizvoda/opis-proizvoda.component.css ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "h1 {\r\n    font-family: monospace;\r\n    color: white;\r\n    padding-top: 20px;\r\n    padding-left: 50px;\r\n    padding-bottom: 10px;\r\n    font-size: 35px;\r\n    font-weight: bold;\r\n    text-align: center;\r\n\r\n}\r\n\r\n.card{\r\n    text-align: center;\r\n    margin-bottom: 10px;\r\n    margin-top: 2px;\r\n    margin-right: 2px;\r\n    margin-left: 2px;\r\n    padding: 10px;\r\n    color:white ;\r\n    background-color:rgba(238, 8, 8, 0.705);\r\n    font-family: monospace;\r\n    border: 1px solid black;\r\n    border-radius: 5%;\r\n\r\n}\r\n\r\nimg{\r\n    height: 300px;\r\n     width: 300px;\r\n     border: 2px solid black;\r\n     background-color: white;\r\n     \r\n}\r\n\r\n.card-title{\r\n    padding-top: 10px;\r\n    font-weight: bold;\r\n    text-align: center;\r\n    font-family: monospace;\r\n    \r\n}\r\n\r\n.card-text{\r\n    padding-left: 10px;\r\n    font-weight: bold;\r\n    text-align: left;\r\n    font-size: 16px;\r\n    font-family: monospace;\r\n}\r\n\r\n.textOverImage{\r\n    position: relative;\r\n    width: 900px;\r\n    height: 200px;\r\n    float: left;\r\n    margin-top: 30px;\r\n    margin-left: 100px;\r\n    margin-right: 100px;\r\n    margin-bottom: 20px;\r\n    background-size: 100%;\r\n    background-position: center;\r\n    -webkit-transition:0.5s ;\r\n    transition:0.5s ;\r\n    clear: both;\r\n    \r\n    \r\n}\r\n\r\n.textOverImage:hover{\r\n    background-size: 110%;\r\n}\r\n\r\n.textOverImage:after{\r\n    position: absolute;\r\n    top: 100%;\r\n    bottom: 0;\r\n    left: 0;\r\n    right: 0;\r\n    white-space: pre-wrap;\r\n    word-wrap: break-word;\r\n    overflow: hidden;\r\n    background-color: rgba(0,0,0,0);\r\n    color: #fff;\r\n    padding:8px;\r\n    content: attr(data-text);\r\n    -webkit-transition: 0.5s ;\r\n    transition: 0.5s ;\r\n    font-family: monospace;\r\n    text-align: center;\r\n}\r\n\r\n.textOverImage:hover:after{\r\n    top: 0;\r\n    padding: 8px;\r\n    background-color: rgba(0,0,0,0.6);\r\n}\r\n\r\n.textOverImage:first-line{\r\n    color:#fff;\r\n    font-weight: bold;\r\n    font-size: 1.5em;\r\n}\r\n\r\nh2 {\r\n    padding-top: 20px;\r\n    font-family: monospace;\r\n    font-weight: bold;\r\n    color: white;\r\n    text-align: center;\r\n}\r\n\r\nh5 {\r\n    font-family: monospace;\r\n    font-weight: bold;\r\n    color:red;\r\n    text-align: center;\r\n    padding-left: 50px;\r\n    padding-right: 50px;\r\n}\r\n\r\nimg{\r\n    text-align: center;\r\n    max-width: 100%;\r\n    height: auto;\r\n    border-radius: 5%;\r\n    \r\n  \r\n}\r\n\r\n.thumbnails{\r\n    margin-right: -15px;\r\n}\r\n\r\n.thumbnails a {\r\n    float: left;\r\n    width: 25%;\r\n    padding-right: 20px;\r\n    margin-bottom: 10px;\r\n    box-sizing: border-box;\r\n    \r\n\r\n}\r\n\r\n.thumbnails img {\r\n    display: block;\r\n    -webkit-transition: all 0.2s ease-in-out;\r\n    transition: all 0.2s ease-in-out;\r\n    \r\n}\r\n\r\n.thumbnails:hover img {\r\n    opacity: 0.6;\r\n    -webkit-transform: scale(0.90) ;\r\n            transform: scale(0.90) ;\r\n}\r\n\r\n.thumbnails img:hover {\r\n    opacity: 1.0;\r\n    -webkit-transform: scale(1.1) ;\r\n            transform: scale(1.1) ;\r\n    box-shadow: 0 0 50px black;\r\n    \r\n}\r\n\r\n#grid1 {\r\n    height: auto;\r\n    padding-top: 20px;\r\n    padding-right: 100px;\r\n    padding-left: 100px;\r\n    padding-bottom: 5px;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvb3Bpcy1wcm9penZvZGEvb3Bpcy1wcm9penZvZGEuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLHNCQUFzQjtJQUN0QixZQUFZO0lBQ1osaUJBQWlCO0lBQ2pCLGtCQUFrQjtJQUNsQixvQkFBb0I7SUFDcEIsZUFBZTtJQUNmLGlCQUFpQjtJQUNqQixrQkFBa0I7O0FBRXRCOztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLG1CQUFtQjtJQUNuQixlQUFlO0lBQ2YsaUJBQWlCO0lBQ2pCLGdCQUFnQjtJQUNoQixhQUFhO0lBQ2IsWUFBWTtJQUNaLHVDQUF1QztJQUN2QyxzQkFBc0I7SUFDdEIsdUJBQXVCO0lBQ3ZCLGlCQUFpQjs7QUFFckI7O0FBR0E7SUFDSSxhQUFhO0tBQ1osWUFBWTtLQUNaLHVCQUF1QjtLQUN2Qix1QkFBdUI7O0FBRTVCOztBQUVBO0lBQ0ksaUJBQWlCO0lBQ2pCLGlCQUFpQjtJQUNqQixrQkFBa0I7SUFDbEIsc0JBQXNCOztBQUUxQjs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixpQkFBaUI7SUFDakIsZ0JBQWdCO0lBQ2hCLGVBQWU7SUFDZixzQkFBc0I7QUFDMUI7O0FBSUE7SUFDSSxrQkFBa0I7SUFDbEIsWUFBWTtJQUNaLGFBQWE7SUFDYixXQUFXO0lBQ1gsZ0JBQWdCO0lBQ2hCLGtCQUFrQjtJQUNsQixtQkFBbUI7SUFDbkIsbUJBQW1CO0lBQ25CLHFCQUFxQjtJQUNyQiwyQkFBMkI7SUFDM0Isd0JBQWdCO0lBQWhCLGdCQUFnQjtJQUNoQixXQUFXOzs7QUFHZjs7QUFFQTtJQUNJLHFCQUFxQjtBQUN6Qjs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixTQUFTO0lBQ1QsU0FBUztJQUNULE9BQU87SUFDUCxRQUFRO0lBQ1IscUJBQXFCO0lBQ3JCLHFCQUFxQjtJQUNyQixnQkFBZ0I7SUFDaEIsK0JBQStCO0lBQy9CLFdBQVc7SUFDWCxXQUFXO0lBQ1gsd0JBQXdCO0lBQ3hCLHlCQUFpQjtJQUFqQixpQkFBaUI7SUFDakIsc0JBQXNCO0lBQ3RCLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLE1BQU07SUFDTixZQUFZO0lBQ1osaUNBQWlDO0FBQ3JDOztBQUVBO0lBQ0ksVUFBVTtJQUNWLGlCQUFpQjtJQUNqQixnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSxpQkFBaUI7SUFDakIsc0JBQXNCO0lBQ3RCLGlCQUFpQjtJQUNqQixZQUFZO0lBQ1osa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksc0JBQXNCO0lBQ3RCLGlCQUFpQjtJQUNqQixTQUFTO0lBQ1Qsa0JBQWtCO0lBQ2xCLGtCQUFrQjtJQUNsQixtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsZUFBZTtJQUNmLFlBQVk7SUFDWixpQkFBaUI7OztBQUdyQjs7QUFFQTtJQUNJLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLFdBQVc7SUFDWCxVQUFVO0lBQ1YsbUJBQW1CO0lBQ25CLG1CQUFtQjtJQUNuQixzQkFBc0I7OztBQUcxQjs7QUFFQTtJQUNJLGNBQWM7SUFDZCx3Q0FBZ0M7SUFBaEMsZ0NBQWdDOztBQUVwQzs7QUFFQTtJQUNJLFlBQVk7SUFDWiwrQkFBdUI7WUFBdkIsdUJBQXVCO0FBQzNCOztBQUVBO0lBQ0ksWUFBWTtJQUNaLDhCQUFzQjtZQUF0QixzQkFBc0I7SUFDdEIsMEJBQTBCOztBQUU5Qjs7QUFFQTtJQUNJLFlBQVk7SUFDWixpQkFBaUI7SUFDakIsb0JBQW9CO0lBQ3BCLG1CQUFtQjtJQUNuQixtQkFBbUI7QUFDdkIiLCJmaWxlIjoic3JjL2FwcC9vcGlzLXByb2l6dm9kYS9vcGlzLXByb2l6dm9kYS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaDEge1xyXG4gICAgZm9udC1mYW1pbHk6IG1vbm9zcGFjZTtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIHBhZGRpbmctdG9wOiAyMHB4O1xyXG4gICAgcGFkZGluZy1sZWZ0OiA1MHB4O1xyXG4gICAgcGFkZGluZy1ib3R0b206IDEwcHg7XHJcbiAgICBmb250LXNpemU6IDM1cHg7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuXHJcbn1cclxuXHJcbi5jYXJke1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMTBweDtcclxuICAgIG1hcmdpbi10b3A6IDJweDtcclxuICAgIG1hcmdpbi1yaWdodDogMnB4O1xyXG4gICAgbWFyZ2luLWxlZnQ6IDJweDtcclxuICAgIHBhZGRpbmc6IDEwcHg7XHJcbiAgICBjb2xvcjp3aGl0ZSA7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOnJnYmEoMjM4LCA4LCA4LCAwLjcwNSk7XHJcbiAgICBmb250LWZhbWlseTogbW9ub3NwYWNlO1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1JTtcclxuXHJcbn1cclxuXHJcblxyXG5pbWd7XHJcbiAgICBoZWlnaHQ6IDMwMHB4O1xyXG4gICAgIHdpZHRoOiAzMDBweDtcclxuICAgICBib3JkZXI6IDJweCBzb2xpZCBibGFjaztcclxuICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxuICAgICBcclxufVxyXG5cclxuLmNhcmQtdGl0bGV7XHJcbiAgICBwYWRkaW5nLXRvcDogMTBweDtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgZm9udC1mYW1pbHk6IG1vbm9zcGFjZTtcclxuICAgIFxyXG59XHJcblxyXG4uY2FyZC10ZXh0e1xyXG4gICAgcGFkZGluZy1sZWZ0OiAxMHB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4gICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgZm9udC1mYW1pbHk6IG1vbm9zcGFjZTtcclxufVxyXG5cclxuXHJcblxyXG4udGV4dE92ZXJJbWFnZXtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIHdpZHRoOiA5MDBweDtcclxuICAgIGhlaWdodDogMjAwcHg7XHJcbiAgICBmbG9hdDogbGVmdDtcclxuICAgIG1hcmdpbi10b3A6IDMwcHg7XHJcbiAgICBtYXJnaW4tbGVmdDogMTAwcHg7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDEwMHB4O1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMjBweDtcclxuICAgIGJhY2tncm91bmQtc2l6ZTogMTAwJTtcclxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcclxuICAgIHRyYW5zaXRpb246MC41cyA7XHJcbiAgICBjbGVhcjogYm90aDtcclxuICAgIFxyXG4gICAgXHJcbn1cclxuXHJcbi50ZXh0T3ZlckltYWdlOmhvdmVye1xyXG4gICAgYmFja2dyb3VuZC1zaXplOiAxMTAlO1xyXG59XHJcblxyXG4udGV4dE92ZXJJbWFnZTphZnRlcntcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHRvcDogMTAwJTtcclxuICAgIGJvdHRvbTogMDtcclxuICAgIGxlZnQ6IDA7XHJcbiAgICByaWdodDogMDtcclxuICAgIHdoaXRlLXNwYWNlOiBwcmUtd3JhcDtcclxuICAgIHdvcmQtd3JhcDogYnJlYWstd29yZDtcclxuICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsMCwwLDApO1xyXG4gICAgY29sb3I6ICNmZmY7XHJcbiAgICBwYWRkaW5nOjhweDtcclxuICAgIGNvbnRlbnQ6IGF0dHIoZGF0YS10ZXh0KTtcclxuICAgIHRyYW5zaXRpb246IDAuNXMgO1xyXG4gICAgZm9udC1mYW1pbHk6IG1vbm9zcGFjZTtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5cclxuLnRleHRPdmVySW1hZ2U6aG92ZXI6YWZ0ZXJ7XHJcbiAgICB0b3A6IDA7XHJcbiAgICBwYWRkaW5nOiA4cHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsMCwwLDAuNik7XHJcbn1cclxuXHJcbi50ZXh0T3ZlckltYWdlOmZpcnN0LWxpbmV7XHJcbiAgICBjb2xvcjojZmZmO1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICBmb250LXNpemU6IDEuNWVtO1xyXG59XHJcblxyXG5oMiB7XHJcbiAgICBwYWRkaW5nLXRvcDogMjBweDtcclxuICAgIGZvbnQtZmFtaWx5OiBtb25vc3BhY2U7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5cclxuaDUge1xyXG4gICAgZm9udC1mYW1pbHk6IG1vbm9zcGFjZTtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgY29sb3I6cmVkO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgcGFkZGluZy1sZWZ0OiA1MHB4O1xyXG4gICAgcGFkZGluZy1yaWdodDogNTBweDtcclxufVxyXG5cclxuaW1ne1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgbWF4LXdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiBhdXRvO1xyXG4gICAgYm9yZGVyLXJhZGl1czogNSU7XHJcbiAgICBcclxuICBcclxufVxyXG5cclxuLnRodW1ibmFpbHN7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IC0xNXB4O1xyXG59XHJcblxyXG4udGh1bWJuYWlscyBhIHtcclxuICAgIGZsb2F0OiBsZWZ0O1xyXG4gICAgd2lkdGg6IDI1JTtcclxuICAgIHBhZGRpbmctcmlnaHQ6IDIwcHg7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xyXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICAgIFxyXG5cclxufVxyXG5cclxuLnRodW1ibmFpbHMgaW1nIHtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgdHJhbnNpdGlvbjogYWxsIDAuMnMgZWFzZS1pbi1vdXQ7XHJcbiAgICBcclxufVxyXG5cclxuLnRodW1ibmFpbHM6aG92ZXIgaW1nIHtcclxuICAgIG9wYWNpdHk6IDAuNjtcclxuICAgIHRyYW5zZm9ybTogc2NhbGUoMC45MCkgO1xyXG59XHJcblxyXG4udGh1bWJuYWlscyBpbWc6aG92ZXIge1xyXG4gICAgb3BhY2l0eTogMS4wO1xyXG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxLjEpIDtcclxuICAgIGJveC1zaGFkb3c6IDAgMCA1MHB4IGJsYWNrO1xyXG4gICAgXHJcbn1cclxuXHJcbiNncmlkMSB7XHJcbiAgICBoZWlnaHQ6IGF1dG87XHJcbiAgICBwYWRkaW5nLXRvcDogMjBweDtcclxuICAgIHBhZGRpbmctcmlnaHQ6IDEwMHB4O1xyXG4gICAgcGFkZGluZy1sZWZ0OiAxMDBweDtcclxuICAgIHBhZGRpbmctYm90dG9tOiA1cHg7XHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/opis-proizvoda/opis-proizvoda.component.ts":
/*!************************************************************!*\
  !*** ./src/app/opis-proizvoda/opis-proizvoda.component.ts ***!
  \************************************************************/
/*! exports provided: OpisProizvodaComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OpisProizvodaComponent", function() { return OpisProizvodaComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var src_app_proizvodi__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/proizvodi */ "./src/app/proizvodi.ts");
/* harmony import */ var src_app_shopping_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/shopping.service */ "./src/app/shopping.service.ts");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! sweetalert2 */ "./node_modules/sweetalert2/dist/sweetalert2.all.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _autentifikacija_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../autentifikacija.service */ "./src/app/autentifikacija.service.ts");








let OpisProizvodaComponent = class OpisProizvodaComponent {
    constructor(route, shoppingService, autentifikacijaService, router) {
        this.route = route;
        this.shoppingService = shoppingService;
        this.autentifikacijaService = autentifikacijaService;
        this.router = router;
        this.proizvodi = src_app_proizvodi__WEBPACK_IMPORTED_MODULE_3__["proizvodi"];
    }
    ngOnInit() {
        this.route.paramMap.subscribe(params => {
            this.proizvod = this.proizvodi[+params.get('proizvodId')];
        });
    }
    staviUKorpu(proizvod) {
        this.shoppingService.dodajUKorpu(proizvod);
        sweetalert2__WEBPACK_IMPORTED_MODULE_5___default.a.fire({
            position: 'top-end',
            type: 'success',
            title: 'Vas proizvod je dodat u korpu!',
            showConfirmButton: false,
            timer: 2000
        });
    }
};
OpisProizvodaComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
    { type: src_app_shopping_service__WEBPACK_IMPORTED_MODULE_4__["ShoppingService"] },
    { type: _autentifikacija_service__WEBPACK_IMPORTED_MODULE_6__["AutentifikacijaService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
];
OpisProizvodaComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-opis-proizvoda',
        template: __webpack_require__(/*! raw-loader!./opis-proizvoda.component.html */ "./node_modules/raw-loader/index.js!./src/app/opis-proizvoda/opis-proizvoda.component.html"),
        styles: [__webpack_require__(/*! ./opis-proizvoda.component.css */ "./src/app/opis-proizvoda/opis-proizvoda.component.css")]
    })
], OpisProizvodaComponent);



/***/ }),

/***/ "./src/app/photo-gallery/photo-gallery.component.css":
/*!***********************************************************!*\
  !*** ./src/app/photo-gallery/photo-gallery.component.css ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data-title {\r\n    font-family: monospace;\r\n    \r\n}\r\n\r\nimg{\r\n    max-width: 100%;\r\n    height: auto;\r\n  \r\n}\r\n\r\n.thumbnails{\r\n    margin-right: -15px;\r\n  \r\n    \r\n\r\n}\r\n\r\n.thumbnails a {\r\n    float: left;\r\n    width: 25%;\r\n    padding-right: 10px;\r\n    margin-bottom: 10px;\r\n    box-sizing: border-box;\r\n    \r\n\r\n}\r\n\r\n.thumbnails img {\r\n    display: block;\r\n    -webkit-transition: all 0.2s ease-in-out;\r\n    transition: all 0.2s ease-in-out;\r\n    \r\n}\r\n\r\n.thumbnails:hover img {\r\n    opacity: 0.6;\r\n    -webkit-transform: scale(0.92);\r\n            transform: scale(0.92);\r\n}\r\n\r\n.thumbnails img:hover {\r\n    opacity: 1.0;\r\n    -webkit-transform: scale(1.05) rotate(-2deg);\r\n            transform: scale(1.05) rotate(-2deg);\r\n    box-shadow: 0 0 7px rgba(0, 0, 0, 0.795);\r\n    \r\n}\r\n\r\n#grid1 {\r\n    height: auto;\r\n    padding: 100px;\r\n}\r\n\r\n#ShowMore {\r\n    float: right;\r\n    background-color: white;\r\n    padding-bottom: 100px;\r\n    \r\n\r\n}\r\n\r\n.btn {\r\n    font-family: monospace;\r\n    color: white;\r\n    clear: both;\r\n\r\n}\r\n\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGhvdG8tZ2FsbGVyeS9waG90by1nYWxsZXJ5LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxzQkFBc0I7O0FBRTFCOztBQUVBO0lBQ0ksZUFBZTtJQUNmLFlBQVk7O0FBRWhCOztBQUVBO0lBQ0ksbUJBQW1COzs7O0FBSXZCOztBQUVBO0lBQ0ksV0FBVztJQUNYLFVBQVU7SUFDVixtQkFBbUI7SUFDbkIsbUJBQW1CO0lBQ25CLHNCQUFzQjs7O0FBRzFCOztBQUVBO0lBQ0ksY0FBYztJQUNkLHdDQUFnQztJQUFoQyxnQ0FBZ0M7O0FBRXBDOztBQUVBO0lBQ0ksWUFBWTtJQUNaLDhCQUFzQjtZQUF0QixzQkFBc0I7QUFDMUI7O0FBRUE7SUFDSSxZQUFZO0lBQ1osNENBQW9DO1lBQXBDLG9DQUFvQztJQUNwQyx3Q0FBd0M7O0FBRTVDOztBQUVBO0lBQ0ksWUFBWTtJQUNaLGNBQWM7QUFDbEI7O0FBRUE7SUFDSSxZQUFZO0lBQ1osdUJBQXVCO0lBQ3ZCLHFCQUFxQjs7O0FBR3pCOztBQUVBO0lBQ0ksc0JBQXNCO0lBQ3RCLFlBQVk7SUFDWixXQUFXOztBQUVmIiwiZmlsZSI6InNyYy9hcHAvcGhvdG8tZ2FsbGVyeS9waG90by1nYWxsZXJ5LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJkYXRhLXRpdGxlIHtcclxuICAgIGZvbnQtZmFtaWx5OiBtb25vc3BhY2U7XHJcbiAgICBcclxufVxyXG5cclxuaW1ne1xyXG4gICAgbWF4LXdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiBhdXRvO1xyXG4gIFxyXG59XHJcblxyXG4udGh1bWJuYWlsc3tcclxuICAgIG1hcmdpbi1yaWdodDogLTE1cHg7XHJcbiAgXHJcbiAgICBcclxuXHJcbn1cclxuXHJcbi50aHVtYm5haWxzIGEge1xyXG4gICAgZmxvYXQ6IGxlZnQ7XHJcbiAgICB3aWR0aDogMjUlO1xyXG4gICAgcGFkZGluZy1yaWdodDogMTBweDtcclxuICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XHJcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gICAgXHJcblxyXG59XHJcblxyXG4udGh1bWJuYWlscyBpbWcge1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC4ycyBlYXNlLWluLW91dDtcclxuICAgIFxyXG59XHJcblxyXG4udGh1bWJuYWlsczpob3ZlciBpbWcge1xyXG4gICAgb3BhY2l0eTogMC42O1xyXG4gICAgdHJhbnNmb3JtOiBzY2FsZSgwLjkyKTtcclxufVxyXG5cclxuLnRodW1ibmFpbHMgaW1nOmhvdmVyIHtcclxuICAgIG9wYWNpdHk6IDEuMDtcclxuICAgIHRyYW5zZm9ybTogc2NhbGUoMS4wNSkgcm90YXRlKC0yZGVnKTtcclxuICAgIGJveC1zaGFkb3c6IDAgMCA3cHggcmdiYSgwLCAwLCAwLCAwLjc5NSk7XHJcbiAgICBcclxufVxyXG5cclxuI2dyaWQxIHtcclxuICAgIGhlaWdodDogYXV0bztcclxuICAgIHBhZGRpbmc6IDEwMHB4O1xyXG59XHJcblxyXG4jU2hvd01vcmUge1xyXG4gICAgZmxvYXQ6IHJpZ2h0O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbiAgICBwYWRkaW5nLWJvdHRvbTogMTAwcHg7XHJcbiAgICBcclxuXHJcbn1cclxuXHJcbi5idG4ge1xyXG4gICAgZm9udC1mYW1pbHk6IG1vbm9zcGFjZTtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIGNsZWFyOiBib3RoO1xyXG5cclxufVxyXG5cclxuIl19 */"

/***/ }),

/***/ "./src/app/photo-gallery/photo-gallery.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/photo-gallery/photo-gallery.component.ts ***!
  \**********************************************************/
/*! exports provided: PhotoGalleryComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PhotoGalleryComponent", function() { return PhotoGalleryComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");



let PhotoGalleryComponent = class PhotoGalleryComponent {
    constructor(_router) {
        this._router = _router;
    }
    goGallery() {
        this._router.navigate(['/gallery']);
    }
    ngOnInit() {
    }
};
PhotoGalleryComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
];
PhotoGalleryComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-photo-gallery',
        template: __webpack_require__(/*! raw-loader!./photo-gallery.component.html */ "./node_modules/raw-loader/index.js!./src/app/photo-gallery/photo-gallery.component.html"),
        styles: [__webpack_require__(/*! ./photo-gallery.component.css */ "./src/app/photo-gallery/photo-gallery.component.css")]
    })
], PhotoGalleryComponent);



/***/ }),

/***/ "./src/app/postblog.service.ts":
/*!*************************************!*\
  !*** ./src/app/postblog.service.ts ***!
  \*************************************/
/*! exports provided: PostblogService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PostblogService", function() { return PostblogService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _bloglist__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./bloglist */ "./src/app/bloglist.ts");



let PostblogService = class PostblogService {
    constructor() {
        this.bloglist = _bloglist__WEBPACK_IMPORTED_MODULE_2__["bloglist"];
        this.bloglistkorpa = [];
    }
    dodajUBlogKorpu(blog) {
        this.bloglistkorpa.push(blog);
    }
    uzmiBlog() {
        return this.bloglistkorpa;
    }
    ocistiBlogKorpu() {
        this.bloglistkorpa = [];
        return this.bloglistkorpa;
    }
};
PostblogService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], PostblogService);



/***/ }),

/***/ "./src/app/proizvodi.ts":
/*!******************************!*\
  !*** ./src/app/proizvodi.ts ***!
  \******************************/
/*! exports provided: proizvodi */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "proizvodi", function() { return proizvodi; });
const proizvodi = [
    { 'name': 'TEFAL Multicooker 8in1',
        'price': '60',
        'description': 'Upoznajte 8 u 1, kompujterizovani aparat za kuvanje pirinča koji može sve da skuva. Kada se kuvanje završi, on automatski održava najbolju temperaturu posluživanja hrane koju ste pripremili sve dok dok ne poželite da uživate u njoj. Uz 8 programa kuvanja, kuvajte pirinač i žitarice, kuvajte na pari ili sporo kuvajte sastojke do savršenih rezultata.',
        'url': 'assets/img/folder1/slika1.png',
        'url1': 'assets/img/folder1/slika1.png',
        'url2': 'assets/img/folder1/slika2.png',
        'url3': 'assets/img/folder1/slika3.png',
        'url4': 'assets/img/folder1/slika4.png',
    },
    { 'name': 'TEFAL ActiFry Express XL',
        'price': '40',
        'description': ' do 30% brža*** nego originalni model, može da pripremi 1,7 kg pomfrita za manje od 30 minuta sa samo jednom kašikom ulja! Pripremanje hrane je samo 3 minuta duže nego u standardnoj fritezi, vreme zagrevanja je uračunato u ukupno vreme pripreme hrane!Ekskluzivna patentirana nova tehnologija koja dokazuje performanse ActiFry',
        'url': 'assets/img/folder2/slika1.png',
        'url1': 'assets/img/folder2/slika1.png',
        'url2': 'assets/img/folder2/slika2.png',
        'url3': 'assets/img/folder2/slika3.png',
        'url4': 'assets/img/folder2/slika4.png',
    },
    { 'name': 'TEFAL Vitacuisine Compact',
        'price': '30',
        'description': 'Upoznajte Vitacuisine Compact, aparat za kuvanje na pari koji će vaše obroke obogatiti mnoštvom vitamina! Možete da pripremite 3 obroka zahvaljujući odvojenim korpama. Više ne morate da birate između predjela, glavnog jela ili dezerta – možete istovremeno da ih pripremite! Nema potrebe da nadzirete spremanje obroka, kada aparat završi s kuvanjem, automatski se isključuje i održava vaš obrok toplim sve dok ne poželite da ga konzumirate.',
        'url': 'assets/img/folder3/slika1.png',
        'url1': 'assets/img/folder3/slika1.png',
        'url2': 'assets/img/folder3/slika2.png',
        'url3': 'assets/img/folder3/slika3.png',
        'url4': 'assets/img/folder3/slika4.png',
    },
    { 'name': 'TEFAL Masterchef Gourmet ',
        'price': '55',
        'description': 'Masterchef Gourmet + omogućava vam da uživate u pripremi kolača. Aparat je specijalno dizajniran za ljude koje žele da nadmaše sebe. Upotrebite inspiraciju koja nadolazi.Zahvaljujući specijalno dizajniranom trećem dodatku, Flex Whisk veoma lako doseže do dna posude, razbija sve sastojke i daje vazdušaste rezultate za veoma kratko vreme! Umutite 10 belanaca, napravite 40 kapkejkova i 3 velika testa za picu zahvaljujući posudi kapaciteta 4,6L.Mešenje, mešanje, mućenje uz pomoć dodataka: veoma otporna livena metalna kuka za testo, dodatak za mešanje i Flex Whisk (fleksibilna žica za mućenje) su idealni za svakodnevnu upotrebu.',
        'url': 'assets/img/folder4/slika1.png',
        'url1': 'assets/img/folder4/slika1.png',
        'url2': 'assets/img/folder4/slika2.png',
        'url3': 'assets/img/folder4/slika3.png',
        'url4': 'assets/img/folder4/slika4.png',
    },
    { 'name': 'TEFAL Infiny Press',
        'price': '45',
        'description': 'Zahvaljujući rotacionom navoju, Infiny Press Revolution sokovnik konstantnim, blagim pritiskom cedi sav sok iz svakog sastojka. Sporo rotirajući mehanizam pruža delikatan pritisak koji omogućava da se iscedi ono najbolje iz svih vrsta voća, povrća ili čak svežeg bilja. Infiny Press Revolution zadržava ne samo neponovljiv ukus svakog svežeg sastojka, već i svih drugih hranljivih sastojaka. Zahvaljujući njegovoj tehnologiji pravljenja soka, on cedi 35% više soka, 30% više vitamina C i 75% više antioksidanasa nego tradicionalni centrifugalni sokovnik.',
        'url': 'assets/img/folder5/slika1.png',
        'url1': 'assets/img/folder5/slika1.png',
        'url2': 'assets/img/folder5/slika2.png',
        'url3': 'assets/img/folder5/slika3.png',
        'url4': 'assets/img/folder5/slika4.png',
    },
    { 'name': 'TEFAL Fresh Express +',
        'price': '20',
        'description': 'Fresh Express + sa 5 različitih konusnih dodataka omogućava vam da rendate, sečete na kriške, iseckate ili rebrasto nasečete povrće, voće, sir ili čokoladu direktno na tanjir, spremno za posluživanje!  Dodaci su obojeni različitim bojama pomoći će vam da lako odaberete izaberete dodatak koji vam je potreban a takođe dodaju boje vašoj kuhinji. Osim toga, Fresh Express + ima veliki otvor za unos hrane a to znači da više ne morate unapred seći povrće! ',
        'url': 'assets/img/folder6/slika1.png',
        'url1': 'assets/img/folder6/slika1.png',
        'url2': 'assets/img/folder6/slika2.png',
        'url3': 'assets/img/folder6/slika3.png',
        'url4': 'assets/img/folder6/slika4.png',
    },
    { 'name': 'TEFAL Pain & Délices ',
        'price': '100',
        'description': 'Pain & Délices je najkompletnija i najfunkcionalnija Tefal kućna pekara. Vaša mašta neće imati limit! Uživajte u ukusima ne samo svežeg i ukusnog domaćeg hleba nego i u pripremi pizza testa, sveže paste, džema, ovsene kaše i žitarica i mlečnih priprema. U 20 programa različitih priprema zdravog i ukusnog hleba i kolača ulaze i 3 bezglutenska programa. Otkrijte ih koristeći knjigu recepata! Zahvaljujući 3 posebna programa + posudu za jogurt od 1L, sada možete vašoj porodici da pripremite i mlečne proizvode: jogurt & tečni jogurt i mladi sir. Bilo da malo ili u većoj meri konzumirate hleb, bilo da živite sami ili sa porodicom, imate izbor 3 odabira veličine od 500g do 1kg. Kompaktna, Pain & Delices kućna pekara je modernog i elgantnog dizajna, savršeno se uklapa u vašu kuhinju. Uživajte u ukusu svežeg i toplog hleba zahvaljujući funkciji odloženog starta i do 15 sati: šta je slađe od mirisa svežeg hleba ujutru! ',
        'url': 'assets/img/folder7/slika1.png',
        'url1': 'assets/img/folder7/slika1.png',
        'url2': 'assets/img/folder7/slika2.png',
        'url3': 'assets/img/folder7/slika3.png',
        'url4': 'assets/img/folder7/slika4.png',
    },
    { 'name': 'TEFAL OptiGrill+ Snacking & Baking GC714834',
        'price': '70',
        'description': 'Upoznajte OptiGrill+ Snacking&Baking, našu inovaciju sa manuelnim načinom rada koji sadrži četiri nivoa temperature za beskrajne mogućnosti kuvanja. Za još više mogućnosti tu je poseban dodatak za pečenje koji omogućava da pečete, podgrevate ili samo zapečete hranu zahvaljujući manuelnom načinu rada i 4 temperature.Termoizolovane ručke za vašu bezbednost i mogućnost pranja u mašini za posuđa, za veću praktičnost. Unapređen tehnologijom "Automatskog senzora kuvanja", OptiGrill+ odmah detektuje broj namirnica na površini za pečenje i procenjuje debljinu namirnice kako bi automatski podesio temperaturu i vreme za pečenje za savršene rezultate. Svetolosni indikator i zvučni sistem omogućuju direktni nadzor za veoma precizno kuvanje, pripremu mesa baš kako volite: slabo pečeno, srednje pečeno, dobro pečeno. 6 programa za kuvanje: burgeri, živina, sendviči, kobasice, crveno meso i riba plus program za smrznutu hranu i manuelni način rada sa 4 podešavanja temperature. Dodatna svojstva uključuju nelepljive aluminijumske ploče, površine 600 cm2, dovoljno za posluživanje 2 do 4 osobe i velika tacna za sokove, pod uglom od 7°. ',
        'url': 'assets/img/folder8/slika1.png',
        'url1': 'assets/img/folder8/slika1.png',
        'url2': 'assets/img/folder8/slika2.png',
        'url3': 'assets/img/folder8/slika3.png',
        'url4': 'assets/img/folder8/slika4.png',
    }
];


/***/ }),

/***/ "./src/app/serveri.service.ts":
/*!************************************!*\
  !*** ./src/app/serveri.service.ts ***!
  \************************************/
/*! exports provided: ServeriService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ServeriService", function() { return ServeriService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _autentifikacija_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./autentifikacija.service */ "./src/app/autentifikacija.service.ts");




let ServeriService = class ServeriService {
    constructor(httpClient, autentifikacijaService) {
        this.httpClient = httpClient;
        this.autentifikacijaService = autentifikacijaService;
    }
    vratiServere() {
        const token = this.autentifikacijaService.vratiToken();
        return this.httpClient.get('https://tefal-shop.firebaseio.com/data.json?auth=' + token);
    }
    skladistiServere(serveri) {
        const token = this.autentifikacijaService.vratiToken();
        return this.httpClient.put('https://tefal-shop.firebaseio.com/data.json?auth=' + token, serveri);
    }
};
ServeriService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] },
    { type: _autentifikacija_service__WEBPACK_IMPORTED_MODULE_3__["AutentifikacijaService"] }
];
ServeriService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
], ServeriService);



/***/ }),

/***/ "./src/app/shop/shop.component.css":
/*!*****************************************!*\
  !*** ./src/app/shop/shop.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".card{\r\n    text-align: center;\r\n    margin-left: 100px;\r\n    margin-right: 40px;\r\n    margin-bottom: 40px;\r\n    padding: 10px;\r\n    color: white;\r\n    background-color: rgba(238, 8, 8, 0.705);\r\n    font-family: monospace;\r\n    border: 1px solid white;\r\n    \r\n    \r\n}\r\n\r\nimg{\r\n    height: 300px;\r\n     width: auto;\r\n     border: 2px solid white;\r\n     background-color: white;\r\n     \r\n}\r\n\r\n.card-title{\r\n    padding-top: 10px;\r\n    font-weight: bold;\r\n}\r\n\r\nh3 {\r\n    font-family: monospace;\r\n    color:  rgb(202, 1, 1);\r\n    padding-top: 20px;\r\n    padding-left: 50px;\r\n    padding-bottom: 10px;\r\n    font-weight: bold;\r\n    text-align: center;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hvcC9zaG9wLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxrQkFBa0I7SUFDbEIsa0JBQWtCO0lBQ2xCLGtCQUFrQjtJQUNsQixtQkFBbUI7SUFDbkIsYUFBYTtJQUNiLFlBQVk7SUFDWix3Q0FBd0M7SUFDeEMsc0JBQXNCO0lBQ3RCLHVCQUF1Qjs7O0FBRzNCOztBQUVBO0lBQ0ksYUFBYTtLQUNaLFdBQVc7S0FDWCx1QkFBdUI7S0FDdkIsdUJBQXVCOztBQUU1Qjs7QUFFQTtJQUNJLGlCQUFpQjtJQUNqQixpQkFBaUI7QUFDckI7O0FBRUE7SUFDSSxzQkFBc0I7SUFDdEIsc0JBQXNCO0lBQ3RCLGlCQUFpQjtJQUNqQixrQkFBa0I7SUFDbEIsb0JBQW9CO0lBQ3BCLGlCQUFpQjtJQUNqQixrQkFBa0I7QUFDdEIiLCJmaWxlIjoic3JjL2FwcC9zaG9wL3Nob3AuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jYXJke1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgbWFyZ2luLWxlZnQ6IDEwMHB4O1xyXG4gICAgbWFyZ2luLXJpZ2h0OiA0MHB4O1xyXG4gICAgbWFyZ2luLWJvdHRvbTogNDBweDtcclxuICAgIHBhZGRpbmc6IDEwcHg7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDIzOCwgOCwgOCwgMC43MDUpO1xyXG4gICAgZm9udC1mYW1pbHk6IG1vbm9zcGFjZTtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkIHdoaXRlO1xyXG4gICAgXHJcbiAgICBcclxufVxyXG5cclxuaW1ne1xyXG4gICAgaGVpZ2h0OiAzMDBweDtcclxuICAgICB3aWR0aDogYXV0bztcclxuICAgICBib3JkZXI6IDJweCBzb2xpZCB3aGl0ZTtcclxuICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxuICAgICBcclxufVxyXG5cclxuLmNhcmQtdGl0bGV7XHJcbiAgICBwYWRkaW5nLXRvcDogMTBweDtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG59XHJcblxyXG5oMyB7XHJcbiAgICBmb250LWZhbWlseTogbW9ub3NwYWNlO1xyXG4gICAgY29sb3I6ICByZ2IoMjAyLCAxLCAxKTtcclxuICAgIHBhZGRpbmctdG9wOiAyMHB4O1xyXG4gICAgcGFkZGluZy1sZWZ0OiA1MHB4O1xyXG4gICAgcGFkZGluZy1ib3R0b206IDEwcHg7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/shop/shop.component.ts":
/*!****************************************!*\
  !*** ./src/app/shop/shop.component.ts ***!
  \****************************************/
/*! exports provided: ShopComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShopComponent", function() { return ShopComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_app_proizvodi__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/proizvodi */ "./src/app/proizvodi.ts");
/* harmony import */ var src_app_shopping_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/shopping.service */ "./src/app/shopping.service.ts");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! sweetalert2 */ "./node_modules/sweetalert2/dist/sweetalert2.all.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _autentifikacija_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../autentifikacija.service */ "./src/app/autentifikacija.service.ts");







let ShopComponent = class ShopComponent {
    constructor(shoppingService, autentifikacijaService, router) {
        this.shoppingService = shoppingService;
        this.autentifikacijaService = autentifikacijaService;
        this.router = router;
        this.proizvodi = src_app_proizvodi__WEBPACK_IMPORTED_MODULE_2__["proizvodi"];
    }
    ngOnInit() {
    }
    staviUKorpu(proizvod) {
        this.shoppingService.dodajUKorpu(proizvod);
        sweetalert2__WEBPACK_IMPORTED_MODULE_4___default.a.fire({
            position: 'top-end',
            type: 'success',
            title: 'Vas proizvod je dodat u korpu!',
            showConfirmButton: false,
            timer: 2000
        });
    }
};
ShopComponent.ctorParameters = () => [
    { type: src_app_shopping_service__WEBPACK_IMPORTED_MODULE_3__["ShoppingService"] },
    { type: _autentifikacija_service__WEBPACK_IMPORTED_MODULE_6__["AutentifikacijaService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] }
];
ShopComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-shop',
        template: __webpack_require__(/*! raw-loader!./shop.component.html */ "./node_modules/raw-loader/index.js!./src/app/shop/shop.component.html"),
        styles: [__webpack_require__(/*! ./shop.component.css */ "./src/app/shop/shop.component.css")]
    })
], ShopComponent);



/***/ }),

/***/ "./src/app/shopping.service.ts":
/*!*************************************!*\
  !*** ./src/app/shopping.service.ts ***!
  \*************************************/
/*! exports provided: ShoppingService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShoppingService", function() { return ShoppingService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _proizvodi__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./proizvodi */ "./src/app/proizvodi.ts");



let ShoppingService = class ShoppingService {
    constructor() {
        this.proizvodi = _proizvodi__WEBPACK_IMPORTED_MODULE_2__["proizvodi"];
        this.korpa = [];
    }
    dodajUKorpu(proizvod) {
        this.korpa.push(proizvod);
    }
    uzmiPredmete() {
        return this.korpa;
    }
    ocistiKorpu() {
        this.korpa = [];
        return this.korpa;
    }
};
ShoppingService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], ShoppingService);



/***/ }),

/***/ "./src/app/signin/signin.component.css":
/*!*********************************************!*\
  !*** ./src/app/signin/signin.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#section{\r\n    background: url(/assets/pozadinacontact.jpg) no-repeat;\r\n    background-size: cover;\r\n    height: 100%;\r\n}\r\n#section .bckg{\r\n    background-color: rgba(12, 12, 12, 0.712);\r\n    position: relative;\r\n    width: 100%;\r\n    height: 100%;\r\n    text-align: center;\r\n    padding: 150px;\r\n}\r\n.card-form{\r\n   opacity: 0.9;\r\n   background-color:  rgba(238, 8, 8, 0.705);\r\n   border-radius: 5%;\r\n   border: 2px solid black;\r\n}\r\n#email, #password {\r\n    font-family: monospace;\r\n    font-size: 16px;\r\n}\r\n.btn {\r\n    color: white;\r\n    font-family: monospace;\r\n    font-weight: bold;\r\n    border: 2px solid black;\r\n}\r\n.display-4, h4 {\r\n    color: rgb(202, 1, 1);\r\n    font-family: monospace;\r\n    font-weight: bold;\r\n\r\n}\r\n.alert {\r\n    font-size: 11px;\r\n    font-weight: bold;\r\n    color: red;\r\n    font-family: monospace;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2lnbmluL3NpZ25pbi5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksc0RBQXNEO0lBQ3RELHNCQUFzQjtJQUN0QixZQUFZO0FBQ2hCO0FBQ0E7SUFDSSx5Q0FBeUM7SUFDekMsa0JBQWtCO0lBQ2xCLFdBQVc7SUFDWCxZQUFZO0lBQ1osa0JBQWtCO0lBQ2xCLGNBQWM7QUFDbEI7QUFDQTtHQUNHLFlBQVk7R0FDWix5Q0FBeUM7R0FDekMsaUJBQWlCO0dBQ2pCLHVCQUF1QjtBQUMxQjtBQUVBO0lBQ0ksc0JBQXNCO0lBQ3RCLGVBQWU7QUFDbkI7QUFFQTtJQUNJLFlBQVk7SUFDWixzQkFBc0I7SUFDdEIsaUJBQWlCO0lBQ2pCLHVCQUF1QjtBQUMzQjtBQUVBO0lBQ0kscUJBQXFCO0lBQ3JCLHNCQUFzQjtJQUN0QixpQkFBaUI7O0FBRXJCO0FBRUE7SUFDSSxlQUFlO0lBQ2YsaUJBQWlCO0lBQ2pCLFVBQVU7SUFDVixzQkFBc0I7QUFDMUIiLCJmaWxlIjoic3JjL2FwcC9zaWduaW4vc2lnbmluLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIjc2VjdGlvbntcclxuICAgIGJhY2tncm91bmQ6IHVybCgvYXNzZXRzL3BvemFkaW5hY29udGFjdC5qcGcpIG5vLXJlcGVhdDtcclxuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbn1cclxuI3NlY3Rpb24gLmJja2d7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDEyLCAxMiwgMTIsIDAuNzEyKTtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgcGFkZGluZzogMTUwcHg7XHJcbn1cclxuLmNhcmQtZm9ybXtcclxuICAgb3BhY2l0eTogMC45O1xyXG4gICBiYWNrZ3JvdW5kLWNvbG9yOiAgcmdiYSgyMzgsIDgsIDgsIDAuNzA1KTtcclxuICAgYm9yZGVyLXJhZGl1czogNSU7XHJcbiAgIGJvcmRlcjogMnB4IHNvbGlkIGJsYWNrO1xyXG59XHJcblxyXG4jZW1haWwsICNwYXNzd29yZCB7XHJcbiAgICBmb250LWZhbWlseTogbW9ub3NwYWNlO1xyXG4gICAgZm9udC1zaXplOiAxNnB4O1xyXG59XHJcblxyXG4uYnRuIHtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIGZvbnQtZmFtaWx5OiBtb25vc3BhY2U7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgIGJvcmRlcjogMnB4IHNvbGlkIGJsYWNrO1xyXG59XHJcblxyXG4uZGlzcGxheS00LCBoNCB7XHJcbiAgICBjb2xvcjogcmdiKDIwMiwgMSwgMSk7XHJcbiAgICBmb250LWZhbWlseTogbW9ub3NwYWNlO1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcblxyXG59XHJcblxyXG4uYWxlcnQge1xyXG4gICAgZm9udC1zaXplOiAxMXB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICBjb2xvcjogcmVkO1xyXG4gICAgZm9udC1mYW1pbHk6IG1vbm9zcGFjZTtcclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/signin/signin.component.ts":
/*!********************************************!*\
  !*** ./src/app/signin/signin.component.ts ***!
  \********************************************/
/*! exports provided: SigninComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SigninComponent", function() { return SigninComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _autentifikacija_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../autentifikacija.service */ "./src/app/autentifikacija.service.ts");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! sweetalert2 */ "./node_modules/sweetalert2/dist/sweetalert2.all.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_3__);




let SigninComponent = class SigninComponent {
    constructor(autentifikacijaService) {
        this.autentifikacijaService = autentifikacijaService;
    }
    ngOnInit() {
    }
    prijaviSe(form) {
        const email = form.value.email;
        const sifra = form.value.sifra;
        this.autentifikacijaService.prijaviKorisnika(email, sifra);
        sweetalert2__WEBPACK_IMPORTED_MODULE_3___default.a.fire('Uspesno ste se registrovali, uzivajte u kopovini.', '', 'success');
    }
};
SigninComponent.ctorParameters = () => [
    { type: _autentifikacija_service__WEBPACK_IMPORTED_MODULE_2__["AutentifikacijaService"] }
];
SigninComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-signin',
        template: __webpack_require__(/*! raw-loader!./signin.component.html */ "./node_modules/raw-loader/index.js!./src/app/signin/signin.component.html"),
        styles: [__webpack_require__(/*! ./signin.component.css */ "./src/app/signin/signin.component.css")]
    })
], SigninComponent);



/***/ }),

/***/ "./src/app/signup/signup.component.css":
/*!*********************************************!*\
  !*** ./src/app/signup/signup.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#section{\r\n    background: url(/assets/pozadinacontact.jpg) no-repeat;\r\n    background-size: cover;\r\n    height: 100%;\r\n}\r\n#section .bckg{\r\n    background-color: rgba(12, 12, 12, 0.712);\r\n    position: relative;\r\n    width: 100%;\r\n    height: 100%;\r\n    text-align: center;\r\n    padding: 150px;\r\n}\r\n.card-form{\r\n   opacity: 0.9;\r\n   background-color: green ;\r\n   border-radius: 5%;\r\n   border: 2px solid black;\r\n}\r\n#email, #password {\r\n    font-family: monospace;\r\n    font-size: 16px;\r\n}\r\n.btn {\r\n    color: white;\r\n    font-family: monospace;\r\n    font-weight: bold;\r\n    border: 2px solid black;\r\n}\r\n.display-4, h4 {\r\n    color: green;\r\n    font-family: monospace;\r\n    font-weight: bold;\r\n\r\n}\r\n.alert {\r\n    font-size: 11px;\r\n    font-weight: bold;\r\n    color: red;\r\n    font-family: monospace;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2lnbnVwL3NpZ251cC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksc0RBQXNEO0lBQ3RELHNCQUFzQjtJQUN0QixZQUFZO0FBQ2hCO0FBQ0E7SUFDSSx5Q0FBeUM7SUFDekMsa0JBQWtCO0lBQ2xCLFdBQVc7SUFDWCxZQUFZO0lBQ1osa0JBQWtCO0lBQ2xCLGNBQWM7QUFDbEI7QUFDQTtHQUNHLFlBQVk7R0FDWix3QkFBd0I7R0FDeEIsaUJBQWlCO0dBQ2pCLHVCQUF1QjtBQUMxQjtBQUVBO0lBQ0ksc0JBQXNCO0lBQ3RCLGVBQWU7QUFDbkI7QUFFQTtJQUNJLFlBQVk7SUFDWixzQkFBc0I7SUFDdEIsaUJBQWlCO0lBQ2pCLHVCQUF1QjtBQUMzQjtBQUVBO0lBQ0ksWUFBWTtJQUNaLHNCQUFzQjtJQUN0QixpQkFBaUI7O0FBRXJCO0FBRUE7SUFDSSxlQUFlO0lBQ2YsaUJBQWlCO0lBQ2pCLFVBQVU7SUFDVixzQkFBc0I7QUFDMUIiLCJmaWxlIjoic3JjL2FwcC9zaWdudXAvc2lnbnVwLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIjc2VjdGlvbntcclxuICAgIGJhY2tncm91bmQ6IHVybCgvYXNzZXRzL3BvemFkaW5hY29udGFjdC5qcGcpIG5vLXJlcGVhdDtcclxuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbn1cclxuI3NlY3Rpb24gLmJja2d7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDEyLCAxMiwgMTIsIDAuNzEyKTtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgcGFkZGluZzogMTUwcHg7XHJcbn1cclxuLmNhcmQtZm9ybXtcclxuICAgb3BhY2l0eTogMC45O1xyXG4gICBiYWNrZ3JvdW5kLWNvbG9yOiBncmVlbiA7XHJcbiAgIGJvcmRlci1yYWRpdXM6IDUlO1xyXG4gICBib3JkZXI6IDJweCBzb2xpZCBibGFjaztcclxufVxyXG5cclxuI2VtYWlsLCAjcGFzc3dvcmQge1xyXG4gICAgZm9udC1mYW1pbHk6IG1vbm9zcGFjZTtcclxuICAgIGZvbnQtc2l6ZTogMTZweDtcclxufVxyXG5cclxuLmJ0biB7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICBmb250LWZhbWlseTogbW9ub3NwYWNlO1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICBib3JkZXI6IDJweCBzb2xpZCBibGFjaztcclxufVxyXG5cclxuLmRpc3BsYXktNCwgaDQge1xyXG4gICAgY29sb3I6IGdyZWVuO1xyXG4gICAgZm9udC1mYW1pbHk6IG1vbm9zcGFjZTtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG5cclxufVxyXG5cclxuLmFsZXJ0IHtcclxuICAgIGZvbnQtc2l6ZTogMTFweDtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgY29sb3I6IHJlZDtcclxuICAgIGZvbnQtZmFtaWx5OiBtb25vc3BhY2U7XHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/signup/signup.component.ts":
/*!********************************************!*\
  !*** ./src/app/signup/signup.component.ts ***!
  \********************************************/
/*! exports provided: SignupComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignupComponent", function() { return SignupComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _autentifikacija_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../autentifikacija.service */ "./src/app/autentifikacija.service.ts");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! sweetalert2 */ "./node_modules/sweetalert2/dist/sweetalert2.all.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_3__);




let SignupComponent = class SignupComponent {
    constructor(autentifikacijaService) {
        this.autentifikacijaService = autentifikacijaService;
    }
    ngOnInit() {
    }
    registrujSe(form) {
        const email = form.value.email;
        const sifra = form.value.sifra;
        this.autentifikacijaService.registrujKorisnika(email, sifra);
        sweetalert2__WEBPACK_IMPORTED_MODULE_3___default.a.fire('Uspesno ste se ulogovali, uzivajte u kupovini.', '', 'success');
    }
};
SignupComponent.ctorParameters = () => [
    { type: _autentifikacija_service__WEBPACK_IMPORTED_MODULE_2__["AutentifikacijaService"] }
];
SignupComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-signup',
        template: __webpack_require__(/*! raw-loader!./signup.component.html */ "./node_modules/raw-loader/index.js!./src/app/signup/signup.component.html"),
        styles: [__webpack_require__(/*! ./signup.component.css */ "./src/app/signup/signup.component.css")]
    })
], SignupComponent);



/***/ }),

/***/ "./src/app/tefalshop-pocetna/tefalshop-pocetna.component.css":
/*!*******************************************************************!*\
  !*** ./src/app/tefalshop-pocetna/tefalshop-pocetna.component.css ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "h1 {\r\n    font-family: monospace;\r\n    font-weight: bold;\r\n    color: rgb(202, 1, 1);\r\n    font-size: 40px;\r\n}\r\n\r\n#p1 {\r\n    font-family: monospace;\r\n    font-weight: bold;\r\n    font-size: 20px;\r\n    color:  rgb(202, 1, 1);\r\n    padding-left: 100px;\r\n    padding-right: 100px;\r\n    padding-top: 20px;\r\n}\r\n\r\nimg {\r\n    width: 200px;\r\n    height: 50px;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdGVmYWxzaG9wLXBvY2V0bmEvdGVmYWxzaG9wLXBvY2V0bmEuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLHNCQUFzQjtJQUN0QixpQkFBaUI7SUFDakIscUJBQXFCO0lBQ3JCLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSxzQkFBc0I7SUFDdEIsaUJBQWlCO0lBQ2pCLGVBQWU7SUFDZixzQkFBc0I7SUFDdEIsbUJBQW1CO0lBQ25CLG9CQUFvQjtJQUNwQixpQkFBaUI7QUFDckI7O0FBRUE7SUFDSSxZQUFZO0lBQ1osWUFBWTtBQUNoQiIsImZpbGUiOiJzcmMvYXBwL3RlZmFsc2hvcC1wb2NldG5hL3RlZmFsc2hvcC1wb2NldG5hLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJoMSB7XHJcbiAgICBmb250LWZhbWlseTogbW9ub3NwYWNlO1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICBjb2xvcjogcmdiKDIwMiwgMSwgMSk7XHJcbiAgICBmb250LXNpemU6IDQwcHg7XHJcbn1cclxuXHJcbiNwMSB7XHJcbiAgICBmb250LWZhbWlseTogbW9ub3NwYWNlO1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgICBjb2xvcjogIHJnYigyMDIsIDEsIDEpO1xyXG4gICAgcGFkZGluZy1sZWZ0OiAxMDBweDtcclxuICAgIHBhZGRpbmctcmlnaHQ6IDEwMHB4O1xyXG4gICAgcGFkZGluZy10b3A6IDIwcHg7XHJcbn1cclxuXHJcbmltZyB7XHJcbiAgICB3aWR0aDogMjAwcHg7XHJcbiAgICBoZWlnaHQ6IDUwcHg7XHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/tefalshop-pocetna/tefalshop-pocetna.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/tefalshop-pocetna/tefalshop-pocetna.component.ts ***!
  \******************************************************************/
/*! exports provided: TefalshopPocetnaComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TefalshopPocetnaComponent", function() { return TefalshopPocetnaComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let TefalshopPocetnaComponent = class TefalshopPocetnaComponent {
    constructor() {
        this.appName = 'Tefal Shop';
    }
    ngOnInit() {
    }
};
TefalshopPocetnaComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-tefalshop-pocetna',
        template: __webpack_require__(/*! raw-loader!./tefalshop-pocetna.component.html */ "./node_modules/raw-loader/index.js!./src/app/tefalshop-pocetna/tefalshop-pocetna.component.html"),
        styles: [__webpack_require__(/*! ./tefalshop-pocetna.component.css */ "./src/app/tefalshop-pocetna/tefalshop-pocetna.component.css")]
    })
], TefalshopPocetnaComponent);



/***/ }),

/***/ "./src/app/videofile/videofile.component.css":
/*!***************************************************!*\
  !*** ./src/app/videofile/videofile.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#video1 {\r\n    height: 250px;\r\n    width: 250px;\r\n    padding-right: 10px;\r\n}\r\n\r\n#audio1 {\r\n    width: 400px;\r\n   \r\n}\r\n\r\n#table1 {\r\n    \r\n        margin-left:auto; \r\n        margin-right:auto;\r\n        font-family: monospace;\r\n        color:  rgb(202, 1, 1);\r\n      \r\n}\r\n\r\ntd {\r\n    font-family: monospace;\r\n    font-weight: bold;\r\n}\r\n\r\n#divtable1 {\r\n    text-align: center;\r\n    margin-left: auto;\r\n    margin-right: auto;\r\n}\r\n\r\n#hedertable1 {\r\n    font-family: monospace;\r\n    color:  rgb(202, 1, 1);\r\n    font-size: 20px;\r\n}\r\n\r\nh2{\r\n    font-family: monospace;\r\n    color:  rgb(202, 1, 1);\r\n    font-weight: bold;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdmlkZW9maWxlL3ZpZGVvZmlsZS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksYUFBYTtJQUNiLFlBQVk7SUFDWixtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSxZQUFZOztBQUVoQjs7QUFFQTs7UUFFUSxnQkFBZ0I7UUFDaEIsaUJBQWlCO1FBQ2pCLHNCQUFzQjtRQUN0QixzQkFBc0I7O0FBRTlCOztBQUVBO0lBQ0ksc0JBQXNCO0lBQ3RCLGlCQUFpQjtBQUNyQjs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixpQkFBaUI7SUFDakIsa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksc0JBQXNCO0lBQ3RCLHNCQUFzQjtJQUN0QixlQUFlO0FBQ25COztBQUVBO0lBQ0ksc0JBQXNCO0lBQ3RCLHNCQUFzQjtJQUN0QixpQkFBaUI7QUFDckIiLCJmaWxlIjoic3JjL2FwcC92aWRlb2ZpbGUvdmlkZW9maWxlLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIjdmlkZW8xIHtcclxuICAgIGhlaWdodDogMjUwcHg7XHJcbiAgICB3aWR0aDogMjUwcHg7XHJcbiAgICBwYWRkaW5nLXJpZ2h0OiAxMHB4O1xyXG59XHJcblxyXG4jYXVkaW8xIHtcclxuICAgIHdpZHRoOiA0MDBweDtcclxuICAgXHJcbn1cclxuXHJcbiN0YWJsZTEge1xyXG4gICAgXHJcbiAgICAgICAgbWFyZ2luLWxlZnQ6YXV0bzsgXHJcbiAgICAgICAgbWFyZ2luLXJpZ2h0OmF1dG87XHJcbiAgICAgICAgZm9udC1mYW1pbHk6IG1vbm9zcGFjZTtcclxuICAgICAgICBjb2xvcjogIHJnYigyMDIsIDEsIDEpO1xyXG4gICAgICBcclxufVxyXG5cclxudGQge1xyXG4gICAgZm9udC1mYW1pbHk6IG1vbm9zcGFjZTtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG59XHJcblxyXG4jZGl2dGFibGUxIHtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xyXG4gICAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xyXG59XHJcblxyXG4jaGVkZXJ0YWJsZTEge1xyXG4gICAgZm9udC1mYW1pbHk6IG1vbm9zcGFjZTtcclxuICAgIGNvbG9yOiAgcmdiKDIwMiwgMSwgMSk7XHJcbiAgICBmb250LXNpemU6IDIwcHg7XHJcbn1cclxuXHJcbmgye1xyXG4gICAgZm9udC1mYW1pbHk6IG1vbm9zcGFjZTtcclxuICAgIGNvbG9yOiAgcmdiKDIwMiwgMSwgMSk7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/videofile/videofile.component.ts":
/*!**************************************************!*\
  !*** ./src/app/videofile/videofile.component.ts ***!
  \**************************************************/
/*! exports provided: VideofileComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VideofileComponent", function() { return VideofileComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let VideofileComponent = class VideofileComponent {
    constructor() { }
    ngOnInit() {
    }
};
VideofileComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-videofile',
        template: __webpack_require__(/*! raw-loader!./videofile.component.html */ "./node_modules/raw-loader/index.js!./src/app/videofile/videofile.component.html"),
        styles: [__webpack_require__(/*! ./videofile.component.css */ "./src/app/videofile/videofile.component.css")]
    })
], VideofileComponent);



/***/ }),

/***/ "./src/app/zastita.service.ts":
/*!************************************!*\
  !*** ./src/app/zastita.service.ts ***!
  \************************************/
/*! exports provided: ZastitaService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ZastitaService", function() { return ZastitaService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _autentifikacija_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./autentifikacija.service */ "./src/app/autentifikacija.service.ts");



let ZastitaService = class ZastitaService {
    constructor(autentifikacijaService) {
        this.autentifikacijaService = autentifikacijaService;
    }
    canActivate(route, state) {
        return this.autentifikacijaService.prijavljen();
    }
};
ZastitaService.ctorParameters = () => [
    { type: _autentifikacija_service__WEBPACK_IMPORTED_MODULE_2__["AutentifikacijaService"] }
];
ZastitaService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
], ZastitaService);



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false,
    firebase: {
        apiKey: "AIzaSyCGhXSQwGqYaQb2fuicX3VhSAUpAdE6RU4",
        authDomain: "tefal-shop.firebaseapp.com",
        databaseURL: "https://tefal-shop.firebaseio.com",
        projectId: "tefal-shop",
        storageBucket: "",
        messagingSenderId: "762647253062",
        appId: "1:762647253062:web:007fc76be982c109"
    }
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\Tosa\Desktop\Tosa FRONTEND APP\TefalShop\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map