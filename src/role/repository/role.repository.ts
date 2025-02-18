import { PrismaService } from 'src/prisma/prisma.service';
import { CreateRoleDto } from '../dto/create-role.dto';
import { Role } from '@prisma/client';

export class RoleRepository {
  constructor(private readonly prismaService: PrismaService) {}

  async createRole(data: CreateRoleDto): Promise<Role> {
    return await this.prismaService.role.create({ data });
  }

  async findRoleByName(name: string): Promise<Role | null> {
    return await this.prismaService.role.findUnique({ where: { name } });
  }

  async updateRole(id: string, data: CreateRoleDto): Promise<Role> {
    return await this.prismaService.role.update({ where: { id }, data });
  }

  async deleteRole(id: string): Promise<Role> {
    return await this.prismaService.role.delete({ where: { id } });
  }
}
