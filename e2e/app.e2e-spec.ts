import { WebDoctorPage } from './app.po';

describe('web-doctor App', () => {
  let page: WebDoctorPage;

  beforeEach(() => {
    page = new WebDoctorPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
