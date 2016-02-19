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
  description: string,
};
