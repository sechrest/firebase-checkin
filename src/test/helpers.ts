export function negatePromise(p: Promise<any>, error: string): Promise<any> {
  return new Promise((resolve, reject) => {
    p.then(() => reject(new Error(error)));
    p.catch((error) => resolve(error.message));
  });
}

export function randomString(n = 8) {
  let result = '';
  for (let i = 0; i < n; i++) {
    result += String.fromCharCode(65 + Math.floor(Math.random() * 26));
  }
  return result;
}

export function tracePromise(p: Promise<any>, message: string) {
  p
    .then((value) => {
      console.log("Promise " + message + " resolves.");
    })
    .catch((error) => {
      console.log("Promise " + message + " rejected (" + error + ")");
    })
}