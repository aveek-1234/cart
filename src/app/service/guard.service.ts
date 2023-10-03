import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GuardService   {
       public isLoggedIn:boolean=false;
       
       constructor(private router:Router) {}
        canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
            if(!this.isLoggedIn)
            {
              this.router.navigate(['/login']);
            }
            return this.isLoggedIn;
        }
}
