const LoginPage = require('../pageobjects/login.page');
const FirstPage = require('../pageobjects/firstPage');
const Cookies = require('../pageobjects/cookies-page')
const ModalPage = require('../pageobjects/modal-page');
const contractPage = require('../pageobjects/contract-page');
const CreateContract = require('../pageobjects/create-contract-page')
const createFixed = require('../pageobjects/create-fixed-contract-page')
const FixedContract = require('../pageobjects/fixed-contract-page');

describe('My Login application', () => {
    it('should login with valid credentials', async () => {
        await LoginPage.open();

        await LoginPage.login('daneilstan@geng.ng', 'Password@1');
        await expect(FirstPage.flashAlert).toBeExisting();
        await expect(FirstPage.flashAlert).toHaveTextContaining(
            'This website uses cookies');
    });

    it("Accept Cookies", async () => {
        await Cookies.acceptCookies();
    });

    it("close the modal for ne login", async () => {
        await ModalPage.closeModal()
        await expect(contractPage.pageTitle).toBeExisting();
        await expect(contractPage.pageTitle).toHaveTextContaining('Good evening, Daniel!')
    })

    it("Open the create contract", async () => {

        await CreateContract.open();
    })

    it("Create a fixed contract", async () => {
        await createFixed.open();
    })

    it("input fields of fixed contract", async () => {
        await FixedContract.createFixed();

    })

    it("input the name field", async () => {
        await FixedContract.enterName();
    })

    it("input the Taxresidence", async () => {
        await FixedContract.residence();
    })

    it("Input the state", async () => {
        await FixedContract.state();
    })

    it("Input the job Title", async () => {
        await FixedContract.job();
    })

    it("put in the seniority level", async () => {
        await FixedContract.level();
    })

    it("Input the scope of work", async () => {
        await FixedContract.scope();

    })

    it("Select Date", async () => {
        await FixedContract.date()
    })

    it("Click the next button", async () => {
        await FixedContract.next();
        await expect(CreateContract.fixedTitle).toBeExisting()
        await expect(CreateContract.fixedTitle).toHaveTextContaining("Creating a fixed contract")

    })

    it("payment", async () => {

        await FixedContract.GBP();
        await expect(CreateContract.fixedTitle).toBeExisting()
        await expect(CreateContract.fixedTitle).toHaveTextContaining("Creating a fixed contract")

    })

    it("payment frequency", async () => {
        await FixedContract.PaymentF();
    })

    it("Proceed next", async () => {
        await FixedContract.next();
        await FixedContract.next();
    })

    it("Special Clause", async () => {
        await FixedContract.specialClauseClick();
        await FixedContract.BtnNext();

    })

    it("create contract", async () => {
        await FixedContract.btnContractCreate();
        await expect(contractPage.successfulCreation).toHaveElementClass('subtitle');

    })

});


