import { Body, Controller, Get, Post } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello() {
    return {data: "aaa"};
  }
  @Get('readFile')
  async readFile() {
    return await this.appService.readFile()
  }
  @Post()
  async writeFile(@Body() body) {
    return await this.appService.writeFile(body);
  }
}
