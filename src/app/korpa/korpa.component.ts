import { Component, OnInit } from '@angular/core';
import { proizvodi } from 'src/app/proizvodi';
import { ShoppingService } from 'src/app/shopping.service';
import { SweetAlert2Module } from '@sweetalert2/ngx-sweetalert2';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';


@Component({
  selector: 'app-korpa',
  templateUrl: './korpa.component.html',
  styleUrls: ['./korpa.component.css']
})
export class KorpaComponent implements OnInit {

  korpa;
  suma: number = 0;
  cene = [];

  constructor(private shoppingservice: ShoppingService,
    private router: Router,) {
    this.korpa = this.shoppingservice.uzmiPredmete();
   }

  ngOnInit() {
  }

  isprazniKorpu(){
    this.korpa = this.shoppingservice.ocistiKorpu();
    Swal.fire({
      position: 'top-end',
      type: 'success',
      title: 'Ispaznili ste Vasu kopru!',
      showConfirmButton: false,
      timer: 2000
    })
  }

  brojStavki(){
    return this.korpa.length;
  }

  izvrsiKupovinu(){
    const swalWithBootstrapButtons = Swal.mixin({
      customClass: {
        cancelButton: 'btn btn-danger',
        confirmButton: 'btn btn-success'
      },
      buttonsStyling: false,
    })
    
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
        swalWithBootstrapButtons.fire(
          'Uspesno ste izvrsili kupovinu!',
          'Ocekujte porudzbinu u naredna 3 radna dana.',
          'success'
        ),
        this.korpa = this.shoppingservice.ocistiKorpu();
        this.router.navigate(['/home']);
      } else if (
        // Read more about handling dismissals
        result.dismiss === Swal.DismissReason.cancel
      ) {
        swalWithBootstrapButtons.fire(
          'Otkazali ste kupovinu',
          'Mozete promeniti vasu porudzbinu. :)',
          'error'
        )
      }
    })
  }
}
