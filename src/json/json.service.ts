import { Injectable } from '@nestjs/common';
import { CreateJsonDto } from './create-json.dto';

@Injectable()
export class JsonService {
  private jsonData: CreateJsonDto = {
    name: 'John Doe',
    age: 30,
    occupation: 'Software Developer',
  };

  getJson() {
    return this.jsonData;
  }

  updateJson(newJson: CreateJsonDto) {
    this.jsonData = { ...this.jsonData, ...newJson };
    return this.jsonData;
  }
}
