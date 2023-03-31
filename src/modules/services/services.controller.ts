import { Body, Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';
import { ServicesService } from './services/services.service';
import { serviceInterface } from './interfaces/services.interface';
import { CreateServiceDto } from './dto/services.dto';

@Controller('services')
export class ServicesController {
    constructor(private readonly servicesService : ServicesService) {}
    @Get('get-all-services')
    findAll(): Promise<serviceInterface[]> {
    return this.servicesService.findAll();
    }
    @Post('add-service')
    addService(@Body() createServiceDto:CreateServiceDto):Promise<serviceInterface> {
        return this.servicesService.addService(createServiceDto)
    }
    @Delete('delete-service/:id')
    delete(@Param('id') id:string):Promise<serviceInterface> {
    return this.servicesService.delete(id)
}
    @Patch('update-service/:id')
    updateService(@Body() createServiceDto:CreateServiceDto , @Param('id') id:string): Promise<serviceInterface> {
    return this.servicesService.update(id,createServiceDto)
}
}
