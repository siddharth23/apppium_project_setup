import { Given, Then } from '@wdio/cucumber-framework';
import HomePage from '../pageobjects/homepage.page';
const assert = require('assert');
import { driver } from '@wdio/globals'
Given('I open the app', async () => {
     assert.strictEqual(await driver.getContext(),"FLUTTER")
});
Then('I can view the homepage', async () => {
    assert.strictEqual(await driver.getElementText(HomePage.homePageHeading),"Flutter UI")
});