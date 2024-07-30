import { ComponentFixture, TestBed, inject } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { HttpService } from '../services/http.service';

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
        HttpService
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



  it('should get stories list', () => {
    const service: HttpService = TestBed.get(HttpService);
    expect(service.getStories).toBeTruthy();
   });

});
