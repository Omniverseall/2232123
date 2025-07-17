import { apiRequest } from '../../../shared/api/base';
import { AuthResponse, LoginRequest, RegisterRequest } from '../model/types';

export const userApi = {
  login: (data: LoginRequest): Promise<AuthResponse> =>
    apiRequest<AuthResponse>('/api/login', {
      method: 'POST',
      body: JSON.stringify(data),
    }),

  register: (data: RegisterRequest): Promise<AuthResponse> =>
    apiRequest<AuthResponse>('/api/register', {
      method: 'POST',
      body: JSON.stringify(data),
    }),
};