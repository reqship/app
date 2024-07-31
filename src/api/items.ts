import { GET } from ".";

export interface Item {
  id: number;
  businessId: number;
  name: string;
  price: number;
  description: string;
  imageUrl: string;
  section: string;
  featured: boolean;
}

export const getItemsByBusinessId = (businessId: string) => () =>
  GET<Item[]>(`item/business/${businessId}`);
