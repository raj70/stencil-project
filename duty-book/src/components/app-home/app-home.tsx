import { Component, h } from '@stencil/core';

@Component({
  tag: 'app-home',
  styleUrl: 'app-home.css',
})
export class AppHome {
  render() {
    return [
      <ion-header>
        <ion-toolbar color="primary">

          {/*  this button is need show the burger button; auto hide*/}
          <ion-buttons slot="start">
            <ion-menu-button></ion-menu-button>
          </ion-buttons>

          <ion-title>Home</ion-title>

        </ion-toolbar>
      </ion-header>,
      <ion-content class="ion-padding">
        <h1>Home Town</h1>
      </ion-content>,

      <ion-content>
        <ion-fab vertical="bottom" horizontal="end">
          <ion-fab-button>Add</ion-fab-button>
          <ion-fab-list side="top">
            <ion-fab-button  color="danger">
              <ion-icon name="logo-facebook"></ion-icon>
            </ion-fab-button>
            <ion-fab-button color="success">
              <ion-icon name="logo-twitter"></ion-icon>
            </ion-fab-button>
            <ion-fab-button color="primary">
              <ion-icon name="logo-youtube"></ion-icon>
            </ion-fab-button>
          </ion-fab-list>

        </ion-fab>
      </ion-content>
    ];
  }
}
