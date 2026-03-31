import mongoose from "mongoose"

const connectDB = async () =>{

    console.log("👉 Connecting to MongoDB...");
    await mongoose.connect(process.env.DB_URL)
    .then(()=>console.log("DB Connected for role-auth"))
    .catch((e) => console.log(e.message))
}

export default connectDB;