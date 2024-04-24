import { CanActivate, ExecutionContext } from '@nestjs/common';
import { Observable } from 'rxjs';


export class AuthGuard implements CanActivate {

  canActivate(context: ExecutionContext): boolean | Promise<boolean> | Observable<boolean> {
    const request = context.switchToHttp().getRequest();
    const requestedAccount = Number((request.raw.url.split('/'))[2]);
    return request.raw.currUser.id && (requestedAccount===request.raw.currUser.id || request.raw.currUser.isAdmin===true) ? true : false;  
  }
}