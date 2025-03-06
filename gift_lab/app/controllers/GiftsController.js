import { AppState } from "../AppState.js";
import { giftsService } from "../services/GiftsService.js";
import { Pop } from "../utils/Pop.js";

export class GiftsController {

  constructor() {


    AppState.on('identity', this.getGiftsData)
    AppState.on('gifts', this.drawGifts)
  }



  async getGiftsData() {

    try {
      await giftsService.getGifts()

    } catch (error) {
      Pop.error(error);
      console.error(error);
    }


  }


  drawGifts() {

    const gifts = AppState.gifts

    let giftsContent = ''

    gifts.forEach(gift => giftsContent += gift.giftTemplate)

    const giftElem = document.getElementById('giftContent')
    giftElem.innerHTML = giftsContent

    console.log('drawing gifts');

  }

  async openGift(giftId) {
    try {
      await giftsService.openGift(giftId)
    } catch (error) {
      Pop.error(error)
      console.error(error);
    }



  }


}