export interface AuthDetails {
  accessToken: string;
  refreshToken: string;
}

export interface AuthResponse {
  success: boolean;
  details: AuthDetails;
}

export interface RegistrationRequest {
  email: string;
  password: string;
  shopName: string;
}

export interface LoginRequest {
  email: string;
  password: string;
}

export interface ForgotPasswordRequest {
  email: string;
}

export interface ResetPasswordRequest {
  token: string;
  newPassword: string;
}

export interface LogoutRequest {
  refreshToken: string;
}

export interface RefreshTokenRequest extends LogoutRequest {}

export enum Role {
  ROOT = "ROOT",
  ADMIN = "ADMIN",
  WORKER = "WORKER",
  CUSTOMER = "CUSTOMER",
}

export const roleWineList = (role: Role) => {
  const roles = {
    [Role.ROOT]: "rootWineResponseList",
    [Role.ADMIN]: "adminWineResponseList",
    [Role.WORKER]: "workerWineResponseList",
    [Role.CUSTOMER]: "customerWineResponseList",
  };
  return roles[role];
};

export const roleWineListItem = (role: Role) => {
  const roles = {
    [Role.ROOT]: "rootWineListItemResponseList",
    [Role.ADMIN]: "adminWineListItemResponseList",
    [Role.WORKER]: "workerWineListItemResponseList",
    [Role.CUSTOMER]: "customerWineListItemResponseList",
  };
  return roles[role];
};

export interface Me {
  id: number;
  email: string;
  role: Role;
  shopId: number;
  createdAt: string;
}
