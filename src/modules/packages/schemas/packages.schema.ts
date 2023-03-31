import * as mongoose from 'mongoose';
const {ObjectId} = mongoose.Schema.Types
export const packageSchema = new mongoose.Schema({
    packageName:String,
    packagePrice:Number,
    services: [
        {
            service: {type:ObjectId, ref: "services"},
            quantity: {type: Number, default: 1}
        }
    ]
});