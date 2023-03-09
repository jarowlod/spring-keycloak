import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, Router, RouterStateSnapshot} from '@angular/router';
import {KeycloakAuthGuard, KeycloakService} from 'keycloak-angular';

@Injectable({providedIn: 'root'})
export class AuthGuard extends KeycloakAuthGuard {

  constructor(protected override readonly router: Router, protected readonly keycloak: KeycloakService) {
    super(router, keycloak);
  }

  public async isAccessAllowed(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    if (!this.authenticated) {
      await this.redirectToLoginPage(state);
    }
    const requiredRoles = this.getRequiredRoles(route);
    return this.authorize(requiredRoles) ? true : this.redirectToAccessDeniedPage();
  }

  private async redirectToLoginPage(state: RouterStateSnapshot): Promise<void> {
    await this.keycloak.login({redirectUri: window.location.origin + state.url});
  }

  private async redirectToAccessDeniedPage(): Promise<boolean> {
    return await this.router.navigate(['/access-denied']);
  }

  private getRequiredRoles(route: ActivatedRouteSnapshot): string[] {
    return route.data['roles'];
  }

  private authorize(requiredRoles: string[]): boolean {
    return requiredRoles.every((role: string) => this.roles.includes(role));
  }

}
