import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { HeroeComponent } from './heroe/heroe.component';
import { ListadoComponent } from './listado/listado.component';

@NgModule({
    // Las declaraciones van a ser los componentes. Define qué cosas contiene este módulo, es decir qué componentes.
    declarations:[
        HeroeComponent,
        ListadoComponent
    ],
    // Defino qué componentes van a ser públicos.
    exports:[
        ListadoComponent
    ],
    // Defino los módulos.
    imports:[
        CommonModule
    ]
})

export class HeroesModule{

}