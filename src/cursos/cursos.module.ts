import { Module } from '@nestjs/common';
import { ServicioCursosService } from './servicio-cursos/servicio-cursos.service';
import { ControladorCursosController } from './controlador-cursos/controlador-cursos.controller';

@Module({
  providers: [ServicioCursosService],
  controllers: [ControladorCursosController]
})
export class CursosModule {}
