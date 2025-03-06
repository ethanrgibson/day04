import { baseURL } from "../env.js";

// @ts-ignore
export const giphyApi = axios.create({

  baseURL: 'http://api.giphy.com/v1/gifs',
  timeout: 8000,

  params: {

    key: 'UZKF8h6Jo5b1nob75BEIxHPNzNSzoWVN',
    rating: 'pg',
    limit: 10,

  }


});

