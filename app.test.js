const {gerarFrutas} = require('./app');


let numero = 300;
let pluralDaFruta = 'Tomates';
test(`Tem que devolver uma quantidade igual a ${numero} de uma fruta com plural ${pluralDaFruta}`, ()=>{
    
    const frutas = gerarFrutas(numero, pluralDaFruta);
    expect(frutas).toBe(`${numero} ${pluralDaFruta}`);

});