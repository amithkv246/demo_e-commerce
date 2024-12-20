declare global {

    type Rating = {
      rate: number,
      count: number
    }

    type Product = {
      id?: number,
      image?: string,
      title?: string,
      description?: string,
      price?: number,
      rating?: Rating
    };
  }
  
  export {};