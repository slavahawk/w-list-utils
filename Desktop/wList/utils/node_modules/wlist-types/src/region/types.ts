export interface Region {
  id: number;
  name: string;
  countryId: number;
}

export interface RegionResponse {
  id: number;
  name: string;
  countryId: number;
}

export interface UpdateRegionRequest {
  countryId: number;
  name: string;
}

export interface CreateRegionRequest extends UpdateRegionRequest {
  originalImagePath: string;
}
