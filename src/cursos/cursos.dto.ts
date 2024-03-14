import { IsNotEmpty, IsNumber, IsString } from "class-validator";

export class CursoDTO {
    @IsNotEmpty({message: 'El nombre es requerido'})
    @IsString({message: 'El nombre debe ser un string'})
    nombre: String;
    @IsNotEmpty({message: 'Los creditos son requeridos'})
    @IsNumber()
    creditos: Number;
    @IsNotEmpty({message: 'El profesor es requerido'})
    @IsString({message: 'El profesor debe ser un string'})
    profesor: String;
    @IsNotEmpty({message: 'El horario es requerido'})
    @IsString({message: 'El horario debe ser un string'})
    horario: String;
}