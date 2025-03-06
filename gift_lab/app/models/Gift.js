

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
    <p>
    <img onclick="app.giftsController.openGift('${this.id}')" role="button" src=" ${this.url}" alt="">
   </p>
   <button class="text-end"> delete gift </button>
  </div>
    `



  }

}

