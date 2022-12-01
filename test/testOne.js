import assert from 'assert'
import { By, Key, Builder } from "selenium-webdriver";




describe('test suite', () => {
    it('test',  async () => {
        let driver = await new Builder().forBrowser("chrome").build();
        await driver.get("http://google.com");
        await driver.findElement(By.name('q')).sendKeys('amazon');
        await driver.findElement(By.name("btnK")).submit()
        driver.wait
        driver.close()
    });
});