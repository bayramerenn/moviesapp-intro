import { Injectable } from '@angular/core';
import { InMemoryDbService, RequestInfo } from 'angular-in-memory-web-api';


@Injectable({
  providedIn: 'root',
})
export class InMemoryDataService implements InMemoryDbService {
  constructor() {}

  createDb() {
    const movies = [
      { id: 1, name: 'Gez', description: 'Güzel Film', imageUrl: '1.jpg' },
      { id: 2, name: 'Getir', description: 'Güzel Film', imageUrl: '2.jpg' },
      { id: 3, name: 'Koş', description: 'Güzel Film', imageUrl: '3.jpg' },
      { id: 4, name: 'Manita', description: 'Güzel Film', imageUrl: '4.jpg' },
      {
        id: 5,
        name: 'Bahtsız Bedevi',
        description: 'Güzel Film',
        imageUrl: '5.jpg',
      },
      {
        id: 6,
        name: 'Bahtsız Bedevi',
        description: 'Güzel Film',
        imageUrl: '6.jpg',
      },
      {
        id: 7,
        name: 'Bahtsız Bedevi',
        description: 'Güzel Film',
        imageUrl: '7.jpg',
      },
    ];
    return {movies};
  }
}
