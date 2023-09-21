import { Injectable, NestMiddleware } from '@nestjs/common';
import { isArray } from 'class-validator';
import { verify } from 'jsonwebtoken';
import { Request, Response, NextFunction } from 'express';
import { UsersService } from 'src/users/users.service';
import { Users } from 'src/users/entities/user.entity';

declare global {
    namespace Express {
        interface Request {
            currentUser?: Users;
        }
    }
}

@Injectable()
export class CurrentUserMiddleware implements NestMiddleware {
    constructor(private readonly usersService: UsersService) {}
  async use(req: Request, res: Response, next: NextFunction) {
    const authHeader = req.headers.authorization || req.headers.Athorization;
    if (!authHeader || isArray(authHeader) || !authHeader.startsWith('Bearer ')) {
      req['currentUser'] = null;
    next();
    } else {
      try {
        const token = authHeader.split(' ')[1];
        const {id} = verify(token, process.env.JWT_SECRET) as {id: number};
        const currentUser = await this.usersService.findOne(+id);
        req['currentUser'] = currentUser;
    next();
      } catch (error) {
        req['currentUser'] = null;
        next();
      }
    }
  }
}
