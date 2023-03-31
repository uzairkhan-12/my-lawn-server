import * as mongoose from 'mongoose';

export const servicesSchema = new mongoose.Schema({
  serviceName: String,
  servicePrice: String,
  serviceDescription: String,
  servicePic:String
});