import { Module } from '@nestjs/common';
import { JsonService } from './json.service';
import { JsonController } from './json.controller';

@Module({
  providers: [JsonService],
  controllers: [JsonController],
  exports: [JsonService],
})
export class JsonModule {}
