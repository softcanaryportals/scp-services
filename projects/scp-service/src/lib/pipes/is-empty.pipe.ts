import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'isEmpty',
  standalone: true
})
  
export class IsEmptyPipe implements PipeTransform {
  /**
   * Retorna si un objeto es vacio
   * @param value Valor a evaluar
   * @param isNotEmpty Cambia el sentido de la evaluación
   * @returns Si isNotEmpty es FALSE retorna TRUE al ser objeto vacio.
   */
  transform(value: any, isNotEmpty?:boolean): boolean {
    const isEmpty = value && Object.keys(value).length === 0;
    return !isNotEmpty ?  isEmpty : !isEmpty;
  }
}
