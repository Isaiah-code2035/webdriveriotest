

const Page = require('./page');

/**
 * sub page containing specific selectors and methods for a specific page
 */
class FirstPage extends Page {
    /**
     * define selectors using getter methods
     */
    get flashAlert () {
        return $("//div[@id='CybotCookiebotDialog']");
    }


}

module.exports = new FirstPage();
