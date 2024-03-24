
export const fetchCars = async() => {
    const headers = {
        'X-RapidAPI-Key': '3a7c5d49a2mshf86f04a624678efp1a01a7jsn69aabb6dd7e4',
        'X-RapidAPI-Host': 'cars-by-api-ninjas.p.rapidapi.com'
      }
      const response= await fetch('https://cars-by-api-ninjas.p.rapidapi.com/v1/cars?model=corolla',{headers:headers},)
      const results= await response.json();
      return results;

};