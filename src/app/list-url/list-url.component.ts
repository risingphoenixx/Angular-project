import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { ServiceMyUrlService } from '../service-my-url.service';
import {NgTinyUrlService} from 'ng-tiny-url';

@Component({
  selector: 'app-list-url',
  templateUrl: './list-url.component.html',
  styleUrls: ['./list-url.component.css']
})
export class ListUrlComponent implements OnInit {

  constructor(private myUrlService:ServiceMyUrlService) { }
urlData:any = [];
  ngOnInit(): void {
     this.myUrlService.getAllUrlData().subscribe((allData)=>{
    //console.log(allData);
    this.urlData=allData;
  });
  
  }
editClicks=new FormGroup
  ({
  title:new FormControl(''),
  longUrl:new FormControl(''),
  shortUrl:new FormControl(''),
  clicks:new FormControl(0)
  });
increaseClicks(index:number){
//console.log(this.urlData[index]['clicks']);
let clicknums=this.urlData[index]['clicks']+1;
var titles=this.urlData[index]['title'];
var longurls=this.urlData[index]['longUrl'];
var shorturls=this.urlData[index]['shortUrl'];

this.editClicks=new FormGroup
  ({
  title:new FormControl(titles),
  longUrl:new FormControl(longurls),
  shortUrl:new FormControl(shorturls),
  clicks:new FormControl(clicknums)
  });

  //console.log(this.editClicks.value);
   this.myUrlService.updateUrlData(this.urlData[index]['id'],this.editClicks.value).subscribe((result)=>{
    console.log(result);
      this.ngOnInit();
    });
 
}
}
