import { Module } from '@nestjs/common';
import { ServicioEstudiantesService } from './servicio-estudiantes/servicio-estudiantes.service';
import { ControladorEstudiantesController } from './controlador-estudiantes/controlador-estudiantes.controller';

@Module({
  providers: [ServicioEstudiantesService],
  controllers: [ControladorEstudiantesController]
})
export class EstudiantesModule {}
