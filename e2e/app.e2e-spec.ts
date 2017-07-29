import { DanHofmanWebSitePage } from './app.po';

describe('dan-hofman-web-site App', () => {
  let page: DanHofmanWebSitePage;

  beforeEach(() => {
    page = new DanHofmanWebSitePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('DHWS works!');
  });
});
