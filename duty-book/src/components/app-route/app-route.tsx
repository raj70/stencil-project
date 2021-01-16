import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'app-route',
  styleUrl: 'app-route.css',
  shadow: true,
})
export class AppRoute {

  render() {
    return [
        <ion-router useHash={false}>          
          <ion-route url="/" component="app-home" />
          <ion-route url="/profile" component="app-profile" />
        </ion-router>
    ];
  }

}
