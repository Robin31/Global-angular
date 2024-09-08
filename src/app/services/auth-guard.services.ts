import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivateFn, MaybeAsync, Router, RouterStateSnapshot } from "@angular/router";
import { Observable } from "rxjs";
import { AuthServices } from "./auth.services";

@Injectable({
  providedIn: 'root'
})

export class AuthGuard implements CanActivateFn {

  constructor(private authServices: AuthServices, private router: Router) { }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): MaybeAsync<boolean> | Promise<boolean> | boolean {

    if (this.authServices.isAuth) {
      return true;
    } else {
      this.router.navigate(['auth']);
    }
    return false
  }
}