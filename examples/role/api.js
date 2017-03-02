// @flow

export function response(data: Response): Promise<Response> {
  return new Promise(resolve => {
    // Fake delay :)
    setTimeout(() => {
      resolve(data);
    }, 2000);
  });
}
