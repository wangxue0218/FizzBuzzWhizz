"use strict";
var _ = require("lodash");
var chai = require("chai");
var sinon = require("sinon");
var sinonChai = require("sinon-chai");
var expect = chai.expect;
chai.use(sinonChai);

var main = require("../lib/main.js");


describe("测试描述", function(){
    sinon.spy(console, 'log');

    it("测试用例1", function(){

        var result = main(3,5,7,10);
        var expect_string = '1 2 Fizz 4 Buzz Fizz Whizz 8 Fizz Buzz ';

        expect(expect_string).to.equal(result);
    });
    it("测试用例2", function(){

        var result = main(3,5,7,100);
        var expect_string = '1 2 Fizz 4 Buzz Fizz Whizz 8 Fizz Buzz 11 Fizz Fizz Whizz FizzBuzz 16 17 Fizz 19 Buzz FizzWhizz 22 Fizz Fizz Buzz 26 Fizz Whizz 29 Fizz Fizz Fizz Fizz Fizz Fizz Fizz Fizz Fizz Fizz Buzz 41 FizzWhizz Fizz 44 FizzBuzz 46 47 Fizz Whizz Buzz' +
        ' Fizz 52 Fizz Fizz Buzz Whizz Fizz 58 59 FizzBuzz 61 62 Fizz 64 Buzz Fizz 67 68 Fizz BuzzWhizz 71 Fizz Fizz 74 FizzBuzz 76 Whizz Fizz 79 Buzz Fizz 82 Fizz FizzWhizz Buzz 86 Fizz 88 89 FizzBuzz Whizz 92 Fizz 94 Buzz Fizz 97 Whizz Fizz Buzz ';

        expect(expect_string).to.equal(result);
    });
    it("测试用例3", function(){

        var result = main(2,4,9,30);
        var expect_string = '1 Fizz 3 FizzBuzz 5 Fizz 7 FizzBuzz Whizz Fizz 11 Fizz 13 Fizz 15 FizzBuzz 17 FizzWhizz 19 Fizz Fizz Fizz Fizz Fizz Fizz Fizz Fizz Fizz Fizz Fizz ';

        expect(expect_string).to.equal(result);
    });
});
