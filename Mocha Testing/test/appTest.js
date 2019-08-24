const assert = require('chai').assert;
// const sayHello = require('../app').sayHello;
// const addNumbers = require('../app').addNumbers;
const app = require ('../app');


//Results of test
sayHelloResult = app.sayHello();
inBetweenResult = app.inBetween();


//Tests
describe("App",function(){

    describe('sayHello()',function(){

        it('sayHello should return hello',function(){
            assert.equal(sayHelloResult,'Hello');
        });
    
        it('sayHello should return type string', function(){
            assert.typeOf(sayHelloResult,'string');
        })
    });

    describe('addNumbers()',function(){

    it('addNumbers should be above 7',function(){
        let result = app.addNumbers(8,7);
        assert.isAbove(result, 7)

    })

    it('addNumbers should return a number',function(){
        
        let result = app.addNumbers(5,3);
        assert.typeOf(result,"number")


        })
    });

    describe('inBetween()',function(){

        it('should return number between 1 through 10',function(){
            assert.isAbove(inBetweenResult,'7');
    
        })

    });
});