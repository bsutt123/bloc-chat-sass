import { BlocChatSassPage } from './app.po';

describe('bloc-chat-sass App', () => {
  let page: BlocChatSassPage;

  beforeEach(() => {
    page = new BlocChatSassPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
