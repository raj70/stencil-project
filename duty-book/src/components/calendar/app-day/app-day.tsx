import { Component,  h, Prop } from '@stencil/core';

@Component({
  tag: 'app-day',
  styleUrl: 'app-day.css',
  shadow: true,
})
export class AppDay {

  @Prop() date: Date;

  render() {

    return [
      <div>
        <ion-label>Day of {this.date.getDate()}/{this.date.getMonth()+1}/{this.date.getFullYear()}</ion-label>
        <ion-list lines="none">
          <ion-item>
            First Item
          </ion-item>
          <ion-item>
            Second Item
          </ion-item>
          <ion-item>
            Third Item
          </ion-item>
        </ion-list>
      </div>
    ];
  }
}
