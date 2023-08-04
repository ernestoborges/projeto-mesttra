import express, { Request, Response } from "express";
import cors from "cors";
import db from "./db/models";
// import { usersSeedList } from "./db/seeders/users";
import router from "./routes";
import dotenv from "dotenv";
dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

const PORT = Number(process.env.PORT) || 3000;


app.get("/", (req: Request, res: Response) => {
  res.send("Olá, Mundo!");
});

// Routes
app.use('/api', router);

db.sequelize.sync().then(() => {
  app.listen(PORT, "0.0.0.0",() => {
    console.log(`Servidor rodando na porta: ${PORT}`);
  });
})