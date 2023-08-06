const { calcularPacote } = require("../../dominio/calculadora/Projeto/pacote")

describe("Calcular pacote correto para cada projeto", ()=>{
    test("Retorna pacote basico caso o numero total dehoras seja ate 50h",()=>{
        //setup
        const totalDeHorasPorProjeto = 49;

        //acao
        const result = calcularPacote(totalDeHorasPorProjeto)

        //verificacao
        expect(result).toEqual("pacote_basico")

    });
    test("Retorna pacote basico caso o numero total dehoras seja exatamente 50h",()=>{
        //setup
        const totalDeHorasPorProjeto = 50;

        //acao
        const result = calcularPacote(totalDeHorasPorProjeto)

        //verificacao
        expect(result).toEqual("pacote_basico")

    });
    test ("Retornar o pacote intermediário caso o número de horas seja entre 51 e 100", () =>{
        //setup
        const totalDaHorasPorProjeto = 85.5;

        //verificacao
        const result = calcularPacote(totalDaHorasPorProjeto);

        //vericacao
        expect(result).toEqual('pacote_intermediario')
    })
    test("Retorne o pacote intermediário caso o número de horas seja exatamente 100", () =>{
        //setup
        const totalDeHorasPorProjeto = 100;

        //acao
        const result = calcularPacote(totalDeHorasPorProjeto);

        //verificacao
        expect(result).toEqual("pacote_intermediario")
    })
    test(" Retorna o pacote premium se o projeto tiver exatamente 200h", ()=> {

        //setup
        const totalDeHorasPorProjeto = 200;

        //acao

        const result = calcularPacote(totalDeHorasPorProjeto);

        //verificacao

        expect(result).toEqual("pacote_premium")
    })
    test(" Espera que o número total de horas a partir de 101h NÃO seja o pacote basico", ()=> {
        //setup
        const totalDeHorasPorProjeto = 100.59;

        //acao
        const result = calcularPacote(totalDeHorasPorProjeto);

        //verificacao
        expect(result).not.toBe("pacote_basico");

    })
    test('Retorna com erro se o projeto com pacote premium tiver mais que 200h', () => {

        //setup
        const totalDeHorasPorProjeto = 2750;
        //acao
        const result = () => calcularPacote(totalDeHorasPorProjeto);
        //verificacao
        expect(result).toThrowError();
      });

    })

// describe("Calcular pacote correto para cada projeto", ()=>{   
// })