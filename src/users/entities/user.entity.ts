import { CategoryEntity } from 'src/categories/entities/category.entity';
import { Roles } from 'src/utility/common/user-roles.enum';
import {Column, CreateDateColumn, Entity, OneToMany, PrimaryGeneratedColumn, UpdateDateColumn} from 'typeorm'

@Entity('users')
export class UserEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({unique: true})
    email: string;

    @Column({select: false})
    password: string;

    @Column()
    firstName: string;

    @Column()
    lastName: string;

    @Column({ type: 'enum', enum: Roles, array:true, default: [Roles.CUSTOMER]})
    roles: Roles[];

    @CreateDateColumn()
    createdAt: Date;

    @UpdateDateColumn()
    updatedAt: Date;

    @OneToMany(() => CategoryEntity, (category) => category.addedBy)
    categories: CategoryEntity[];
}
