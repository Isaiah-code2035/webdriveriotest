const Page = require('./page')

class ContractPage extends Page {

    get pageTitle() {
        return $("//h1[@class ='mr-6']")

    }

    get successfulCreation() {
        return $("//h4[contains(text(),'Signatures')]")
    }

}

module.exports = new ContractPage()