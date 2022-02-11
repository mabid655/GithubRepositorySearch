import {Injectable} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {HttpClient} from '@angular/common/http';
import 'rxjs/add/observable/of';

import {environment} from '../../environments/environment';

@Injectable()
export class SearchService {

  private baseUrl = environment.baseURL;

  constructor(private http: HttpClient) {}

  getRepositories(data): Observable<any> {
    const reqEndPoint = `search/repositories?q=${data.repositoryName}&page=${data.page}&per_page=${data.limit}`;
    return this.http.get(this.baseUrl + reqEndPoint);
  }
}
