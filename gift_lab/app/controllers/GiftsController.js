import { AppState } from "../AppState.js";
import { giftsService } from "../services/GiftsService.js";
import { giphySercive } from "../services/GiphyService.js";
import { getFormData } from "../utils/FormHandler.js";
import { Pop } from "../utils/Pop.js";

export class GiftsController {

  constructor() {


    AppState.on('identity', this.getGiftsData)
    AppState.on('gifts', this.drawGifts)
    AppState.on('giffy', this.drawGiffy)
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

  async deleteGift(giftId) {
    try {
      const wantsToDelete = await Pop.confirm('Are you sure you want to delete this gift?')
      if (!wantsToDelete) return
      await giftsService.deleteGift(giftId)
    } catch (error) {
      Pop.error(error)
      console.error(error);
    }
  }

  async createGift() {
    try {
      event.preventDefault()
      const giftForm = event.target
      const giftData = getFormData(giftForm)
      console.log(giftData);
      await giftsService.createGift(giftData)
      await giphySercive.search(giftData.q)
    } catch (error) {
      Pop.error(error)
      console.error(error);
    }


  }


  async searchGifs() {

    try {
      event.preventDefault()
      const form = event.target

      // @ts-ignore
      await giphySercive.search(form.q.value)

    } catch (error) {
      Pop.error(error)
      console.error(error);
    }



  }

  drawGiffy() {
    document.getElementById('giffy-options').innerHTML = AppState.giffy.map(i => `<img src="${i}" role="button" onclick="createdGiftImg.value = '${i}'" />`).join('')
  }

}