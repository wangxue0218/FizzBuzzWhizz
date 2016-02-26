"use strict";
var _ = require("lodash");
var chai = require("chai");
var sinon = require("sinon");
var sinonChai = require("sinon-chai");
var expect = chai.expect;
chai.use(sinonChai);

var fizzbuzz = require("../lib/main.js");
var error_samenums_list = [3,5,5];
var error_unitnums_list = [3,5,14];
var error_morenums_list = [3,5,7,9];
var right_list = [3,5,7];
describe("FizzBuzz", function() {
  var sameinput = fizzbuzz(error_samenums_list);
  var errorinput = fizzbuzz(error_unitnums_list);
  var moreinout = fizzbuzz(error_morenums_list);
  var rightinput = fizzbuzz(right_list);
  describe("SadPath", function() {
    it("SadPath to 30 with same input", function() {
      var expected = "ERROR INPUT NUMBERS";
      expect(sameinput.connect(30)).to.equal(expected);
    });

      it("SadPath to 30 with ununit input", function() {
        var expected = "ERROR INPUT NUMBERS";
        expect(errorinput.connect(30)).to.equal(expected);
      });
      it("SadPath to 30 with more than three input", function() {
        var expected = "ERROR INPUT NUMBERS";
        expect(moreinout.connect(30)).to.equal(expected);
      });
  });
  describe("HappyPath.core", function() {

    it("should return Fizz when input is multple of a only", function() {
      expect(rightinput.core(3)).to.equal("Fizz");
      expect(rightinput.core(6)).to.equal("Fizz");
      expect(rightinput.core(9)).to.equal("Fizz");
    });

    it("should return Buzz when input is multple of b only", function() {
      expect(rightinput.core(5)).to.equal("Buzz");
      expect(rightinput.core(10)).to.equal("Buzz");
      expect(rightinput.core(20)).to.equal("Buzz");
    });

    it("should return Whizz when input is multple of c only", function() {
      expect(rightinput.core(7)).to.equal("Whizz");
      expect(rightinput.core(14)).to.equal("Whizz");
      expect(rightinput.core(28)).to.equal("Whizz");
    });

    it("should return FizzBuzz when input is multple of a, b", function() {
      expect(rightinput.core(15)).to.equal("FizzBuzz");
      expect(rightinput.core(45)).to.equal("FizzBuzz");
    });

    it("should return FizzWhizz when input is multple of a, c", function() {
      expect(rightinput.core(21)).to.equal("FizzWhizz");
      expect(rightinput.core(42)).to.equal("FizzWhizz");
    });

    it("should return BuzzWhizz when input is multple of b, c", function() {
      expect(rightinput.core(70)).to.equal("BuzzWhizz");
      expect(rightinput.core(140)).to.equal("BuzzWhizz");
    });

    it("should return FizzBuzzWhizz when input is multple of a, b, c", function() {
      expect(rightinput.core(105)).to.equal("FizzBuzzWhizz");
    });

    it("should return Fizz when input contains a but not multple of a,b,c", function() {
      expect(rightinput.core(3)).to.equal("Fizz");
      expect(rightinput.core(13)).to.equal("Fizz");
      expect(rightinput.core(23)).to.equal("Fizz");
    });

    it("should return Fizz only when input contains a but multple of a", function() {
      expect(rightinput.core(33)).to.equal("Fizz");
      expect(rightinput.core(39)).to.equal("Fizz");
    });
    it("should return Fizz only when input contains a but multple of b or c", function() {
      expect(rightinput.core(35)).to.equal("Fizz");
    });

    it("should return the original input if not matched with any rules", function() {
      expect(rightinput.core(1)).to.equal("1");
      expect(rightinput.core(2)).to.equal("2");
      expect(rightinput.core(4)).to.equal("4");
      expect(rightinput.core(8)).to.equal("8");
    });

  });

  describe("HappyPath.connect", function() {
    it("HappyPath to 30", function() {
      var expected = "1 2 Fizz 4 Buzz Fizz Whizz 8 Fizz Buzz 11 Fizz Fizz Whizz FizzBuzz 16 17 Fizz 19 Buzz FizzWhizz 22 Fizz Fizz Buzz 26 Fizz Whizz 29 Fizz ";
      expect(rightinput.connect(30)).to.equal(expected);
    });
    it("HappyPath to 100", function() {
      var expected = '1 2 Fizz 4 Buzz Fizz Whizz 8 Fizz Buzz 11 Fizz Fizz Whizz FizzBuzz 16 17 Fizz 19 Buzz FizzWhizz 22 Fizz Fizz Buzz 26 Fizz Whizz 29 Fizz Fizz Fizz Fizz Fizz Fizz Fizz Fizz Fizz Fizz Buzz 41 FizzWhizz Fizz 44 FizzBuzz 46 47 Fizz Whizz Buzz' +
      ' Fizz 52 Fizz Fizz Buzz Whizz Fizz 58 59 FizzBuzz 61 62 Fizz 64 Buzz Fizz 67 68 Fizz BuzzWhizz 71 Fizz Fizz 74 FizzBuzz 76 Whizz Fizz 79 Buzz Fizz 82 Fizz FizzWhizz Buzz 86 Fizz 88 89 FizzBuzz Whizz 92 Fizz 94 Buzz Fizz 97 Whizz Fizz Buzz ';
      expect(rightinput.connect(100)).to.equal(expected);
    });

  });

  describe(".main", function() {

    it("should call .connect with 100 as argument and print to console", function() {
      var mainspy = sinon.spy(rightinput, "connect");
      var logspy = sinon.spy(console, "log");
      rightinput.main();
      expect(mainspy).to.have.been.calledWith(100);
      expect(logspy).to.have.been.calledOnce;
    });

  })

});
