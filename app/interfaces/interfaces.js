export interface Broker {
    id: number,
    name: string,
    title: string,
    picture: string
};

export interface Agent {
  id: number,
  city: string,
  state: string,
  price: string,
  title: string,
  beds: number,
  baths: number,
  likes: number,
  broker: Broker,
  pic: string,
  thumb: string,
  description: string
};

export interface Services: {
  [index: number]: string
};

export interface Location {
  id: number,
  lat: number,
  lng: number,
  title: string,
  address: string,
  services: Services,  
  focus: boolean
};
