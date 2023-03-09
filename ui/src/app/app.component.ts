import { Component } from '@angular/core';
import {KeycloakService} from "keycloak-angular";
import {DataLoaderService} from "./data-loader.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  data = '';

  constructor(private keycloakService: KeycloakService, private dataLoader: DataLoaderService) {
  }

  logout() {
    this.keycloakService.logout();
  }

  loadData() {
    this.dataLoader.getData()
      .subscribe({
        next: (message) => this.data = message.text,
        error: (error) => console.log(error)
      });
  }

}
