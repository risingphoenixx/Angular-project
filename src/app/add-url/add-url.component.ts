import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { ServiceMyUrlService } from '../service-my-url.service';
import {NgTinyUrlService} from 'ng-tiny-url';

@Component({
  selector: 'app-add-url',
  templateUrl: './add-url.component.html',
  styleUrls: ['./add-url.component.css']
})
export class AddUrlComponent implements OnInit {
shortenedUrl = '';
flag=0;
  constructor(private myUrlService:ServiceMyUrlService,private tinyUrl: NgTinyUrlService) { 
 this.flag=0;
  }
addLongURL=new FormGroup
  ({
  title:new FormControl(''),
  longUrl:new FormControl(''),
  shortUrl:new FormControl(''),
  clicks:new FormControl(0)
  });
  ngOnInit(): void {
  }
saveShortUrl(longurl:any){
    
    this.tinyUrl.shorten(longurl).subscribe(res => {
        this.shortenedUrl = res;
        this.addLongURL.value["shortUrl"]=res;
        this.saveUrl();
        console.log(res); //https://tinyurl.com/8wa5w2o;
      });
  }
saveUrl(){
   console.log(this.addLongURL.value["longUrl"]);
    console.log(this.addLongURL.value["shortUrl"]);
    this.flag=this.flag+1;
    if(this.flag<2){
    this.saveShortUrl(this.addLongURL.value["longUrl"]);
    }
    if(this.flag==2){
   this.myUrlService.saveUrlData(this.addLongURL.value).subscribe((result)=>{
    this.addLongURL.reset({});
  });
}

}
}
