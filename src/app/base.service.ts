import {Menu} from "../models/menu";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";


export class BaseService<t> {
  public menus?: Menu[];
  public baseUrl: string = 'http://127.0.0.1:8000'


  constructor(private http: HttpClient, private module: string) {
  }

  public getFomListRouter(url: string): Observable<t> {
    let response;
    return this.http.get<t>(`${this.baseUrl}/${this.module}/${url}/`).pipe(
      response => response)
  }

  // public patchFromListRoute(url: string, payload: any): any {
  //   let response;
  //   this.http.patch(`${this.baseUrl}/${this.module}/${url}`, )
  // }
}
