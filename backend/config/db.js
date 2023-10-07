import mongoose from "mongoose";

const connectDB = () => {
    mongoose
    .connect(process.env.MONGO_URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
    .then(() => {
        console.log("\x1b[94m", "Database Connected");
    })
    .catch((e) => {
        console.log("Db connection failed");
        console.log(e);
    });
};

export default connectDB;
