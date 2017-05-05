/**
 * Created by Prateek on 4/22/2017.
 */
var driver;
var selenium = require('selenium-webdriver');
var chai = require('chai');
chai.use(require('chai-as-promised'));
var expect = chai.expect;
var until = require("selenium-webdriver/lib/until");

before(function() {
    this.driver = new selenium.Builder().forBrowser('firefox').build();
    return this.driver.getWindowHandle();
});

after(function() {
    // return this.driver.quit();
});

describe('Webdriver tutorial', function() {
    beforeEach(function() {

        return this.driver.get('https://www.groupon.com/login');
    });
    it('has the Groupon Title in the window\'s title', function(){
        var uname = "groupontest102@gmail.com";
        var pswrd = "Passwd!1";
        console.log(typeof uname);
        this.driver.findElement(selenium.By.id("email-input")).sendKeys('groupontest102@gmail.com');
        this.driver.findElement(selenium.By.id("password-input")).sendKeys('Passwd!1');
        /*selenium.executeScript("document.getElementById('email-input').setAttribute('value', uname)");
        selenium.executeScript("document.getElementById('password-input').setAttribute('value', pswrd)");*/


        // this.driver.findElement({ xpath : "/html/body/div[1]/div[2]/section[2]/div/div[2]/div[1]/figure[2]/a/div/div[2]/div[6]/div"}).click();
        return expect(this.driver.getTitle()).to.eventually.contain('Groupon: Deals and Coupons for Restaurants, Fitness, Travel, Shopping, Beauty, and more.');
    });

    /*it('has the Groupon Title in the window\'s title', function() {

        this.driver.findElement({id:"nothx"}).click();
        this.driver.findElement({ linkText : "Cart"}).click();
        // this.driver.findElement({ xpath : "/html/body/div[1]/div[2]/section[2]/div/div[2]/div[1]/figure[2]/a/div/div[2]/div[6]/div"}).click();
        return expect(this.driver.getTitle()).to.eventually.contain('Groupon: Deals and Coupons for Restaurants, Fitness, Travel, Shopping, Beauty, and more.');
    });*/
    /*
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
    });*/
});