import { DotNetRes, GET } from ".";

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
  GET<DotNetRes<Item[]>>(`item/business/${businessId}`);
