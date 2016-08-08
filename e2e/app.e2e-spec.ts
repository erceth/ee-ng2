import { EeNg2Page } from './app.po';

describe('ee-ng2 App', function() {
  let page: EeNg2Page;

  beforeEach(() => {
    page = new EeNg2Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
