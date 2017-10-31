const isValidIP =(str) => {
  let octets = str.split('.');
  if (octets.length !== 4) {
    return false;
  }
  for (let x of octets) {
    let asNum = parseInt(x);
    if (x[0] === '0' && x[1] || asNum < 0 || asNum > 255) {
      return false;
    }
  }
  return true;
};

