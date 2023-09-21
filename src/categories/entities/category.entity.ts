import { Column, CreateDateColumn, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn, Timestamp, UpdateDateColumn } from "typeorm";
import { UserEntity } from "../../users/entities/user.entity";
import { ProductEntity } from "src/products/entities/product.entity";

@Entity({name: 'categories'})
export class CategoryEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @Column()
    description: string;

    @CreateDateColumn()
    createdAt: Timestamp;

    @UpdateDateColumn()
    updatedAt: Timestamp;

    @ManyToOne(() => UserEntity, (user) => user.categories)
    addedBy: UserEntity;

    @OneToMany(() => ProductEntity, (product) => product.category)
    products: ProductEntity[];
}

