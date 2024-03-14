import { Injectable } from '@nestjs/common';
import { InterfazCursos } from '../interfaz-cursos/interfaz-cursos.interface';
import {v4 as uuidv4} from 'uuid';
import { CursoDTO } from '../cursos.dto';

@Injectable()
export class ServicioCursosService {
    cursos: InterfazCursos[]=[];

    todos(){
        return this.cursos;
    }

    uno(id:string){
        return this.cursos.find((curso)=>curso.id===id);
    }

    insertar(curso:CursoDTO){
        const cur = {
            id: uuidv4(),
            ...curso
        };
        this.cursos.push(cur);
        return this.cursos;
    }

    actualizar(id:string, cursoActualizar:CursoDTO){
        const nuevocurso = {id, ...cursoActualizar};
        this.cursos = this.cursos.map((curso)=>(curso.id===id)?nuevocurso:curso);
        return nuevocurso;
    }

    eliminar(id:string){
        this.cursos = this.cursos.filter((curso)=>curso.id!==id);
        return 'Curso eliminado exitosamente';
    }
}
