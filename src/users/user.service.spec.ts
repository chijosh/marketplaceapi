import { UsersService } from './users.service';
import { UserSignUpDto } from './dto/user-signup.dto';
import { UserEntity } from './entities/user.entity';
import { Test, TestingModule } from '@nestjs/testing';
import { getRepositoryToken } from '@nestjs/typeorm';

class MockRepository<T> {
  create = jest.fn();
  save = jest.fn();
  findOneBy = jest.fn();
}

describe('UsersService', () => {
  let usersService: UsersService;
  let userRepository: MockRepository<UserEntity>;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        UsersService,
        {
          provide: getRepositoryToken(UserEntity),
          useClass: MockRepository,
        },
      ],
    }).compile();

    usersService = module.get<UsersService>(UsersService);
    userRepository = module.get<MockRepository<UserEntity>>(
      getRepositoryToken(UserEntity),
    );
  });

  it('should successfully sign up a new user', async () => {
    const userSignUpDto: UserSignUpDto = {
      email: 'test@example.com',
      password: 'password123',
      firstName: 'Test',
      lastName: 'User',
    };

    userRepository.findOneBy.mockResolvedValue(undefined);

    const user: Partial<UserEntity> = {
      email: userSignUpDto.email,
      password: '', 
      firstName: userSignUpDto.firstName,
      lastName: userSignUpDto.lastName,
    };

    userRepository.create.mockReturnValue(user);
    userRepository.save.mockResolvedValue(user);

    const result = await usersService.signup(userSignUpDto);

    expect(result).toEqual(user);

    expect(result.password).toBeUndefined();

    userRepository.create.mockReturnValue(user);
    userRepository.save.mockResolvedValue(user);
  });
});
