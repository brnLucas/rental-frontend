import {Component, OnInit} from '@angular/core';
import {BaseService} from "../base.service";
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent extends BaseService<null> implements OnInit {
  public isOpenDrawer: boolean = true;
  public selectedButton?: string;
  public title: string = "Default"

  constructor(http: HttpClient) {
    super(http, 'core');
  }


  public ngOnInit() {
    this.menus = [
      {"title": "Customer", "icon_name": "person", router: 'customer'},
      {"title": "Menu 2", "icon_name": "widgets", router: 'home'},
    ]
  }

}
