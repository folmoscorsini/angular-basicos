import { Component } from "@angular/core";

@Component({
    selector:'<app-heroe></app-heroe>',
    templateUrl:'heroe.component.html'
})

export class HeroeComponent{
    public nombre: string = 'Ironman';
    public edad: number = 32;

    obtenerNombre = ():string =>{
        //return this.nombre;
        // Se utiliza backtips para la construcción de un template
        return `${ this.nombre } - ${ this.edad }`;
    }

    //Si antepongo "get", simulo una propiedad.
    get nombreCapitalizado(): string{
        return this.nombre.toUpperCase();
    }

    cambiarNombre = (): void =>{
        this.nombre = 'Spiderman';
    }

    cambiarEdad = (): void =>{
        this.edad = 42;
    }
}