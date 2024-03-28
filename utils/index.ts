import { CarProps, FilterProps } from "@/types";

export const fetchCars = async(filters:FilterProps) => {
    const headers = {
        'X-RapidAPI-Key': '3a7c5d49a2mshf86f04a624678efp1a01a7jsn69aabb6dd7e4',
        'X-RapidAPI-Host': 'cars-by-api-ninjas.p.rapidapi.com'
      }
      const response= await fetch('https://cars-by-api-ninjas.p.rapidapi.com/v1/cars?model=q3',{headers:headers},)
      const results= await response.json();
      return results;

};
export const calculateCarRent = (city_mpg: number, year: number) => {
  const basePricePerDay = 50; // Base rental price per day in dollars
  const mileageFactor = 0.1; // Additional rate per mile driven
  const ageFactor = 0.05; // Additional rate per year of vehicle age

  // Calculate additional rate based on mileage and age
  const mileageRate = city_mpg * mileageFactor;
  const ageRate = (new Date().getFullYear() - year) * ageFactor;

  // Calculate total rental rate per day
  const rentalRatePerDay = basePricePerDay + mileageRate + ageRate;

  return rentalRatePerDay.toFixed(0);
};

export const generateCarImageUrl = (car: CarProps, angle?: string) => {
  const url = new URL("https://cdn.imagin.studio/getimage");
  const { make, model, year } = car;

  url.searchParams.append('customer', 'hrjavascript-mastery');
  url.searchParams.append('make', make);
  url.searchParams.append('modelFamily', model.split(" ")[0]);
  url.searchParams.append('zoomType', 'fullscreen');
  url.searchParams.append('modelYear', `${year}`);
  // url.searchParams.append('zoomLevel', zoomLevel);
  url.searchParams.append('angle', `${angle}`);

  return `${url}`;
} 
