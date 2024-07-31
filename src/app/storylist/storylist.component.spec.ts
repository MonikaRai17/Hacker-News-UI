import { ComponentFixture, TestBed, inject } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { HackerNewsService } from '../services/HackerNews.service';

import { StorylistComponent } from './storylist.component';
import { of } from 'rxjs';
import { NgxPaginationModule } from 'ngx-pagination';
import { FormsModule } from '@angular/forms';

describe('StorylistComponent', () => {
  let component: StorylistComponent;
  let fixture: ComponentFixture<StorylistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [StorylistComponent],
      imports: [
        HttpClientTestingModule,
        NgxPaginationModule,
        FormsModule
      ],
      providers: [
        HackerNewsService
      ],
    })
    .compileComponents();

    fixture = TestBed.createComponent(StorylistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(StorylistComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });



   it('should call hacker news stories get function', () => {
    const fakeData: any[] = [{ by:"samaysharma",title:"Pythagorean Theorem found on clay",url:"https://test.com" } ]
    const fixture = TestBed.createComponent(StorylistComponent);
    const app = fixture.componentInstance;
    const service = TestBed.inject(HackerNewsService);
    const mySpy = spyOn(service , 'getStories').and.returnValue(of(fakeData));
    app.getStory();
    expect(mySpy).toHaveBeenCalledTimes(1);

  });

});
