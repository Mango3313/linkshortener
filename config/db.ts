import mongoose from "mongoose";

const connectDd = async function (dbUrl: string = "", options: any = {}) {
        mongoose.Promise = global.Promise;
        await mongoose.connect(dbUrl, options);
};

export default connectDd;