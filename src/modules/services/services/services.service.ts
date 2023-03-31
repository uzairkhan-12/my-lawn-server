import { Injectable } from '@nestjs/common';
import { serviceInterface } from '../interfaces/services.interface';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
 
@Injectable()
export class ServicesService {
    constructor(@InjectModel('services') private readonly servicesModel: Model<serviceInterface>) { }
    async findAll(): Promise<serviceInterface[]> {
        return await this.servicesModel.find();
      }
    async addService(serviceInterface:serviceInterface): Promise<serviceInterface> {
        const newService = new this.servicesModel(serviceInterface);
        return newService.save()
    }
    async delete(id: string): Promise<serviceInterface> {
        return this.servicesModel.findByIdAndRemove(id);
    }
    
    async update(id: string, service: serviceInterface): Promise<serviceInterface> {
      return await this.servicesModel.findByIdAndUpdate(id, service, { new: true });
    }
}
