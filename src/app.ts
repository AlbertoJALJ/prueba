import * as bodyparser from "body-parser";
import cors from "cors";
import "dotenv/config";
import express from "express";
import fs from "fs";
import * as http from "http";
import https from "https";
import morgan from "morgan";
import swagger from "swagger-ui-express";
import YAML from "yamljs";
import { CommonRoutesConfig } from "./common/common.routes.config";
import { StoresRoutes } from "./stores/stores.routes";
const swaggerDocument = YAML.load("./swagger.yaml");

const app: express.Application = express();
const routes: Array<CommonRoutesConfig> = [];

app.use(bodyparser.json());
app.use(cors());
app.use(morgan("dev"));

routes.push(new StoresRoutes(app));

app.use("/api/docs", swagger.serve, swagger.setup(swaggerDocument));

app.get("/", (req: express.Request, res: express.Response) => {
  res.status(200).send(`Server running at http://localhost:3000`);
});

if (process.env.NODE_ENV === "production") {
  console.log("production");
  const PK = fs.readFileSync(
    "/etc/letsencrypt/live/catalogoeas.com/privkey.pem"
  );
  const CERT = fs.readFileSync(
    "/etc/letsencrypt/live/catalogoeas.com/fullchain.pem"
  );
  const credentials = { key: PK, cert: CERT };
  const httpServer = http.createServer(app);
  const httpsServer = https.createServer(credentials, app);

  httpsServer.listen(8443, () => {
    console.log(`Server running at http://localhost:8443`);
    routes.forEach((route: CommonRoutesConfig) => {
      console.log(`Routes configured for ${route.getName()}`);
    });
  });
  httpServer.listen(3000, () => {
    console.log(`Server running at http://localhost:3000`);
    routes.forEach((route: CommonRoutesConfig) => {
      console.log(`Routes configured for ${route.getName()}`);
    });
  });
} else {
  const httpServer = http.createServer(app);
  httpServer.listen(3000, () => {
    console.log(`Server running at http://localhost:3000`);
    routes.forEach((route: CommonRoutesConfig) => {
      console.log(`Routes configured for ${route.getName()}`);
    });
  });
}
