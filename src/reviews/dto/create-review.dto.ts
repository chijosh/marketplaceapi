import { IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class CreateReviewDto {
  @IsNotEmpty({ message: 'Product is required' })
  @IsNumber({}, { message: 'Product id must be a number' })
  productId: number;

  @IsNotEmpty({ message: 'Ratings is required' })
  @IsNumber({}, { message: 'Ratings must be a number' })
  ratings: number;

  @IsNotEmpty({ message: 'Comment is required' })
  @IsString()
  comment: string;
}
