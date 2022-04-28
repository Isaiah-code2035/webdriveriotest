const Page = require('./page')

class ModalPage extends Page {

    get modalBtn() {
        return $("//i[@class ='deel-ui__icon-close-1']")
    }

    async closeModal() {

        await this.modalBtn.click()

    }


}


module.exports = new ModalPage();