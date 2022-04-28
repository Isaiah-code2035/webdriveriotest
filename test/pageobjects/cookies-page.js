const Page = require('./page')


class Cookies extends Page {

    get cookiesBtn() {
        return $("//a[@id='CybotCookiebotDialogBodyButtonAccept']")
    }

    async acceptCookies() {
        await this.cookiesBtn.click()
    }
}

module.exports = new Cookies();