import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class ServiceMyUrlService {
url='https://6167da28ba841a001727c44d.mockapi.io/longUrlToShortUrl';
  constructor(private http: HttpClient) { }

    saveUrlData(data:any){
    console.log(data);
    return this.http.post(this.url,data);
  }
  getAllUrlData(){
    return this.http.get(this.url);
  }

   updateUrlData(id:any, data:any){
    console.log(id);
  return this.http.put(`${this.url}/${id}`, data);
  }
}

/*
"https://6167da28ba841a001727c44d.mockapi.io/longUrlToShortUrl?id="+`${id}`
*/