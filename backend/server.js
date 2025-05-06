import express from "express"
import routes from "./routes/routes.js"
import connfun from "./utils/conne.js";
import cors from "cors";


connfun();
const app = express();
app.use(cors());
app.use(express.json()); 
app.use("/api/v1",routes);
app.use("/", routes);  

app.listen(5000, (req,res) => {
    console.log("server is running")
});