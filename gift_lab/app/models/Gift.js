

export class Gift {

  constructor(data) {
    this.id = data.id
    this.url = data.url
    this.tag = data.tag
    this.opened = data.opened
    this.creatorId = data.creatorId

  }

  get giftTemplate() {

    return `
    
   <div class="d-flex">
            <img class="gift-img" onclick="app.giftsController.openGift('${this.id}')" role="button" src=" ${this.url}" alt="">
          </div>
          <p class="m-2">${this.tag} </p>
          <button onclick="app.giftsController.deleteGift('${this.id}')" class="text-end"> delete gift </button>
    `



  }

}

