import { Injectable } from '@nestjs/common';
import { DeleteResult, Repository } from 'typeorm';
import { UserDTO } from './user.dto';
import { UserEntity } from './users.entity';
import { UserMapper } from './users.mapper';


@Injectable()
export class UsersRepository {

    constructor( 
        private usersRepository: Repository<UserEntity>,
        private mapper: UserMapper
    ){}

    getAllUsers(): Promise<UserEntity[]> {
        return this.usersRepository.find();
    }

    getUserById(id: string): Promise<UserEntity> {
        return this.usersRepository.findOne(id)
    }

    getUserByName(name: string): Promise<UserEntity> {
        return this.usersRepository.findOne({ name });
    }

    newUser(userDTO: UserDTO): Promise<UserEntity> {
        const newUser = this.mapper.dtoToEntity(userDTO);
        return this.usersRepository.save(newUser);
    }

    async updateUser(id: string, userDTO: UserDTO): Promise<UserEntity> {
        userDTO.id == id;
        const updateUser = this.mapper.dtoToEntity(userDTO);
        await this.usersRepository.update(id, updateUser);
        return this.usersRepository.findOne(id);

    }

    deleteUser(id: string): Promise<DeleteResult> {
       return this.usersRepository.delete(id);
    }

}