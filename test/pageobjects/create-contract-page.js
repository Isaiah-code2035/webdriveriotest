const Page = require('./page')

class CreateContract extends Page {

// get ContractPageTitle () {
//    return $ ("//h1[@class='deel-ui__typography__heading_1']")
//     }
   
get fixedRateLink () {
    return $ ("//h4[@class ='deel-ui__typography__heading_4']")
}

get fixedTitle (){
    return $("//h2[@class='mb-10']")
}

get lastPage (){
    return $("//div[@class = 'css-1gza1gg']")
}


async fixedRate () {
    await this.fixedRateLink.click()
}


    open () {
        return super.open('create');
    }
}

module.exports = new CreateContract();