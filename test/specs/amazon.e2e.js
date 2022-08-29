const basePage = require("./../pageobjects/basePage.js");
const selectors = require("./../selectors/selectors.js");
const expect = require("chai").expect;
describe("Amazon add to cart Tests", () => {
  it("should add a item to cart ", async () => {
    await basePage.open("https://www.amazon.com/");

    await console.log(await basePage.title());

    await basePage.setInputValue(selectors.SEARCH_INPUT_FIELD, "mobile");

    await basePage.click(selectors.SEARCH_BUTTON);

    await basePage.click(selectors.FOUR_STAR_RATING);

    await basePage.click(selectors.IMG, 1);

    await basePage.click(selectors.ADD_TO_CART_INPUT);

    const amazon_text = await basePage.getTextOfTag(
      selectors.ADD_TO_CART_TEXT_SPAN
    );

    expect(amazon_text).to.equal("Added to Cart");

    await basePage.click(selectors.PROCEED_TO_CHECKOUT_BTN);

    await basePage.doTheElementExist(selectors.EMAIL_INPUT);

    await basePage.doTheElementExist(selectors.AMAZON_TEXT);
  });

  xit("should give me the departure time", async () => {
    await basePage.open("https://www.makemytrip.com/");
    await basePage.click(selectors.DEPARTURE_BTN);
    const date = await (
      await basePage.findElement(selectors.DEPARTURE_DIV)
    ).getAttribute("aria-label");

    const price = await basePage.getTextOfTag(selectors.PRICE);
    console.log(date);
    console.log(price);
  });
});
