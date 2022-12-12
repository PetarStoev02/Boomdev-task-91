import EventEmitter from "eventemitter3";
import Beat from "./Beat";

export default class Application extends EventEmitter {
  static get events() {
    return {
      READY: "ready",
    };
  }

  constructor() {
    super();
    this._beat = new Beat("beat");
  

    const lyrics = ["Ah", "ha", "ha", "ha", "stayin' alive", "stayin' alive"];
    let count = 0;
    
    console.log(this._beat.setInterval)

    // this._beat.on(this._beat.setInterval, this._create());
    this.emit(Application.events.READY);
  }

   _create() {
    const message = document.createElement("div");
    message.classList.add("message");

    message.innerText = ``;
    document.querySelector(".main").appendChild(message);
  }
}
