import express, {Request, Response} from "express";
import cors from "cors";
const app = express();
const PORT = 3000;

app.use(cors());
 
app.get("/", (req: Request, res: Response) => {
  res.send("Olá, Mundo!");
});
 
app.listen(PORT, ()=>{
    console.log(`Servidor rodando na porta: ${PORT}`);
});