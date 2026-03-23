import { inject } from '@angular/core';
import { from } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { AuthService } from '../services/auth.service';
export const authInterceptor = (req, next) => {
    const authService = inject(AuthService);
    return from(authService.getAccessToken()).pipe(switchMap((token) => {
        if (!token) {
            return next(req);
        }
        const cloned = req.clone({
            setHeaders: {
                Authorization: `Bearer ${token}`
            }
        });
        return next(cloned);
    }));
};
