import { Injectable } from '@nestjs/common';
import { InterfazEstudiantes } from '../interfaz-estudiantes/interfaz-estudiantes.interface';
import {v4 as uuidv4} from 'uuid';
import { EstudianteDTO } from '../estudiante.dto';

@Injectable()
export class ServicioEstudiantesService {
    estudiantes: InterfazEstudiantes[]=[];

    todos(){
        return this.estudiantes;
    }

    uno(id:string){
        return this.estudiantes.find((estudiante)=>estudiante.id===id);
    }

    insertar(estudiante:EstudianteDTO){
        const est = {
            id: uuidv4(),
            ...estudiante
        };
        this.estudiantes.push(est);
        return this.estudiantes;
    }

    actualizar(id:string, estudianteActualizar:EstudianteDTO){
        const nuevoestudiante = {id, ...estudianteActualizar};
        this.estudiantes = this.estudiantes.map((estudiante)=>(estudiante.id===id)?nuevoestudiante:estudiante);
        return nuevoestudiante;
    }

    eliminar(id:string){
        this.estudiantes = this.estudiantes.filter((estudiante)=>estudiante.id!==id);
        return 'Estudiante eliminado exitosamente';
    }
}
