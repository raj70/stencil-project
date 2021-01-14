import { newSpecPage } from '@stencil/core/testing';
import { AppFirstcomponent } from '../app-firstcomponent';

describe('app-firstcomponent', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [AppFirstcomponent],
      html: `<app-firstcomponent></app-firstcomponent>`,
    });
    expect(page.root).toEqualHtml(`
      <app-firstcomponent>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </app-firstcomponent>
    `);
  });
});
