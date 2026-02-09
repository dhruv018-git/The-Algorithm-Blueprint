/**
 * @param {Array<Function>} functions
 * @return {Promise<any>}
 */
var promiseAll = function (functions) {
  return new Promise((resolve, reject) => {
    const results = new Array(functions.length);
    let completed = 0;

    if (functions.length === 0) {
      resolve([]);
      return;
    }

    functions.forEach((fn, index) => {
      try {
        fn()
          .then((value) => {
            results[index] = value;
            completed++;

            if (completed === functions.length) {
              resolve(results);
            }
          })
          .catch((error) => {
            reject(error);
          });
      } catch (err) {
        reject(err);
      }
    });
  });
};


/**
 * const promise = promiseAll([() => new Promise(res => res(42))])
 * promise.then(console.log); // [42]
 */