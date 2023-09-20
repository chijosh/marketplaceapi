import { UserRole } from 'src/utility/common/user-roles.enum';
import {Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn} from 'typeorm'

@Entity()
export class Users {
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

    @Column({ type: 'enum', enum: UserRole, array:true, default: [UserRole.CUSTOMER]})
    roles: UserRole[];

    @CreateDateColumn()
    createdAt: Date;

    @UpdateDateColumn()
    updatedAt: Date;
}
