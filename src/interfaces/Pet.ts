export interface Pet {
    id: number;
    type: string;
    name: string;
    description: string;
    imageURL: string;
    price: string;
    location: string;
    owner: {
      name: string;
      contactEmail: string;
      contactPhone: string;
}};
