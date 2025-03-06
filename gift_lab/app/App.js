import { GiftsController } from "./controllers/GiftsController.js"


class App {

  giftsController = new GiftsController()

}

window['app'] = new App()


