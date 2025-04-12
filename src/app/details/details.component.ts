
import { Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HousingLocation } from '../housinglocation';
import { HousingService } from '../housing.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-details',
  imports: [CommonModule],
  templateUrl: './details.component.html',
  styleUrl: './details.component.css'
})
export class DetailsComponent {
  route: ActivatedRoute = inject(ActivatedRoute);
  hosingService: HousingService = inject(HousingService);
  housingLocation : HousingLocation | undefined;
  constructor() {
   const housingLocationId = Number(this.route.snapshot.paramMap.get('id'));
   this.housingLocation = this.hosingService.getHousingLocationById(housingLocationId);
  }
}
