const { Builder, By, Key, until } = require('selenium-webdriver');
const express = require('express');
const bodyParser = require('body-parser');

import { middleware } from './modules/web-service';

const URL_RPG = 'http://localhost:3000/';
const BROWSER_RPG = 'firefox';
const TITLE_RPG = 'My Game';


export class Education {

    driver: any;

    constructor() { }

    startWebService(app) {
        app.use(bodyParser.urlencoded({ extended: true }));
        app.use(bodyParser.json());
        middleware(app, this);
    }

    async startSelenium() {
        this.driver = await new Builder().forBrowser(BROWSER_RPG).build();
        await this.driver.get(URL_RPG);
        await this.driver.wait(until.titleIs(TITLE_RPG), 2000);
    }
}


