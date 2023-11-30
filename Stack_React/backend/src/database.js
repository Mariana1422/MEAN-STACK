import mongoose from "mongoose";


mongoose.set('strictQuery', false);

export const connectDB = async () => {
    try {
        await mongoose.connect("mongodb+srv://mariana:12345@mariana.ek3xjni.mongodb.net/?retryWrites=true&w=majority", {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });
        console.log(">> DB Connect");
    } catch (error) {
        console.error('Error connecting to database:', error);
    }
}
