import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { ServicesModule } from './modules/services/services.module';
import config from './config/keys'
import { PackagesModule } from './modules/packages/packages.module';
@Module({
  imports: [ MongooseModule.forRoot(config.mongoURI), ServicesModule ,PackagesModule],
  controllers: [AppController],
  providers: [AppService],
})

export class AppModule {
  
}


