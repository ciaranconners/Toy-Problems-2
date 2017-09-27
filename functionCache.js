// If you are calculating complex things or execute time-consuming API calls, you sometimes want to cache the results. In this case we want you to create a function wrapper, which takes a function and caches its results depending on the arguments, that were applied to the function.

/**
* @param {function} func
*/

function cache(func) {
  let results = {};
  return function(...args) {
    if (!(JSON.stringify(args) in results)) {
      results[JSON.stringify(args)] = func.apply(null, args);
    }
    return results[JSON.stringify(args)];
  };
}