const chai=require('chai');
const assert = chai.assert;
const should=chai.should();
const expect=chai.expect;

//########ASSERT########//

describe('Aspect check',function(){
    let userName='code improve';
   let beverages = { tea: [ 'chai', 'matcha', 'oolong' ] };
    it('check string',function(){
        assert.typeOf(userName,'string')
    })
    it('check equal',function(){
        assert.equal(userName,'code improve')
    })
    it('check length',function(){
        assert.lengthOf(beverages.tea,3)
    })
})


//##########SHOULD########//

describe('Should check function',function(){
    let userName='code improve';
    let beverages = { tea: [ 'chai', 'matcha', 'oolong' ] };
    it('check string',function(){
        userName.should.be.a('string');
    })
    it('check equal',function(){
        userName.should.equal('code improve');
    })
    it('check length',function(){
        beverages.tea.should.lengthOf(3);
    })
    it('check property',function(){
        beverages.should.have.property('tea').with.lengthOf(3);
    })
})


//#########expect#########//

describe('Expect check function',function(){
    let userName='code improve';
    let beverages = { tea: [ 'chai', 'matcha', 'oolong' ] };
    it('check string',function(){
        expect(userName).to.be.a('string');
    })
    it('check equal',function(){
        expect(userName).to.equal('code improve');
    })
    it('check length',function(){
        expect(beverages.tea).to.have.lengthOf(3);
    })
    it('check property',function(){
        expect(beverages).to.have.property('tea').with.lengthOf(3);
    })
})
it('check without describe',function(){
    expect(userName).to.equal("code improve")
})

