import { Injectable } from "@angular/core"
import { ActivatedRouteSnapshot, CanActivate, GuardResult, MaybeAsync, RouterStateSnapshot } from "@angular/router";

@Injectable()
export class GuardServiceClass implements CanActivate{

    canActivate():any {
        // return true;//activated , accessible
        return false;
    }
}