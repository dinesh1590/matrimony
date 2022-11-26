import { Component, OnInit } from '@angular/core';
import { Product } from '../product';
import { ProductService } from '../productservice';


@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

  products: Product[];

  constructor(private productService: ProductService) { }

  ngOnInit() {
      this.productService.getProductsWithOrdersSmall().then(data => this.products = data);
  }


}


