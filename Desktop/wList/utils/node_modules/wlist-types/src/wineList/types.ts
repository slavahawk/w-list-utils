export interface WineList {
  createdAt: string;
  id: number;
  isActive: boolean;
  isDeleted: boolean;
  itemCount: number;
  name: string;
  shopId: number;
  updatedAt: string;
  imagePath: string;
}

export interface CreateWineListRequest {
  name: string;
}
