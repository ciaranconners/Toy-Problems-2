describe('maxArraySum', function() {

  it('should return correctly the unique value in an array with a unique value', function() {
    expect(findUniq([0, 1, 0])).to.equal(1);
  });

  it('should return correctly the unique value in an array with a unique value', function() {
    expect(findUniq([1, 1, 1, 2, 1, 1])).to.equal(2);
  });

  it('should return correctly null for an array with no unique value', function() {
    expect(findUniq([1, 1, 1, 1, 1, 1])).to.equal(null);
  });

});