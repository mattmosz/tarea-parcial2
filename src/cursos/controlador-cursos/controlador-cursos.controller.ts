import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { ServicioCursosService } from '../servicio-cursos/servicio-cursos.service';
import { InterfazCursos } from '../interfaz-cursos/interfaz-cursos.interface';
import { CursoDTO } from '../cursos.dto';

@Controller('controlador-cursos')
export class ControladorCursosController {
    constructor(private cursoServicio:ServicioCursosService){}

    @Get()
    todos(){
        return this.cursoServicio.todos();
    }

    @Get(":id")
    uno(@Param('id') id:string){
        return this.cursoServicio.uno(id);
    }

    @Post()
    insertar(@Body() curso:CursoDTO){
        return this.cursoServicio.insertar(curso);
    }

    @Put(":id")
    actualizar(@Param('id') id:string, @Body() cursoActualizar:CursoDTO){
        return this.cursoServicio.actualizar(id, cursoActualizar);
    }

    @Delete(":id")
    eliminar(@Param('id') id:string){
        return this.cursoServicio.eliminar(id);
    }
}
