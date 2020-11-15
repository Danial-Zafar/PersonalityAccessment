import { Injectable } from '@angular/core';
import {
 CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot,
 CanActivateChild, Router
} from '@angular/router';

import { AngularFireAuth } from '@angular/fire/auth';


@Injectable()
export class AuthGuardService implements CanActivate, CanActivateChild {

  constructor(
    private auth: AngularFireAuth,
    private router: Router
  ) {}

  public canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    return this.checkLogin(state.url);
  }

  public canActivateChild(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    return this.canActivate(route, state);
  }

  private checkLogin(url: string) {
    let result = true;
    this.auth.onAuthStateChanged((user) => {
        if (user) {
            result = true;
        } else {
            result = false;
        }
    });

    if (!result) {
      this.router.navigate(['/portal']);
    }

    return result;
  }

}
