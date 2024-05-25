import { Module } from '@nestjs/common';
import { ListService } from './list.service';
import { ListController } from './list.controller';
import { ToDo_List } from './list.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([ToDo_List])],
  providers: [ListService],
  controllers: [ListController]
})
export class ListModule {}
