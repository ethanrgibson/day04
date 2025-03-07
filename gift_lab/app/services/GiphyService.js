import { AppState } from "../AppState.js";
import { baseURL } from "../env.js";
import { Gift } from "../models/Gift.js";

// @ts-ignore
export const giphyApi = axios.create({

  baseURL: 'http://api.giphy.com/v1/gifs',
  timeout: 8000,

  params: {

    api_key: 'UZKF8h6Jo5b1nob75BEIxHPNzNSzoWVN',
    rating: 'pg',
    limit: 1000,

  }


});

class GiphyService {


  async search(query) {

    const res = await giphyApi.get('search', {
      params: {
        q: query
      }
    })

    console.log(res.data);


    const gifs = res.data.data.map(g => g.images.downsized_large.url)
    AppState.giffy = gifs.filter(i => i)
    // const searchedGif = new Gift(gifs)


    // console.log(searchedGif);

  }


}



export const giphySercive = new GiphyService()
