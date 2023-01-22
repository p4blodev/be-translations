const express = require("express");
const http = require("http");

const path = require("path");
const cors = require("cors");

class Server {
  constructor() {
    this.app = express();
    this.port = process.env.PORT;
    this.server = http.createServer(this.app);
  }

  middlewares() {
    this.app.use(express.static(path.resolve(__dirname, "../public")));
    this.app.use(cors());
    this.app.get("/locales/en", (req, res) => {
      res.setHeader("Content-Type", "application/json");
      res.json({ title: "English", gretting: "Welcome" });
    });

    this.app.get("/locales/es", (req, res) => {
      res.setHeader("Content-Type", "application/json");
      res.json({ title: "Español", gretting: "Bienvenido" });
    });
    this.app.get("/locales/pt", (req, res) => {
      res.setHeader("Content-Type", "application/json");
      res.json({ title: "Portuguese", gretting: "Bem-vindo" });
    });
  }

  execute() {
    this.middlewares();
    this.server.listen(this.port, () => {
      console.log("server running in port: ", this.port);
    });
  }
}

module.exports = Server;
