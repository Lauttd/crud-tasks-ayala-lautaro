import express from "express";
import dotenv from "dotenv";
import { initDB } from "./src/config/database.js";
import { routerTask } from "./src/routes/task.routes.js";
import { routerUsers } from "./src/routes/users.routes.js";
import { routerAlumno } from "./src/routes/alumnos.routes.js";
import { routerProfesores } from "./src/routes/profesores.routes.js";
import { routerAlumnoProfesor } from "./src/routes/alumnos_profesores.routes.js"
import { routerPerfil } from "./src/routes/perfil.routes.js";


dotenv.config();

const app = express();
const PORT = process.env.PORT;

app.use(express.json());
app.use("/", routerTask);
app.use("/", routerUsers);
app.use("/", routerAlumno);
app.use/("/", routerPerfil);
app.use("/", routerProfesores);
app.use("/", routerAlumnoProfesor)

initDB().then(() => {
    app.listen(PORT, () => {
        console.log(`corriendo en http://localhost:${PORT}`);
    });
});