export enum WineCategoryEnum {
  SPARKLING = "SPARKLING",
  CHAMPAGNE = "CHAMPAGNE",
  WHITE = "WHITE",
  ORANGE = "ORANGE",
  ROSE = "ROSE",
  RED = "RED",
  DESSERT = "DESSERT",
  FORTIFIED = "FORTIFIED",
  NON_ALCOHOL = "NON_ALCOHOL",
  LIQUEUR = "LIQUEUR",
  AQUAVIT = "AQUAVIT",
  GRAPPA = "GRAPPA",
  OTHER = "OTHER",
}

export enum WineColourEnum {
  RED = "RED",
  WHITE = "WHITE",
  ORANGE = "ORANGE",
  ROSE = "ROSE",
}

export enum SugarTypeEnum {
  DRY = "DRY",
  SEMI_DRY = "SEMI_DRY",
  SEMI_SWEET = "SEMI_SWEET",
  SWEET = "SWEET",
}

// Использование keyof для динамического получения значений
export type WineCategoryType = keyof typeof WineCategoryEnum;
export type WineColourType = keyof typeof WineColourEnum;
export type SugarType = keyof typeof SugarTypeEnum;

// Если необходимо, для получения значений перечисления в строковом формате
export type WineCategoryValueType = (typeof WineCategoryEnum)[WineCategoryType];
export type WineColourValueType = (typeof WineColourEnum)[WineColourType];
export type SugarTypeValueType = (typeof SugarTypeEnum)[SugarType];

export interface Wine {
  id: number;
  name: string;
  ruName: string;
  category: WineCategoryEnum;
  colour: WineColourEnum;
  sugarType: SugarTypeEnum;
  bottleVolume: number;
  alcoholByVolume: number;
  countryId: number;
  regionId?: number;
  grapeIds: number[];
  originalImagePath: string;
  mediumImagePath: null | string;
  tinyImagePath: null | string;
  vintage: number;
  interestingFacts: string;
  organoleptic: string;
}

export interface WineRoot extends Wine {
  createdAt: string;
  isDeleted: boolean;
  isHidden: boolean;
  updatedAt: string;
}

export interface WineResponse {
  page: {
    number: number;
    size: number;
    totalElements: number;
    totalPages: number;
  };
  _embedded: {
    adminWineResponseList: Wine[];
    rootWineResponseList: WineRoot[];
  };
}

export interface UpdateWineRequest {
  name: string;
  category: string;
  colour: string;
  vintage?: number;
  sugarType: string;
  alcoholByVolume: number;
  bottleVolume: number;
  countryId: number;
  regionId?: number;
  grapeIds: number[];
  interestingFacts?: string;
  organoleptic?: string;
  isHidden?: boolean;
}

export interface CreateWineRequest {
  name: string;
  category: WineCategoryEnum;
  colour: WineColourEnum;
  vintage?: number | null; // Optional
  sugarType: SugarTypeEnum;
  bottleVolume: number;
  alcoholByVolume: number;
  countryId: number;
  regionId?: number; // Optional
  grapeIds: number[];
  interestingFacts?: string; // Optional
  organoleptic?: string; // Optional
  isHidden: boolean;
}

export interface SearchWineRequest {
  name: string;
  page: number;
  size: number;
  sort?: string;
}

export interface WineRequestFilter {
  category?: WineCategoryEnum;
  colour?: WineColourEnum;
  sugarType?: SugarTypeEnum;
  vintage?: number;
  countryId?: number;
  regionId?: number;
  grapeId?: number;
  bottleVolume?: number;
}

export interface WineRequest extends WineRequestFilter {
  page: number;
  size: number;
}

export interface WineFilter {
  id: string;
  name: string;
  count: number;
}

export interface WineFilters {
  category?: WineFilter[];
  colour?: WineFilter[];
  sugarType?: WineFilter[];
  vintage?: WineFilter[];
  country?: WineFilter[];
  region?: WineFilter[];
  grapes?: WineFilter[];
  bottleVolume?: WineFilter[];
}
