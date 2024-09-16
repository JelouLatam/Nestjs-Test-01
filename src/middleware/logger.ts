import { Injectable, NestMiddleware } from '@nestjs/common';
import { Request, Response, NextFunction } from 'express';

@Injectable()
export class Logger implements NestMiddleware {
  use(req: Request, res: Response, next: NextFunction) {
    console.log(
      `Request url: ${req.baseUrl}\tRequest Method: ${req.method}\tRequest time: ${new Date()}`,
    );
    next();
  }
}
