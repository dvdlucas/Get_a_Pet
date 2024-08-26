import mongoose from "mongoose";

const connectDatabase = () => {
  console.log("Wait connecting to the database");

  mongoose
    .connect(process.env.CONECT_DB, {})
    .then(() => console.log("MongoDB Altlas Connected"))
    .catch((error) => console.log(error));
};

export default connectDatabase;
