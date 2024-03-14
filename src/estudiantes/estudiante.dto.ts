import { IsNotEmpty, IsNumber, IsString } from "class-validator";

export class EstudianteDTO {
    @IsNotEmpty({message: 'El nombre es requerido'})
    @IsString({message: 'El nombre debe ser un string'})
    nombre: String;
    @IsNotEmpty({message: 'La edad es requerida'})
    @IsNumber()
    edad: Number;
    @IsNotEmpty({message: 'La carrera es requerida'})
    @IsString({message: 'La carrera debe ser un string'})
    carrera: String;
    @IsNotEmpty({message: 'El promedio es requerido'})
    @IsNumber()
    promedio: Number;
}