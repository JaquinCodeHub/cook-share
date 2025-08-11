import { Controller, Get } from '@nestjs/common';
import { ApiTags, ApiOperation, ApiResponse } from '@nestjs/swagger';

@Controller('users')
@ApiTags('users') // Esto agrupa el endpoint en Swagger
export class UsersController {
  @Get()
  @ApiOperation({ summary: 'Obtener todos los usuarios' })
  @ApiResponse({ status: 200, description: 'Lista de usuarios' })
  getAllUsers() {
    return [
      { id: 1, name: 'Juan' },
      { id: 2, name: 'Kino' },
    ];
  }
}
