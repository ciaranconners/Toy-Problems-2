describe('maxArraySum', function() {

  it('should return correctly for an array of all positives', function() {
    let test = [1, 2, 3];
    expect(maxArraySum(test)).to.equal(6);
  });

  it('should return correctly for an array of mixed positives and negatives', function() {
    let test = [1, 2, 3, -2];
    expect(maxArraySum(test)).to.equal(6);
  });

});