import { PartialType } from '@nestjs/swagger';
import { CreateCropDto } from './crop.create-dto';

export class UpdateCropDto extends PartialType(CreateCropDto) {}
