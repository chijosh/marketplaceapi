import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { UserEntity } from './entities/user.entity';
import { Repository } from 'typeorm';
import { UserSignUpDto } from './dto/user-signup.dto';
import { hash, compare } from 'bcrypt';
import { UserSignInDto } from './dto/user-signin.dto';
import { sign } from 'jsonwebtoken';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(UserEntity)
    private usersRepository: Repository<UserEntity>,
  ) {}

  async signup(userSignUp: UserSignUpDto): Promise<UserEntity> {
    const userExists = await this.findUserByEmail(userSignUp.email);
    if (userExists) {
      throw new BadRequestException('Email is not available');
    }
    userSignUp.password = await hash(userSignUp.password, 10);
    let user = this.usersRepository.create(userSignUp);
    user = await this.usersRepository.save(user);
    delete user.password;
    return user;
  }

  async signin(userSignIn: UserSignInDto): Promise<UserEntity> {
    const userExists = await this.usersRepository
      .createQueryBuilder('user')
      .addSelect('user.password')
      .where('user.email = :email', { email: userSignIn.email })
      .getOne();
    if (!userExists) {
      throw new BadRequestException('Email or password is incorrect');
    }
    const passwordMatch = await compare(
      userSignIn.password,
      userExists.password,
    );
    if (!passwordMatch) {
      throw new BadRequestException('Email or password is incorrect');
    }
    delete userExists.password;
    return userExists;
  }

  async findAll(): Promise<UserEntity[]> {
    return await this.usersRepository.find();
  }

  async findOne(id: number): Promise<UserEntity> {
    const user = await this.usersRepository.findOneBy({ id });
    if (!user) {
      throw new NotFoundException('No user found');
    }
    return user;
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    return `This action updates a #${id} user`;
  }

  remove(id: number) {
    return `This action removes a #${id} user`;
  }

  async findUserByEmail(email: string): Promise<UserEntity | undefined> {
    return await this.usersRepository.findOneBy({ email });
  }

  async generateToken(user: UserEntity): Promise<string> {
    return sign({ id: user.id }, process.env.JWT_SECRET, {
      expiresIn: process.env.JWT_SECRET_EXPIRE_TIME,
    });
  }
}
