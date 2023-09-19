import { UserRole } from 'src/utility/common/user-roles.enum';
import {Column, Entity, PrimaryGeneratedColumn} from 'typeorm'

@Entity()
export class UsersEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    email: string;

    @Column()
    password: string;

    @Column()
    name: string;

    @Column({ type: 'enum', enum: UserRole, default: [UserRole.CUSTOMER]})
    role: UserRole[];


    createdAt: Date;


    updatedAt: Date;
}
