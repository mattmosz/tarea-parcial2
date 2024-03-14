import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { ServicioEstudiantesService } from '../servicio-estudiantes/servicio-estudiantes.service';
import { InterfazEstudiantes } from '../interfaz-estudiantes/interfaz-estudiantes.interface';
import { EstudianteDTO } from '../estudiante.dto';

@Controller('api/v1/controlador-estudiantes')
export class ControladorEstudiantesController {
    constructor(private estudianteServicio:ServicioEstudiantesService){}

    @Get()
    todos(){
        return this.estudianteServicio.todos();
    }

    @Get(":id")
    uno(@Param('id') id:string){
        return this.estudianteServicio.uno(id);
    }
    @Post()
    insertar(@Body() estudiante:EstudianteDTO){
        return this.estudianteServicio.insertar(estudiante);
    }

    @Put(":id")
    actualizar(@Param('id') id:string, @Body() estudianteActualizar:EstudianteDTO){
        return this.estudianteServicio.actualizar(id, estudianteActualizar);
    }

    @Delete(":id")
    eliminar(@Param('id') id:string){
        return this.estudianteServicio.eliminar(id);
    }
}
