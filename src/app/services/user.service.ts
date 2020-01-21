import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { delay } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor() { }

  // 'of' permet de transformer une valeur synchrone : false en valeur asynchrone
  // 'delay' permet de rajouter un délai de 3000 millisecondes avant d'envoyer la valeur
  login(): Observable<boolean>  {
    return of(true).pipe(
            delay(3000)
    );
}
}
