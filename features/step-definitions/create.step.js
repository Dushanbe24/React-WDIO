import { Given, When, Then } from "@wdio/cucumber-framework";
import CreatePage from "../pageobjects/create.page";
import HomePage from "../pageobjects/home.paje";

const pages = {
  home: HomePage,
};

// Given(/^I am on the home page$/, async (local) => {
//   expect(CreatePage.openHomePage());
//   // expect(browser.getUrl(`${local}`));
// });

Given(/^I am on the (\w+) page$/, async (page) => {
  await pages[page].open();
});

Then(/^I should see the "(.*)" title$/, async (title) => {
  await HomePage.sizeTitleHead().toBeEnabled(title);
});

Then("I should see {string} container header", async function (header) {
  if (header === "delete") {
    const headerName = driver.findElement(By.className("products-found"));
    expect(headerName).toEqual("16Product(s) found");
  }
});
