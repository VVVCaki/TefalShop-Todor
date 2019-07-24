import { Injectable } from "@angular/core";
import * as rxjs from 'rxjs';

import { HttpClient } from "@angular/common/http";
import { AutentifikacijaService } from "./autentifikacija.service";

@Injectable()
export class ServeriService {
    constructor(private httpClient: HttpClient,
    private autentifikacijaService:AutentifikacijaService) { }

    vratiServere() {
        const token = this.autentifikacijaService.vratiToken();
        return this.httpClient.get<any[]>('https://tefal-shop.firebaseio.com/data.json?auth=' + token);
    }

    skladistiServere(serveri: any[]) {
        const token = this.autentifikacijaService.vratiToken();
        return this.httpClient.put('https://tefal-shop.firebaseio.com/data.json?auth=' + token, serveri);
    }
}