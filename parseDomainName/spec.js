describe('getDomainName', function() {

  it('should correctly grab the domain name from a valid URL which includes the "www"', function() {
    expect(domainName("http://www.zombie-bites.com")).to.equal("zombie-bites");
    expect(domainName("https://www.cnet.com")).to.equal("cnet");
  });

  it('should correctly grab the domain name from a valid URL which omits the "www"', function() {
    expect(domainName("http://github.com/carbonfive/raygun")).to.equal("github");
  });

});

