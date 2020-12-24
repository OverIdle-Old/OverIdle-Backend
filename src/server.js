import express from "express";
import fs from "fs";

const app = express();
const port = 3000;
const apiRoot = "/api";
const assetsRsrc = "assets/";
const wallDir = `${assetsRsrc}/wall/`;
let wallImg;

fs.readdir("assets/wall/", (_err, path) => {
  let wallFn = path[0];
  if (!(wallFn.endsWith("jpg") || wallFn.endsWith("png"))) throw Error("Unsupported file-type, please use another file-type, like png or jpg.");
  wallImg = fs.realpathSync(wallDir + wallFn);
});


app.get(`${apiRoot}/getdailywall`, (_req, res) => wallImg && res.sendFile(wallImg));

let server = app.listen(port, () => {
  const {address, port} = server.address();
  console.log(`Listening on ${address + port}`);
});