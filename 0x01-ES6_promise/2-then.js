export default function handleResponseFromAPI(promise) {
  return promise.then(() => ({ status: 200, body: 'success' }))
    .then(() => new Error())
    .then(() => {
      console.log('Got a response from the API');
    });
}
