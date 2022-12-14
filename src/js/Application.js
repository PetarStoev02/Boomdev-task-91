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
    this._create();

    this._beat.on(Beat.events.BIT, this._create);
    this.emit(Application.events.READY);
  }

  _create() {
    const lyrics = ["Ah", "ha", "ha", "ha", "stayin' alive", "stayin' alive"];
    const message = document.createElement("div");
    message.classList.add("message");

    if (this.count === undefined) {
      message.innerText = lyrics[0];
      this.count++;
    } else{
      message.innerText = lyrics[this.count];
      this.count++;
    }

    
    document.querySelector(".main").appendChild(message);
  }
}
