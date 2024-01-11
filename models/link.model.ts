import mongoose from 'mongoose';
const Schema = mongoose.Schema;

let linkSchema = new Schema();

export default mongoose.model('linkSchema', linkSchema);