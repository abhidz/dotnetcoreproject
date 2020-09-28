import { ErrorHandler, Injectable } from '@angular/core';
import { throwError } from 'rxjs';

@Injectable()
export class Myerrorhandelor implements ErrorHandler {
    constructor() {
    }
    handleError(error) {
        debugger;
        let errorMessage = '';
        if (error.error instanceof ErrorEvent) {
            errorMessage = `Error : ${error.error.message}`;
        }
        else {
            errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
        }
        alert(errorMessage);
        return throwError(errorMessage);
    }

} 