import {Component, OnInit} from '@angular/core';
import {BaseService} from "../base.service";
import {HttpClient} from "@angular/common/http";
import {Customer} from "../../models/customer";

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.scss']
})
export class CustomerComponent extends BaseService<Customer> implements OnInit {
  public customerList?: any;

  constructor(http: HttpClient) {
    super(http, 'core');
  }


  public ngOnInit() {
    this.getCustomerList()
  }

  public getCustomerList(): void {
    this.getFomListRouter('customer').subscribe((response) => {
      this.customerList = response
    })
  }
}
