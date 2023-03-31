import { Body, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Packages } from '../interfaces/packages.interfaces';
import { Model } from 'mongoose';
import { PackagesDto } from '../dto/packages.dto';

@Injectable()
export class PackagesService {
    constructor(@InjectModel('packages') private readonly packagesModel: Model<Packages>) { }
    async findAll():Promise<Packages[]> {
        return await this.packagesModel.find().populate("services.service")
    }
    async create(pkgInterface: Packages): Promise<Packages> {
        const newPackage = new this.packagesModel(pkgInterface);
        return newPackage.save();
      }
      async delete(id: string): Promise<Packages> {
        return this.packagesModel.findByIdAndRemove(id);
      }
      async update(id: string, item: Packages): Promise<Packages> {
        return await this.packagesModel.findByIdAndUpdate(id, item, { new: true });
      }
      async findOne(id: string): Promise<Packages> {
        return await this.packagesModel.findOne({ _id: id }).populate('services.service')
      }
}
