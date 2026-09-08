import express from "express";
import cors from "cors";

const app = express();
const PORT = 5000;

app.use(cors());
app.use(express.json());

app.get("/", (_req, res) => {
    res.json({
        message: "Welcome to the Owami API",
        status: "running"
    });
});

app.get("/api/recipes", (_req, res) => {
    res.json({
        recipes:[],
        message: "Recipe endpoint is ready",
    });
});

app.listen(PORT, () =>{
    console.log(`Owami API running on http://localhost:${PORT}`);
})