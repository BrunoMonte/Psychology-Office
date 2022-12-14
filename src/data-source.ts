import { DataSource } from "typeorm";
import "dotenv/config";
import "reflect-metadata";

const port = process.env.TYPEORM_PORT as number | undefined;

export const AppDataSource = new DataSource({
  type: "postgres",
  host: process.env.TYPEORM_HOST,
  port: port,
  username: process.env.TYPEORM_USERNAME,
  password: process.env.TYPEORM_PASSWORD,
  database: process.env.TYPEORM_PORT,
  synchronize: true,
  logging: true,
  entities: [],
  subscribers: [],
  migrations: [],
});
