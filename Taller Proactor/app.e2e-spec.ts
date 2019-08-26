app.e2e-spec.ts

import { TourOfHeroesPage } from './app.po';

describe('Tour of heroes Dashboard', () => {
  let page: TourOfHeroesPage;

  beforeEach(() => {
    page = new TourOfHeroesPage();
  });

  it('should display top 4 heroes', () => {
    page.navigateTo();
    expect(page.getTop4Heroes()).toEqual(['Mr. Nice', 'Narco', 'Bombasto', 'Celeritas']);
  });

  it('should navigate to heroes', () => {
    page.navigateToHeroes();
    expect(page.getAllHeroes().count()).toBe(11);
  });

  it('search to hero', () => {
    page.navigateTo();
    page.searchHeroInput('Narco');
    page.selectHeroSearch();
    page.searchText();
    page.editHeroName(' Editado');
    page.saveEditHeroName();
    page.navigateTo();
    page.selectHeroDashboard();
    page.navigateToHeroes();
    page.deleteHero();
    page.navigateHeroPage();
  });
});