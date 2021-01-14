import { Component, h, State, Prop } from '@stencil/core';
import { popoverController } from '@ionic/core';

@Component({
  tag: 'app-calendar',
  styleUrl: 'app-calendar.css',
  shadow: true,
})
export class AppCalendar {
  
  @Prop() color: string;
  @Prop() name: string;

  @State() pepperoni: boolean = false;
  @State() sausage: boolean = true;
  @State() mushrooms: boolean = false;

  async presentPopover(ev: any) {
    const popover = await popoverController.create({
      component: 'page-popover',
      cssClass: 'my-custom-class',
      event: ev,
      translucent: true
    });
    return await popover.present();
  }

  render() {
    var name = this.name;
    console.log(name);
    return [
      <ion-label>{name}-{this.color}</ion-label>,
      <ion-list>
        <ion-item>
          <ion-label>Pepperoni</ion-label>
          <ion-toggle checked={this.pepperoni} onIonChange={(ev) => this.pepperoni = ev.detail.checked}></ion-toggle>
        </ion-item>

        <ion-item>
          <ion-label>Sausage</ion-label>
          <ion-toggle checked={this.sausage} onIonChange={(ev) => this.sausage = ev.detail.checked} disabled={true}></ion-toggle>
        </ion-item>

        <ion-item>
          <ion-label>Mushrooms</ion-label>
          <ion-toggle checked={this.mushrooms} onIonChange={(ev) => this.mushrooms = ev.detail.checked}></ion-toggle>
        </ion-item>
      </ion-list>,
      <ion-toolbar>
        <ion-buttons slot="start">
          <ion-back-button></ion-back-button>
        </ion-buttons>
        <ion-title>Back Button</ion-title>
      </ion-toolbar>,
      <ion-toolbar>
        <ion-title>Default Title</ion-title>
      </ion-toolbar>,
      <ion-text color="secondary">
        <h1>H1: The quick brown fox jumps over the lazy dog</h1>
      </ion-text>,
      <ion-content>
        <ion-button onClick={(ev) => this.presentPopover(ev)}>Present Popover</ion-button>
      </ion-content>,
      <ion-list>
        <ion-item>
          <ion-label>Documentation</ion-label>
        </ion-item>
        <ion-item>
          <ion-label>Feedback</ion-label>
        </ion-item>
        <ion-item>
          <ion-label>Settings</ion-label>
        </ion-item>
      </ion-list>,
      <ion-header>
        <ion-toolbar>
          <ion-title>Header</ion-title>
        </ion-toolbar>
      </ion-header>,
      <ion-content>
        {/* fab placed to the top end */}
        <ion-fab vertical="top" horizontal="end" slot="fixed">
          <ion-fab-button>
            <ion-icon name="add"></ion-icon>
          </ion-fab-button>
        </ion-fab>

        {/* fab placed to the bottom end */}
        <ion-fab vertical="bottom" horizontal="end" slot="fixed">
          <ion-fab-button>
            <ion-icon name="arrow-forward-circle"></ion-icon>
          </ion-fab-button>
        </ion-fab>

        {/* fab placed to the top start */}
        <ion-fab vertical="top" horizontal="start" slot="fixed">
          <ion-fab-button>
            <ion-icon name="arrow-back-circle"></ion-icon>
          </ion-fab-button>
        </ion-fab>

        {/* fab placed to the bottom start */}
        <ion-fab vertical="bottom" horizontal="start" slot="fixed">
          <ion-fab-button>
            <ion-icon name="arrow-up-circle"></ion-icon>
          </ion-fab-button>
        </ion-fab>

        {/* fab placed to the (vertical) center and start */}
        <ion-fab vertical="center" horizontal="start" slot="fixed">
          <ion-fab-button>
            <ion-icon name="share"></ion-icon>
          </ion-fab-button>
        </ion-fab>

        {/* fab placed to the (vertical) center and end */}
        <ion-fab vertical="center" horizontal="end" slot="fixed">
          <ion-fab-button>
            <ion-icon name="add"></ion-icon>
          </ion-fab-button>
        </ion-fab>

        {/* fab placed to the top and end and on the top edge of the  content overlapping header */}
        <ion-fab vertical="top" horizontal="end" edge slot="fixed">
          <ion-fab-button>
            <ion-icon name="person"></ion-icon>
          </ion-fab-button>
        </ion-fab>

        {/* fab placed to the bottom and start and on the bottom edge of content  overlapping footer with a list to the right */}
        <ion-fab vertical="bottom" horizontal="start" edge slot="fixed">
          <ion-fab-button>
            <ion-icon name="settings"></ion-icon>
          </ion-fab-button>
          <ion-fab-list side="end">
            <ion-fab-button><ion-icon name="logo-vimeo"></ion-icon></ion-fab-button>
          </ion-fab-list>
        </ion-fab>

        {/* fab placed in the center of the content with a list on each side */}
        <ion-fab vertical="center" horizontal="center" slot="fixed">
          <ion-fab-button>
            <ion-icon name="share"></ion-icon>
          </ion-fab-button>
          <ion-fab-list side="top">
            <ion-fab-button><ion-icon name="logo-vimeo"></ion-icon></ion-fab-button>
          </ion-fab-list>
          <ion-fab-list side="bottom">
            <ion-fab-button><ion-icon name="logo-facebook"></ion-icon></ion-fab-button>
          </ion-fab-list>
          <ion-fab-list side="start">
            <ion-fab-button><ion-icon name="logo-instagram"></ion-icon></ion-fab-button>
          </ion-fab-list>
          <ion-fab-list side="end">
            <ion-fab-button><ion-icon name="logo-twitter"></ion-icon></ion-fab-button>
          </ion-fab-list>
        </ion-fab>
      </ion-content>,
      <ion-content>
        <ion-refresher slot="fixed" >
          <ion-refresher-content></ion-refresher-content>
        </ion-refresher>
      </ion-content>,
      <ion-content>
        <ion-item>
          <ion-radio slot="start" value="griff"></ion-radio>
        </ion-item>
      </ion-content>,
      <ion-footer>
        <ion-toolbar>
          <ion-title>
            <ion-label >Hi Mate</ion-label>
          </ion-title>
          <ion-title>
            <ion-item>
              <ion-label>Hi Mate</ion-label>
            </ion-item>
            <ion-item>
              <ion-label>Hi Mate</ion-label>
            </ion-item>
            <ion-item>
              <ion-label>Hi Mate</ion-label>
            </ion-item>
            Footer <span> <ion-icon name="add-circle-outline"></ion-icon></span>
          </ion-title>
        </ion-toolbar>
      </ion-footer>
    ];
  }

}
