import { WineList } from "../wineList";
import { SugarTypeEnum, Wine, WineCategoryEnum, WineColourEnum } from "../wine";

export interface Shop {
  id: number;
  name: string;
  createdAt: string;
  paidTill: string;
}

export interface ActiveWineList {
  id: number;
  name: string;
  shop: Shop;
  isActive: boolean;
  wines: WineList[];
  isDeleted: boolean;
  deletedAt: string;
  createdAt: string;
  updatedAt: string;
}

interface Item {
  id: number;
  wineListId: number;
  wine: Wine;
  pricePerBottle: number;
  pricePerGlass: number | null;
  links: string[];
}

interface BaseData {
  id: number;
  name: string;
}

interface DataWithItems<T> {
  data: T;
  items: Item[];
}

export interface WineListActive {
  categories: {
    [key: string]: DataWithItems<{
      id: WineCategoryEnum;
      name: WineCategoryEnum;
    }>;
  };
  countries: {
    [key: string]: DataWithItems<BaseData>;
  };
  colours: {
    [key: string]: DataWithItems<{ name: WineColourEnum }>;
  };
  sugarTypes: {
    [key: string]: DataWithItems<{ name: SugarTypeEnum }>;
  };
  regions: {
    [key: string]: DataWithItems<BaseData>;
  };
  grapes: {
    [key: string]: DataWithItems<{ id: number; name: string }>;
  };
  bottleVolumes: {
    [key: string]: DataWithItems<{ volume: number }>;
  };
}

export interface ActiveListInfo {
  shopId: number;
  shopName: string;
  imagePath: string;
}
