import { Component,  h, Prop } from '@stencil/core';

@Component({
  tag: 'app-month',
  styleUrl: 'app-month.css',
  shadow: true,
})
export class AppMonth {
  @Prop() date: Date;

  render() {
    return (
      <div>
        <h3>Month View: {this.date.getMonth() + 1}</h3>
        <ion-grid>
          <ion-row>
            <ion-col>
              Sunday
          </ion-col>
            <ion-col>
              Monday
          </ion-col>
            <ion-col>
              Tuesday
          </ion-col>
            <ion-col>
              Wednesday
          </ion-col>
            <ion-col>
              Thrusday
          </ion-col>
            <ion-col>
              Friday
          </ion-col>
            <ion-col>
              Saturday
          </ion-col>
          </ion-row>
        </ion-grid>
      </div>
    );
  }

}
