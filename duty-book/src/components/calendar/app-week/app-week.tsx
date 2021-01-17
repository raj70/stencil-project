import { Component, Host, h, Prop } from '@stencil/core';

@Component({
  tag: 'app-week',
  styleUrl: 'app-week.css',
  shadow: true,
})
export class AppWeek {

  @Prop() date: Date;

  render() {
    return (
      <div>
        <h3>Week View: {this.date.getMonth() + 1}</h3>
       
      </div>
    );
  }

}
