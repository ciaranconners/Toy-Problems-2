function domainName(url) {
  let domainName = '';
  for (let i = 0; i < url.length; i++) {
    if (url[i] === '/' && url[i + 1] === '/') {
      if (url[i + 2] !== 'w') {
        for (let j = i + 2; j < url.length; j++) {
          domainName += url[j];
          if (url[j + 1] === '.') {
            return domainName;
          }
        }
      } else {
        for (let j = i + 6; i < url.length; j++) {
          domainName += url[j];
          if (url[j + 1] === '.') {
            return domainName;
          }
        }
      }
    }
  }
}