import mongoose from "mongoose";
const URI = process.env.db_uri || "";

const dbConnect = async () => {
  try {
    await mongoose.connect(URI);
    console.log("Conectado correctamente a MongoDB");
  } catch (error) {
    console.log("Fallo de conexión a MongoDB", error);
  }
};

dbConnect();

export default mongoose;
