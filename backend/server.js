import express from "express"
import routes from "./routes/routes.js"

const app = express();
app.use(express.json()); 
app.use("api/v1",routes);

app.listen(5000, (req,res) => {
    console.log("server is running")
});