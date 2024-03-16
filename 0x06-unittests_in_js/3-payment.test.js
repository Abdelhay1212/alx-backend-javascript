const sinon = require('sinon');
const Utils = require('./utils');
const chai = require('chai');
const sendPaymentRequestToApi = require('./3-payment');

const expect = chai.expect;
describe('sendPaymentRequestToApi', () => {
  it('validates the usage of the Utils.calculateNumber function', () => {
    // create a spy on the function Utils.calculateNumber
    const calculateNumberSpy = sinon.spy(Utils, 'calculateNumber');
    // call the function under the test
    sendPaymentRequestToApi(100, 20);
    // Assert that Utils.calculateNumber was called once with the correct arguments
    expect(calculateNumberSpy.calledOnceWithExactly('SUM', 100, 20)).to.be.true;
    calculateNumberSpy.restore();
  });
});
