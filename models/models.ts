export interface UserI {
    nombre: string;
    rut: number;
    correo: string;
    uid: string;
    password: string;
    perfil: 'Alumno'

}


export interface asistI{
    uid: string;
    user: UserI;
    fecha:any;
    asistencia:boolean;
}