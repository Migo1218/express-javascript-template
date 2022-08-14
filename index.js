import express from "express";
import dotenv from "dotenv";
import connectDB from "./config/db.js";

//RUTAS

import usersRoutes from "./routes/userRoutes.js"


const app = express();
app.use(express.json());
dotenv.config();
connectDB();

app.use("/api/users", usersRoutes)

const PORT = process.env.PORT || 4001;
const servidor = app.listen(PORT, () => {
    console.log("server run " + PORT);
})
