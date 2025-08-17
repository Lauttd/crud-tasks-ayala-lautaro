import express from "express";
import dotenv from "dotenv";
import { initDB } from "./src/config/database.js";
import { routerTask } from "./src/routes/task.routes.js";
import { routerUsers } from "./src/routes/users.routes.js";
import { usersModel } from "./src/models/users.model.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT;

app.use(express.json());
app.use("/", routerTask);
app.use("/", routerUsers);

initDB().then(() => {
    app.listen(PORT, () => {
        console.log(`corriendo en http://localhost:${PORT}`);
    });
});