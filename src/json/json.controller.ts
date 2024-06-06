import {
  Controller,
  Get,
  Post,
  Body,
  ValidationPipe,
  UsePipes,
} from '@nestjs/common';
import { JsonService } from './json.service';
import { CreateJsonDto } from './create-json.dto';

@Controller('json')
export class JsonController {
  constructor(private readonly jsonService: JsonService) {}

  @Get()
  getJson() {
    return this.jsonService.getJson();
  }

  @Post()
  @UsePipes(new ValidationPipe({ transform: true }))
  updateJson(@Body() newJson: CreateJsonDto) {
    return this.jsonService.updateJson(newJson);
  }
}
