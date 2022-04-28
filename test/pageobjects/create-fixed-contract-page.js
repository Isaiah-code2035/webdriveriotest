const Page = require('./page')

class FixedCreate extends Page {


    open() {
        return super.open('create/fixed');
    }

}

module.exports = new FixedCreate();