import { IsNotEmpty, IsEnum } from 'class-validator';

export class Task {
  id: number;

  @IsNotEmpty()
  title: string;

  description: string;

  @IsEnum(['pending', 'in_progress', 'completed'])
  status: 'pending' | 'in_progress' | 'completed';
}
