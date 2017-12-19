const path = require('path');

module.exports = {
    'Go To site': (browser) => {
        const filePathAbsolute = path.join(__dirname, 'data/uploadExample.txt');
        console.log(filePathAbsolute);
        browser
            .init()
            .waitForElementVisible('body')
            .sendKeys('input[type=file]', filePathAbsolute)
            .pause(1000);
    },

    after: (browser) => {
        browser.end();
    }
};
