import { Injectable } from '@angular/core';
import { HttpErrorResponse, HttpEvent, HttpHandler, HttpHeaders, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Observable, throwError, catchError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class InterceptorService implements HttpInterceptor{

  constructor() { }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
  
    const headers = new HttpHeaders({
      'x-token':'asdasd123d3qwse'
    })

    const requestClone = req.clone({
      headers
    })

     return next.handle(requestClone)
                .pipe(
                  catchError(this.handlerError)
                )

  }

  handlerError(error : HttpErrorResponse){
    console.log(error);
     return throwError(() => `Error encontrado: ${error.message}`)
}
}
