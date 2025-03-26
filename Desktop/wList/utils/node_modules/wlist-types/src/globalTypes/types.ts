export interface ApiResponse<T> {
    success: boolean;
    details: T;
}

export interface ErrorResponse {
    success: boolean;
    details: Record<string, any>;
}
