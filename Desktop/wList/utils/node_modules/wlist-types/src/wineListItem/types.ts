import {
  SugarTypeEnum,
  Wine,
  WineCategoryEnum,
  WineColourEnum,
  WineRoot,
} from "../wine";

export interface Prices {
  pricePerBottle: number;
  pricePerGlass?: number;
}

export interface PricesWithGlass extends Prices {
  glassVolume?: number;
}

export interface UpdateWineListItem extends PricesWithGlass {
  isHidden: boolean;
}

export interface CreateWineList extends PricesWithGlass {
  wineListId: number;
  wineId: number;
  internalComment: string;
}

export interface WineListItem {
  createdAt: string;
  id: number;
  internalComment: string;
  isDeleted: boolean;
  isHidden: boolean;
  isActive: boolean;
  pricePerBottle: number;
  pricePerGlass: number;
  glassVolume?: number;
  updatedAt: string;
  wine: Wine;
  wineListId: number;
}

export interface WineListItemResponses {
  page: {
    number: number;
    size: number;
    totalElements: number;
    totalPages: number;
  };
  _embedded: {
    adminWineResponseList: Wine[];
    rootWineResponseList: WineRoot[];
    workerWineListItemResponseList: WineListItem[];
    customerWineListItemResponseList: WineListItem[];
    rootWineListItemResponseList: WineListItem[];
    adminWineListItemResponseList: WineListItem[];
  };
}

export interface WineListItemRequest {
  category?: WineCategoryEnum;
  colour?: WineColourEnum;
  sugarType?: SugarTypeEnum;
  vintage?: number;
  countryId?: number;
  regionId?: number;
  grapeId?: number;
  bottleVolume?: number;
  page: number;
  size: number;
}
