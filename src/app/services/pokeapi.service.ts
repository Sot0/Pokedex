  import { Injectable } from '@angular/core';
  import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { map } from 'rxjs/operators';
  
  @Injectable({
    providedIn: 'root'
  })
  export class PokeapiService {
    private APIURL = environment.pokeapiUrl;
    public totalItems = 0;
  
    constructor(private http: HttpClient) { }
  
    query(query: string, action: string, data?: any) {
      const url = `${this.APIURL}${query}`;
  
      if (data) {
        return this.http[action](url, data);
      } else {
        return this.http[action](url);
      }
    }
  
    paginate(page: number) {
      return this.query(`pokemon?offset=${page * 20}&limit=20`, 'get').pipe(
        map((resp: any) => {
          this.totalItems = resp.count;
          return resp.results;
        })
      );
    }
  
    getPokemonByNameNumber(search: string) {
      return this.query(`pokemon/${search}`, 'get');
    }

    getPokemonByUrl(url: string) {
      return this.http.get(url);
    }
  }
  