import { IsEmptyPipe } from './is-empty.pipe';

fdescribe('IsEmptyPipe', () => {
  it('Creada la instancia', () => {
    const pipe = new IsEmptyPipe();
    expect(pipe).toBeTruthy();
  });
  it('Retorna FALSE si el objeto NO es vacio', ()=>{
    const obj = {value:'nombre'};
    const pipe = new IsEmptyPipe().transform(obj)
    expect(pipe).toBeFalse();
  });
  it("Retorna TRUE si el objeto SI es vacio", ()=>{
    const obj = {};
    const pipe = new IsEmptyPipe().transform(obj)
    expect(pipe).toBeTrue();
  }); 
  it('Retorna TRUE si el objeto NO es vacio informando el argument isNotEmpty', ()=>{
    const obj = {value:'nombre'};
    const pipe = new IsEmptyPipe().transform(obj,true);
    expect(pipe).toBeTrue();
  })
});
