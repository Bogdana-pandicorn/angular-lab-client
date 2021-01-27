import { Component, OnInit } from '@angular/core';
import { ProductsService } from 'src/app/services/products.service';
import { ProductModel } from 'src/app/models/product';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  public eveningProducts: ProductModel[] = [];
  public weddingProducts: ProductModel[] = [];
  public accessoriesProducts: ProductModel[] = [];
  public searchStatus = false;
  public searchStr: string;
  public searchProducts: ProductModel[] = [];

  constructor(private myProductsService: ProductsService) { }

  ngOnInit(): void {
    const eveningProductsId = "600dc0839b275575ddcedc37";
    const weddingProductsId = "600dc0a69b275575ddcedc38";
    const accessoriesProductsId = "600dc0b19b275575ddcedc39";

    this.myProductsService.getAllProducts()
      .subscribe(res => {
        res.map(product => {
          if (product.categoryId === eveningProductsId) { this.eveningProducts.push(product); }
          if (product.categoryId === weddingProductsId) { this.weddingProducts.push(product); }
          if (product.categoryId === accessoriesProductsId) { this.accessoriesProducts.push(product); }
        });
      }, err => alert(err.message));
  }

  public searchProduct(): void {
    this.myProductsService.searchProduct(this.searchStr)
      .subscribe(res => {
        this.searchProducts = res;
        this.searchStatus = true;
      }, err => alert(err.message));
  }

  public backToAllProducts(): void {
    this.searchStr = '';
    this.searchStatus = false;
    this.searchProducts = [];
  }
}
