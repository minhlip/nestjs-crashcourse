import {
  ArrayNotEmpty,
  IsArray,
  IsDateString,
  IsMilitaryTime,
  IsNotEmpty,
  IsString,
  MaxLength,
} from 'class-validator';

export class CreateSongDTO {
  @IsString()
  @IsNotEmpty()
  readonly title: string;

  @IsNotEmpty()
  @IsArray()
  @IsString({ each: true })
  @ArrayNotEmpty()
  @MaxLength(6, { each: true })
  readonly artists: string[];

  @IsNotEmpty()
  @IsDateString()
  readonly releasedDate: Date | string;

  @IsMilitaryTime()
  @IsNotEmpty()
  readonly duration: Date;
}
