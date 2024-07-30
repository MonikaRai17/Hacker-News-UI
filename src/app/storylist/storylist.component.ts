import { Component, OnInit } from '@angular/core';
import { HttpService } from '../services/http.service';
import { catchError, retry, throwError } from 'rxjs';

@Component({
  selector: 'app-storylist',
  templateUrl: './storylist.component.html',
  styleUrl: './storylist.component.css'
})
export class StorylistComponent implements OnInit {

  storylist : any;
  searchItem : string ="";
  page: number = 1;
  count: number = 0;
  tableSize: number = 10;
  
  constructor(private httpservice : HttpService){

  }

  ngOnInit(): void {
    this.getStory();
  }

  getStory()
  {
    this.httpservice.getStories(this.searchItem)
    .subscribe((data:any) => 
    {
      this.storylist = data;
    })
  }

  filter()
  {
    if(this.searchItem.length>=3)
    {
      this.getStory();
    }
    else if(this.searchItem.length == 0)
      {
        this.getStory();
      }
   
  }

  onTableDataChange(event: any) {
    this.page = event;
    this.getStory();
  }

 



}
