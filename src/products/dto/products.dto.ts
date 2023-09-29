import { Exclude, Expose, Transform, Type } from 'class-transformer';

export class ProductsDto {
  @Expose()
  totalProducts: number;

  @Expose()
  limit: number;

  @Expose()
  @Type(() => ProductList)
  products: ProductList[];
}

export class ProductList {
  @Expose({ name: 'product_id' })
  id: number;

  @Expose({ name: 'product_name' })
  name: string;

  @Expose({ name: 'product_description' })
  description: string;

  @Expose({ name: 'product_price' })
  price: number;

  @Expose({ name: 'product_stock' })
  stock: number;

  @Expose({ name: 'product_images' })
  @Transform(({ value }) => value.toString().split(','))
  images: string[];

  @Transform(({ obj }) => {
    return {
      id: obj.category_id,
      name: obj.category_name,
      description: obj.category_description,
    };
  })
  @Expose()
  category: any;

  @Exclude()
  category_id: number;

  @Exclude()
  category_name: string;

  @Exclude()
  category_description: string;

  @Exclude()
  product_createdAt: string;

  @Exclude()
  product_updatedAt: string;

  @Expose({ name: 'reviewcount' })
  review: number;

  @Expose({ name: 'avgrating' })
  rating: number;

  @Exclude()
  category_createdAt: string;

  @Exclude()
  category_updatedAt: string;
}
