import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivateChild, GuardResult, MaybeAsync, RouterStateSnapshot } from "@angular/router";

@Injectable()
export class ChildGuardService implements CanActivateChild{
    canActivateChild():any{
        // return false;
        return true;
    }
}
