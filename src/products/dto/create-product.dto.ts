import { IsArray, IsNotEmpty, IsNumber, IsPositive, IsString, Min } from "class-validator";

export class CreateProductDto {
    @IsNotEmpty({message: 'Product name is required'})
    @IsString()
    name: string;

    @IsNotEmpty({message: 'Product description is required'})
    @IsString()
    description: string;

    @IsNotEmpty({message: 'Product price is required'})
    @IsNumber({maxDecimalPlaces: 2}, {message: 'Product price must be a number with maximum 2 decimal places'})
    @IsPositive({message: 'Product price must be a positive number'})
    price: number;

    @IsNotEmpty({message: 'Product stock is required'})
    @IsNumber({}, {message: 'Product stock must be a number'})
    @Min(0, {message: 'Product stock must be a positive number'})
    stock: number;

    @IsNotEmpty({message: 'Product images are required'})
    @IsArray({message: 'Product images must be in an array format'})
    images: string[];

    @IsNotEmpty({message: 'Product category is required'})
    @IsNumber({}, {message: 'Product category id must be a number'})   
    categoryId: number;
}
