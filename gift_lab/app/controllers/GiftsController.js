import { AppState } from "../AppState.js";
import { giftsService } from "../services/GiftsService.js";
import { Pop } from "../utils/Pop.js";

export class GiftsController {

  constructor() {

    console.log('live from the controller');
    AppState.on('identity', this.getGiftsData)
  }



  async getGiftsData() {

    try {
      await giftsService.getGifts()

    } catch (error) {
      Pop.error(error);
      console.error(error);


    }


  }





}