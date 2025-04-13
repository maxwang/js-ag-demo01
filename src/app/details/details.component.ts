
import { Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HousingLocation } from '../housinglocation';
import { HousingService } from '../housing.service';
import { CommonModule } from '@angular/common';
import {FormControl, FormGroup, ReactiveFormsModule} from '@angular/forms';

@Component({
  selector: 'app-details',
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './details.component.html',
  styleUrl: './details.component.css'
})
export class DetailsComponent {
  route: ActivatedRoute = inject(ActivatedRoute);
  housingService: HousingService = inject(HousingService);
  housingLocation : HousingLocation | undefined;
  
  applyForm = new FormGroup({
    firstName: new FormControl(''),
    lastName: new FormControl(''),
    email: new FormControl(''),
  });

  constructor() {
   const housingLocationId = Number(this.route.snapshot.paramMap.get('id'));
   this.housingLocation = this.housingService.getHousingLocationById(housingLocationId);
  }

  submitApplication() {
    this.housingService.submitApplication(
      this.applyForm.value.firstName ?? '', 
      this.applyForm.value.lastName ?? '', 
      this.applyForm.value.email ?? '');
  }
}
