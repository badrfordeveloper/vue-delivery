import Toast from "vue-toastification"

// Import the CSS or use your own!
import "vue-toastification/dist/index.css"


const options = {
  // You can set your default options here
}

export default function (app) {

  app.use(Toast, options)
}
