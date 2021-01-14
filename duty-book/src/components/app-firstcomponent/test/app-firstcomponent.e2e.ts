import { newE2EPage } from '@stencil/core/testing';

describe('app-firstcomponent', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<app-firstcomponent></app-firstcomponent>');

    const element = await page.find('app-firstcomponent');
    expect(element).toHaveClass('hydrated');
  });
});
