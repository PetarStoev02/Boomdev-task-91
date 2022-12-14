// import Application from "./Application";
import EventEmitter from "eventemitter3";

export default class Beat extends EventEmitter {
  static get events() {
    return {
      BIT: "bit",
    };
  }

  constructor() {
    super();
    this.count = 0;

    setInterval(() => {
      this.emit(Beat.events.BIT);

      if (this.count == 6) {
        this.count = 0;
        console.log(this.count);
      }
    }, 600);
  }
}
