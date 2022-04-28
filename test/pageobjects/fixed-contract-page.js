const Page = require('./page');

class FixedContract extends Page {

    get entity() {
        return $("//div[@class='deel-ui__select__control css-yk16xz-control']")

    }

    get contractorName() {
        return $("//input[@name='name']")
    }


    get contractorTaxResidence() {
        return $("//div[@class ='deel-ui__select__value-container css-1hwfws3']")
    }

    get contractorState() {
        return $("//div[@class ='deel-ui__select__value-container css-1hwfws3']")
    }

    get jobTitle() {
        return $("//input[@name ='jobTitle']")
    }



    get seniorityLevel() {
        return $("//div[@class = 'deel-ui__select__value-container css-1hwfws3']")

    }


    get scopeOfWork() {
        return $("//textarea[@name ='scope']")
    }

    get contractorStartDate() {
        return $("//input[@name ='effectiveDate']")
    }

    get nextBtn() {
        return $("//button[@type ='submit']")
    }

    get contractorTaxResDRP() {

        return $("//div[contains(text(),'United States')]")

    }

    get stateDrp() {
        return $("//div[contains(text(),'Colorado')]")
    }

    get levelDrp() {
        return $("//div[contains(text(),'Not applicable')]")
    }


    get currency() {
        return $("//div[@class= 'deel-ui__select__single-value css-1uccc91-singleValue']")
    }

    get currencyDRP() {
        return $("//div[contains(text(),'GBP - British Pound')]")
    }

    get price() {
        //    return $ ("//input[@class='deel-ui__input-component__input deel-ui__input-component__input_placeholder']")
        return $("//input[@name ='rate']")
    }

    get paymentFrequency() {
        return $("//div[@class ='deel-ui__select__single-value css-1uccc91-singleValue']")
    }

    get paymentFrequencyDrp() {
        return $("//div[contains(text(),'Monthly')]")
        // return $("//div[@class = 'deel-ui__select__single-value css-1uccc91-singleValue']")
    }

    get proceed() {
        return $("//button[@type ='submit']")
    }

    get createContract() {
        return $("//button[@class ='button mt-7 submit-compliance heap-create-contract-fixed-compliance-create w-100']")
    }

    get specialClause() {
        return $("//div[@class='box text-left']")
    }

    get specialClausebtn() {
        return $("//div[contains(text(),'add a special clause')]")
    }

    get specialClauseText() {
        return $("//textarea[@class ='textarea pt-4 pr-7 pl-7 resizable pb-4 ']")
    }

    get nextToContract() {
        return $("//div[contains(text(),'next')]")
    }

    get createContractBtn() {
        return $("//div[contains(text(),'create contract')]")
    }

    //functions
    async createFixed() {

        await this.entity.click()
    }

    async enterName() {
        await this.contractorName.setValue("Isaiah")
    }

    async residence() {
        await this.contractorTaxResidence.click();
        await this.contractorTaxResDRP.scrollIntoView();
        await this.contractorTaxResDRP.click();
    }


    async state() {
        await this.contractorState.click();

        await this.stateDrp.scrollIntoView()
        await this.stateDrp.click();

    }



    async job() {

        await this.jobTitle.click({ x: 30, y: 40 });
        await this.jobTitle.setValue('Software QA Engineer');

    }

    async level() {

        await this.seniorityLevel.click();
        await this.levelDrp.scrollIntoView();
        await this.levelDrp.click()


    }

    async scope() {
        await this.scopeOfWork.setValue("Just Test and find bugs")
    }

    async date() {
        await this.contractorStartDate.click();

    }

    async next() {
        await this.nextBtn.click();

    }

    async GBP() {
        await this.currency.click()
        await this.currencyDRP.scrollIntoView();
        await this.currencyDRP.click();
        await this.price.setValue('1000');
    }

    async PaymentF() {
        await this.paymentFrequency.click();
        await this.paymentFrequencyDrp.scrollIntoView()
        await this.paymentFrequencyDrp.click();
    }

    async specialClauseClick() {
        await this.specialClause.scrollIntoView()
        await this.specialClausebtn.click()
        await this.specialClauseText.setValue("Non-compete clause: Do not work for a competitor till after 12 months after you stopped working with us")
    }

    async BtnNext() {
        await this.nextToContract.click()
    }

    async btnContractCreate() {
        await this.createContractBtn.click()
    }
}

module.exports = new FixedContract();