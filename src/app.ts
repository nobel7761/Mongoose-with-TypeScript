// app related everything will be here
import express, { Application } from "express";
import cors from "cors";
//Application routes
import userRoutes from "./app/modules/user/user.route";

const app: Application = express();

//using cors
app.use(cors());

//parse data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//use like a middleware
app.use("/api/v1/user", userRoutes);

export default app;
