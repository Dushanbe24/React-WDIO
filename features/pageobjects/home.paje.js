import Page from "./page.js";
class HomePage extends Page {
  //WebElement Locators
  get sizesTitle() {
    return $(".title");
  }
  get productsFound() {
    return $("#products-found");
  }
  get shelfContainerHeader() {
    return $(".shelf-container-header");
  }

  //Actions
  sizeTitleHead() {
    this.sizesTitle.waitForEnabled();
    this.sizesTitle.getText();
  }

  open() {
    return super.open("3000");
  }
}
export default new HomePage();
