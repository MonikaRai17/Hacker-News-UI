import { TestBed } from '@angular/core/testing';

import { HackerNewsService } from './HackerNews.service';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { of } from 'rxjs';

describe('HackerNewsService', () => {
  let service: HackerNewsService;
  let httpMock: HttpTestingController;
  beforeEach(() => {
    TestBed.configureTestingModule({

      imports: [HttpClientTestingModule],
        providers: [ { provide: HackerNewsService }]
    });
    service = TestBed.get(HackerNewsService);
    httpMock = TestBed.get(HttpTestingController);
  });

  it('should be created', (done) => {
    expect(service).toBeTruthy();
    done();
  });

  it('getStories should return data', (done) => {
    const expectedData: any[] = [
          {   title:"Pythagorean Theorem found on clay",
              url:"https://test.com" 
          },
          {   title:"build demo",
              url:"https://test.com" 
          }
      ];



      service.getStories("").subscribe((res) => {
          expect(res).toEqual(expectedData);
        });
    
        const req = httpMock.expectOne('http://localhost:61028/api/HackerNews?searchItem=');
        expect(req.request.method).toEqual("GET");
        req.flush(expectedData);
    
        httpMock.verify();
        done();
    });


      
   
});
