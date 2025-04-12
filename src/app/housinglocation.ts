export interface HousingLocation {
  id: number;
  name: string;
  city: string;
  state: string;
  country: string;
  description: string;
  // photo?: string;
  availableUnits: number;
  price: number;
  // rating: number;
  wifi: boolean;
}
