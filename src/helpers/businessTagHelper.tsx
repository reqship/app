import {
  TbBeer,
  TbBurger,
  TbGlassChampagne,
  TbGlassCocktail,
  TbMusic,
  TbSun,
  TbTicket,
} from "react-icons/tb";

export type BusinessTag =
  | "beer"
  | "liveMusic"
  | "food"
  | "cocktails"
  | "wine"
  | "outdoorSeating"
  | "bookingAvailable";

const BusinessTagMap = {
  beer: <TbBeer />,
  liveMusic: <TbMusic />,
  food: <TbBurger />,
  cocktails: <TbGlassCocktail />,
  wine: <TbGlassChampagne />,
  outdoorSeating: <TbSun />,
  bookingAvailable: <TbTicket />,
};

export const getBusinessTagInformation = (tags: BusinessTag[]) => {
  return tags.map((tag) => ({ label: tag, icon: BusinessTagMap[tag] }));
};
