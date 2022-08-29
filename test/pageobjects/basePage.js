class BasePage {
  async open(url) {
    await browser.url(url);
  }

  async title() {
    return await browser.getTitle();
  }

  async findElement(selector) {
    return await $(selector);
  }

  async findElements(selector) {
    return await $$(selector);
  }

  async setInputValue(selector, value) {
    const element = await this.findElement(selector);
    await element.addValue(value);
  }

  async click(selector, index) {
    let element = null;
    if (index) {
      element = await this.findElements(selector);
      element = element[1];
    } else {
      element = await this.findElement(selector);
    }

    await element.click();
  }

  async doTheElementExist(selector) {
    const element = await this.findElement(selector);
    await element.waitForExist();
  }

  async getTextOfTag(selector) {
    const element = await this.findElement(selector);
    return await element.getText();
  }
}

module.exports = new BasePage();
