import io from "socket.io-client";
export default class GameSetup {
    constructor() {
        this.socketTarget = "";
        this.socket = io.connect("http://localhost:3000");
        this.socket.on("connect", () => this.socket.emit("hello", `Hi there! I am ${window.navigator.userAgent}`));
        this.socket.on("welcome", (welcomeMessage) => console.log(welcomeMessage));
        this.socket.on("seconds", (seconds) => console.log(`Server started ${seconds} secs ago.`));
        this.socket.on("online", (online) => console.log(`${online} users online.`));
    }
}
//# sourceMappingURL=init.js.map