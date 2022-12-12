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
    
    setInterval(() => {
      this.emit(Beat.events.BIT);
      console.log("bit")
    }, 600);
    
  }
}
