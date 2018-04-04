import { FantasyAirlinePage } from './app.po';

describe('fantasy-airline App', () => {
  let page: FantasyAirlinePage;

  beforeEach(() => {
    page = new FantasyAirlinePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
