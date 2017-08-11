import { TestMoviePage } from './app.po';

describe('movie-drinking-game-desktop-client App', () => {
  let page: TestMoviePage;

  beforeEach(() => {
    page = new TestMoviePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
