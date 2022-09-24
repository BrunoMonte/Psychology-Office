import express from "express";
import "reflect-metadata";
import { AppDataSource } from "./data-source";

AppDataSource.initialize().then(() => {
  const app = express();

  app.use(express.json());

  app.listen(3000, () => console.log("Server is running"));
});
