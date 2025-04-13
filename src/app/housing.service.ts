import { Injectable } from '@angular/core';
import { HousingLocation } from './housinglocation';

@Injectable({
  providedIn: 'root',
})
export class HousingService {
  protected housingLocationList: HousingLocation[] = [
    {
      id: 1,
      name: 'Test Home 1',
      city: 'Test city 1',
      state: 'ST',
      availableUnits: 1,
      wifi: true,
      price: 100.0,
      country: 'Test country 1',
      description: 'Test description 1',
    },
    {
      id: 2,
      name: 'Test Home 2',
      city: 'Test city 2',
      state: 'ST',
      availableUnits: 2,
      wifi: false,
      price: 200.0,
      country: 'Test country 2',
      description: 'Test description 2',
    },
    {
      id: 3,
      name: 'Test Home 3',
      city: 'Test city 3',
      state: 'ST',
      availableUnits: 3,
      wifi: true,
      price: 300.0,
      country: 'Test country 3',
      description: 'Test description 3',
    },
    {
      id: 4,
      name: 'Test Home 4',
      city: 'Test city 4',
      state: 'ST',
      availableUnits: 4,
      wifi: false,
      price: 400.0,
      country: 'Test country 4',
      description: 'Test description 4',
    },
    {
      id: 5,
      name: 'Test Home 5',
      city: 'Test city 5',
      state: 'ST',
      availableUnits: 5,
      wifi: true,
      price: 500.0,
      country: 'Test country 5',
      description: 'Test description 5',
    },
    {
      id: 6,
      name: 'Test Home 6',
      city: 'Test city 6',
      state: 'ST',
      availableUnits: 6,
      wifi: false,
      price: 600.0,
      country: 'Test country 6',
      description: 'Test description 6',
    },
    {
      id: 7,
      name: 'House',
      city: 'City',
      state: 'State',
      availableUnits: 7,
      wifi: true,
      price: 7,
      country: 'Country',
      description: 'Description',
    },
  ];

  constructor() {}

  getAllHousingLocations(): HousingLocation[] {
    return this.housingLocationList;
  }
  getHousingLocationById(id: number): HousingLocation | undefined {
    return this.housingLocationList.find(
      (housingLocation) => housingLocation.id === id
    );
  }

  submitApplication(firstName: string, lastName: string, email: string) {
    console.log('Application submitted for', firstName, lastName);
  }
}
