import { Component, OnInit } from '@angular/core';
import { HackerNewsService } from '../services/HackerNews.service';
import { LoaderService } from '../services/loader.service';

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
  
  constructor(private service : HackerNewsService, private loader: LoaderService){

  }

  ngOnInit(): void {
    this.getStory();
  }

  getStory()
  {
    this.storylist = [];
    this.loader.showSpinner();
    this.service.getStories(this.searchItem)
    .subscribe((data:any) => 
    {
      this.storylist = data;
    })
  }

  filter()
  {
    this.page = 1;
    this.getStory();
   
  }

  onTableDataChange(event: any) {
    
    this.page = event;
    this.getStory();
  }

 



}
