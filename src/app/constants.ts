export const API_URL = "https://frontend-take-home-service.fetch.com";

export interface Dog {
  id: string
  img: string
  name: string
  age: number
  zip_code: string
  breed: string
  favorited?: boolean
};

export interface Location {
  zip_code: string
  latitude: number
  longitude: number
  city: string
  state: string
  county: string
};

export interface Coordinates {
  lat: number;
  lon: number;
};