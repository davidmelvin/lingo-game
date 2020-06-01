import io from "socket.io-client";

export default class GameSetup {
  socket: SocketIOClient.Socket;
  public socketTarget = "";
  constructor() {
    this.socket = io.connect("http://localhost:3000");
    this.socket.on("connect", () =>
      this.socket.emit("hello", `Hi there! I am ${window.navigator.userAgent}`)
    );
    this.socket.on("welcome", (welcomeMessage: string) => console.log(welcomeMessage));
    this.socket.on("seconds", (seconds: number) =>
      console.log(`Server started ${seconds} secs ago.`)
    );
    this.socket.on("online", (online: number) => console.log(`${online} users online.`));
  }
}
