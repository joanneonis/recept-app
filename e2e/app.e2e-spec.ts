import { Ng2todoPage } from './app.po';

describe('ng2todo App', () => {
  let page: Ng2todoPage;

  beforeEach(() => {
    page = new Ng2todoPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
