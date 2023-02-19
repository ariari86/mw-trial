import { Injectable } from "@angular/core";
import { AuthService, WindowRef } from "@spartacus/core";
import { fromEvent } from "rxjs";
import { debounceTime } from "rxjs/operators";
import { LogoutConfig } from "./logout-config";

@Injectable({
  providedIn: 'root'
})
export class AutoLogoutService {

  constructor(private winRef: WindowRef, private authService: AuthService, private config: LogoutConfig ) {}

  init(){
    fromEvent(this.winRef.nativeWindow, 'click')
    .pipe(
      debounceTime(this.config.logoutConfig.logoutTimeout),
    ).subscribe(
      _ => this.authService.logout()
    )
  }

}
