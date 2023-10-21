// ----

import axios from 'axios';

function App() {
  let response = null;

  new Promise(async (resolve, reject) => {
    try {
      response = await axios.get(
        'https://pro-api.coinmarketcap.com/v1/cryptocurrency/listings/latest',
        {
          headers: {
            'X-CMC_PRO_API_KEY': 'b0cbb3f5-1fb1-47e8-b61a-a910f45ac69b',
            Accept: 'application / json',
          },
        },
      );
    } catch (ex) {
      response = null;
      // error
      console.log(ex);
      reject(ex);
    }
    if (response) {
      // success
      const json = response.data;
      console.log(json);
      resolve(json);
    }
  });

  return (
    <>
      <div className='bg-red-500 w-screen h-screen'>
        <div className='container bg-green-500 h-52'></div>
      </div>
    </>
  );
}

export default App;
