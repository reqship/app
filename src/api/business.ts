import { BusinessTag } from "@/helpers/businessTagHelper";
import { DotNetRes, GET, RejectIfUndefined } from ".";
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
  RejectIfUndefined(id, () => GET<DotNetRes<Business>>(`business/${id}`));

export const getBusinessWithDetailsById = (id: string) => () =>
  RejectIfUndefined(id, () =>
    GET<DotNetRes<BusinessWithItems>>(`business/${id}/details`)
  );
