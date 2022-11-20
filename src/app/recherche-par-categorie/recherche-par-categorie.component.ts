import { Categorie } from './../model/categorie.model';
import { ProduitService } from './../services/produit.service';
import { Component, OnInit } from '@angular/core';
import { Produit } from '../model/produit.model';
@Component({
  selector: 'app-recherche-par-categorie',
  templateUrl: './recherche-par-categorie.component.html',
  styles: [
  ]
})
export class RechercheParCategorieComponent implements OnInit {
  produits! : Produit[];
  categories! : Categorie[];
  IdCategorie! : number;

  constructor(private produitservice: ProduitService) { }

  ngOnInit(): void {
    this.produits = [];
    this.categories = this.produitservice.listeCategories();
  }
  supprimerProduit(p: Produit)
{
//console.log(p);
let conf = confirm("Etes-vous sûr ?");
if (conf)
  this.produitservice.supprimerProduit(p);
}

onChange(){
this.produits = this.produitservice.rechercherParCategorie(this.IdCategorie);
}

}
