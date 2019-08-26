import {browser, by, element, ElementFinder} from 'protractor';

export class TourOfHeroesPage {
  navigateTo() {
    return browser.get('/');
  }

  getTop4Heroes() {
    return element.all(by.css('.module.hero')).all(by.tagName('h4')).getText();
  }

  navigateToHeroes() {
    element(by.linkText('Heroes')).click();
  }

  getAllHeroes() {
    return element(by.tagName('my-heroes')).all(by.tagName('li'));
  }

  enterNewHeroInInput(newHero: string) {
    element(by.tagName('input')).sendKeys(newHero);
    element(by.buttonText('Add')).click();
  }
    searchHeroInput(heroName: string) {
    element(by.tagName('input')).sendKeys(heroName);
  }

  selectHeroSearch() {
    element(by.css('.search-result')).click();
  }

  searchText() {
    return element.all(by.css('.ng-untouched')).getText();
  }
  
  editHeroName(heroName: string) {
    element(by.tagName('input')).sendKeys('');
    element(by.tagName('input')).sendKeys(heroName);
  }

  saveEditHeroName() {
    element(by.buttonText('Save')).click();
  }

  selectHeroDashboard() {
    element(by.xpath("//*[contains(text(),'Bombasto')]")).click();

  }

  deleteHero() {
    element(by.buttonText('x')).click();
  }

  navigateHeroPage() {
    element(by.xpath("//*[contains(text(),'Celeritas')]")).click();
  }
  
  waitForURLContain(urlExpected: string, timeout: number) {
    try {
        const condition = browser.ExpectedConditions;
        browser.wait(condition.urlContains(urlExpected), timeout);
    } catch (e) {
        console.error('URL not contain text.', e);
    };
}
}