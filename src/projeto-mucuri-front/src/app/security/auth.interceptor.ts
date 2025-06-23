import { HttpInterceptorFn } from '@angular/common/http';
import { inject } from '@angular/core';
import { AuthService } from '../services/auth.service';

export const authInterceptor: HttpInterceptorFn = (req, next) => {
  // Injeta o AuthService usando a função inject()
  const authService = inject(AuthService);
  const token = authService.getToken();

  // Se o token existir, clona a requisição para adicionar o header
  if (token) {
    const clonedReq = req.clone({
      headers: req.headers.set('Authorization', `Bearer ${token}`),
    });
    return next(clonedReq);
  }

  // Se não, apenas continua com a requisição original
  return next(req);
};