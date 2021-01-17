import { Component, h } from '@stencil/core';

@Component({
  tag: 'app-root',
  styleUrl: 'app-root.css',
})
export class AppRoot {

  render() {

    return (
      <ion-app>
        <app-route />

        {/* split pane: auto hide (content id must match on split pane, menu, and outlet) */}
        <ion-split-pane content-id="main">
          {/*  the side menu */}
          <ion-menu content-id="main">
            <ion-header>
              <ion-toolbar color="primary">
                <ion-title>My First App</ion-title>
              </ion-toolbar>
            </ion-header>

            <ion-content>
              <ion-list lines="none">
                <ion-menu-toggle auto-hide="false">
                  <ion-item href="/">
                    <ion-icon slot="start" name="storefront"></ion-icon>
                    <ion-label>Home</ion-label>
                  </ion-item>
                  <ion-item href="/calendar">
                    <ion-icon slot="start" name="calendar"></ion-icon>
                    <ion-label>Calendar</ion-label>
                  </ion-item>                 
                </ion-menu-toggle>               
              </ion-list>             
            </ion-content>
          </ion-menu>

          {/* the main content */}
          <ion-router-outlet id="main"></ion-router-outlet>
        </ion-split-pane>
      </ion-app>
    );
  }
}
