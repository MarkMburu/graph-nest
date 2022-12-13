import { Body, Controller, Get, Post } from '@nestjs/common';
import { AppService } from './app.service';
import { CreateStatusDto } from './dto/create-status.dto';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getStatuses();
  }
  @Post()
  create(@Body() createStatusDto: CreateStatusDto) {
    return this.appService.statusService(createStatusDto);
  }
}
