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
    if (this.count == 0) {
      message.innerText = lyrics[0];
      console.log("start");
      console.log(lyrics[0]);
    } else {
      message.innerText = lyrics[this.count];
      console.log("start false");

    }

    this.count++;
    document.querySelector(".main").appendChild(message);
  }
}
