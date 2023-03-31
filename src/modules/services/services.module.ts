import { Module } from '@nestjs/common';
import { ServicesController } from './services.controller';
import { ServicesService } from './services/services.service';
import { MongooseModule } from '@nestjs/mongoose';
import { servicesSchema } from './schemas/services.schema';

@Module({
  imports: [MongooseModule.forFeature([{ name: 'services', schema: servicesSchema }])],
  controllers: [ServicesController],
  providers: [ServicesService]
})
export class ServicesModule {}
