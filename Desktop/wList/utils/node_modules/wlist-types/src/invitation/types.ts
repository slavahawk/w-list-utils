export interface Invitation {
  id: number;
  sentMail: string;
  expiredAt: string; // ISO 8601 date-time format
  confirmedAt?: string; // Optional
  createdAt: string; // ISO 8601 date-time format
}

export interface InvitationRequest {
  email: string;
}
