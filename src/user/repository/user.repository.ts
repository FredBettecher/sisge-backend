import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateUserDto } from '../dto/create-user.dto';
import { User } from '@prisma/client';

@Injectable()
export class UserRepository {
  constructor(private prismaService: PrismaService) {}

  async createUser(data: CreateUserDto): Promise<User> {
    return this.prismaService.user.create({ data });
  }

  async findUserByEmail(email: string): Promise<User | null> {
    return this.prismaService.user.findUnique({ where: { email } });
  }

  async updateUser(id: string, data: CreateUserDto): Promise<User> {
    return this.prismaService.user.update({ where: { id }, data });
  }

  async deleteUser(id: string): Promise<User> {
    return this.prismaService.user.delete({ where: { id } });
  }
}
