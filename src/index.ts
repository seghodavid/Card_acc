import "reflect-metadata";
import {createConnection} from "typeorm";
import express from "express";
import dotenv from "dotenv"

import {User} from "./entity/User";
import { createUser } from "./Routes/create_user";

dotenv.config()

const app = express();
const port = process.env.PORT;

app.use(express.json())
app.use(createUser)



const main = async () => {
    try{
       await createConnection ({
          type: process.env.DB_TYPE as any,
          host: process.env.DB_HOST,
          port: parseInt(process.env.DB_PORT),
          username: process.env.DB_USERNAME,
          password: process.env.DB_PASSWORD,
          database: process.env.DB,
          "entities": [
              "src/entity/**/*.ts"
           ],
           "synchronize": true
      })
      console.log("Connected to Postgres")
      app.listen(port, () => {
        console.log(`Server is up and running on port: ${port}`);
    })
    }catch(error){
      console.error(error)
    }
  }
  
  main()


