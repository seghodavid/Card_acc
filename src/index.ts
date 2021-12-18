import "reflect-metadata";
import {createConnection} from "typeorm";
import express from "express";

import {User} from "./entity/User";
import { createUser } from "./Routes/create_user";

const app = express();
const port = 2000;

app.use(express.json())
app.use(createUser)



const main = async () => {
    try{
       await createConnection ({
          type: "postgres",
          host: "localhost",
          port: 5432,
          username: "postgres",
          password: "Television19",
          database: "card_db",
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


