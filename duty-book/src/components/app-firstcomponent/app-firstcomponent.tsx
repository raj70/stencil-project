import { Component, h, Prop } from '@stencil/core';

@Component({
  tag: 'app-firstcomponent',
  styleUrl: 'app-firstcomponent.css',
  shadow: true,
})
export class AppFirstcomponent {

  @Prop() name: string;



  render() {
    return (
     <div>{this.name}</div>
    );
  }

}
