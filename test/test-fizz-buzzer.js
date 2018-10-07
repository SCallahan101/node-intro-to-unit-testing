const chai = require('chai').expect;

const fizzBuzzer = require('/fizzBuzzer');

describe('fizzBuzzer', function() {

  it('the input can be any number as long it is one input', function() {
    const goodInputs = [
      [1],
      [10],
      [100]
    ];
    goodInputs(function(input) {
      const answer = fizzBuzzer(input);
      expect(answer).to.equal(input.expected);
    });
  });

  it('The input is non-numeric so therefore it is invalid input', function() {
    const badInputs = [
      ['hello'],
      ['1']
    ];
    badInputs(function(input) {
    expect(function() {
      fizzBuzzer([0]);
    }).to.throw(Error);
  });
  });
});
