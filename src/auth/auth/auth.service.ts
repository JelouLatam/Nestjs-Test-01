import { Inject, Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UsersService } from 'src/users/users/users.service';
import { JWTPayload } from '../jwt.payload';

@Injectable()
export class AuthService {
    constructor(
        @Inject(UsersService)
        private usersService: UsersService,
        private jwtService: JwtService
      ) {}
    
      async validateUser(username: string, pass: string): Promise<boolean> {
        const user = await this.usersService.getUserByName(username);
        return await user.validatePassword(pass);
      }
    
      async generateAccessToken(name: string) {
        const user = await this.usersService.getUserByName(name);
        const payload: JWTPayload = { userId: user.userId };
        return {
          access_token: this.jwtService.sign(payload),
        };
      }
}
