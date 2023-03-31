import { Module } from '@nestjs/common';
import { PackagesController } from './packages.controller';
import { PackagesService } from './packages/packages.service';
import { MongooseModule } from '@nestjs/mongoose';
import { packageSchema } from './schemas/packages.schema';

@Module({
  imports: [MongooseModule.forFeature([{ name: 'packages', schema: packageSchema }])],
  controllers: [PackagesController],
  providers: [PackagesService]
})
export class PackagesModule {}
