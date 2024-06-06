import { IsInt, IsString, Length, IsNotEmpty } from 'class-validator';

export class CreateJsonDto {
  @IsString()
  @IsNotEmpty()
  @Length(1, 50)
  name: string;

  @IsInt()
  @IsNotEmpty()
  age: number;

  @IsString()
  @IsNotEmpty()
  @Length(1, 100)
  occupation: string;
}
