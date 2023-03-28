class CreatePage {
  openHomepage() {
    browser.url("http://localhost:3000/"); //https://react-shopping-cart-67954.firebaseapp.com/
    console.log("Navigating to Url 'http://localhost:3000/'");
  }

  vaerifyPageHeading = async (title) => {
    await browser.waitUntil(
      async () => (await $(".page-heading").getText()) === title,
      {
        timeout: 10000,
        timeoutMsg: "expected text is different after 10s",
      }
    );
    const headingTitle = await $(".page-heading");
    expect(await headingTitle.getText()).toEqual(title);
  };
}
export default new CreatePage();
