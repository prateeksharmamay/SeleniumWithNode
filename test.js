/**
 * Created by Prateek on 4/22/2017.
 */
/*var webdriver = require('selenium-webdriver');

var driver = new webdriver.Builder().forBrowser('firefox').build();

driver.get('http://www.google.com');
driver.findElement(webdriver.By.name('q')).sendKeys('simple programmer');
driver.findElement(webdriver.By.name('btnG')).click();
driver.quit();*/


var driver;
var selenium = require('selenium-webdriver');
var chai = require('chai');
chai.use(require('chai-as-promised'));
var expect = chai.expect;

before(function() {
    this.driver = new selenium.Builder().forBrowser('firefox').build();
    return this.driver.getWindowHandle();
});

after(function() {
    return this.driver.quit();
});

describe('Webdriver tutorial', function() {
    beforeEach(function() {

        return this.driver.get('http://bites.goodeggs.com/posts/selenium-webdriver-nodejs-tutorial/');
    });
    it('has the title of the post in the window\'s title', function() {
        return expect(this.driver.getTitle()).to.eventually.contain('Getting started with Selenium Webdriver for node.js');
    });
    it('has publication date', function() {
        var text;
        text = this.driver.findElement({
            css: '.postMetaInline time'
        }).getText();
        return expect(text).to.eventually.equal('Dec 30, 2014');
    });
    it('links back to the homepage', function() {
        this.driver.findElement({
            linkText: 'Home'
        }).click();
        return expect(this.driver.getCurrentUrl()).to.eventually.equal('https://team.goodeggs.com/');
    });
});