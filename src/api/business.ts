import { BusinessTag } from "@/helpers/businessTagHelper";
import { GET } from ".";
import { Item } from "./items";

export interface Business {
  id: number;
  name: string;
  description: string;
  imageUrl: string;
  userId: number;
  tags: BusinessTag[];
}

export interface BusinessWithItems extends Business {
  items: Item[];
}

export const getAllBusinesses = () => GET<Business[]>("business");

export const getBusinessById = (id: string) => () =>
  GET<Business>(`business/${id}`);

export const getBusinessWithDetailsById = (id: string) => () =>
  GET<BusinessWithItems>(`business/${id}/details`);
