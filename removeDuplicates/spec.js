describe('removeArrayDuplicates', function() {

  it('should return correctly for with duplicates', function() {
    let test = [1, 2, 2, 3];
    expect(removeArrayDuplicates(test)).to.eql([1, 2, 3]);
  });

  it('should return correctly for an array without duplicates', function() {
    let test = [1, 2, 3];
    expect(removeArrayDuplicates(test)).to.eql([1, 2, 3]);
  });

  it('should work for a large array with duplicates', function() {
    let test = [];
    for (var i = 0; i < 10000; i++) {
      test.push(1);
      test.push(2);
      test.push(3);
    }
    expect(removeArrayDuplicates(test)).to.eql([1, 2, 3]);
  });

  it('should work for a large array without duplicates', function() {
    let test = [];
    for (var i = 0; i < 10000; i++) {
      test.push(i);
    }
    expect(removeArrayDuplicates(test)).to.eql(test);
  });

});