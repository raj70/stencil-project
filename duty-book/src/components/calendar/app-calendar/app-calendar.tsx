import { Component, h, State } from '@stencil/core';

@Component({
  tag: 'app-calendar',
  styleUrl: 'app-calendar.css',
  shadow: true,
})
export class AppCalendar {

  @State() date: Date = new Date();

  render() {
    return [
      <ion-header>
        <ion-toolbar color="primary">

          {/*  this button is need show the burger button; auto hide*/}
          <ion-buttons slot="start">
            <ion-menu-button>
            </ion-menu-button>
          </ion-buttons>
          <ion-title>Calendar</ion-title>

        </ion-toolbar>
      </ion-header>,

      <ion-content class="ion-padding">

        {/* content header */}
        <ion-header>
          <ion-toolbar color="primary">
            <ion-buttons>
              <ion-back-button></ion-back-button>
            </ion-buttons>
            <ion-title>Day</ion-title>
            <ion-buttons>
              <ion-back-button></ion-back-button>
            </ion-buttons>
          </ion-toolbar>
        </ion-header>

        {/* content */}
        <ion-content class="ion-padding">
          <div>
            <app-month date={this.date}></app-month>
            <app-day date={this.date}></app-day>
            <app-week date={this.date}></app-week>
          </div>
        </ion-content>

      </ion-content>

    ];
  }

}
