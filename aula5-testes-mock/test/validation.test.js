const Constants = require('../src/utils/Constants');
const Validation = require('../src/utils/validation');

it('Caso Válido - Cria um filme', () => {
    const result = Validation.create({
        carro: "Jetta",
        marca: "Volkswagen",
        ano: '1979'
    });
    expect(result).toEqual(undefined);
});


it('Caso inválido - Cria um carro sem o nome', () => {
    const result = Validation.create({
        marca: "Maserati",
        ano: "1966"
    });
    expect(result.carro).toEqual(Constants.ErrorValidation.carro);
});


it('Caso válido - Atualiza o ano do carro', () => {
    const result = Validation.update({
        carro: "Fusca",
        ano: "1965"
    });
    expect(result).toEqual(undefined);
});

it('Caso válido - Deleta um carro', () => {
    const result = Validation.deleteBy({
        carro: "Brasilia"
    });
    expect(result).toEqual(undefined);
});

it('Caso válido - Lista os carros', () => {
    const result = Validation.get({ });
    expect(result).toEqual(undefined);
});

it('Caso válido - Lista os filmes por produtora', () => {
    const result = Validation.get({ marca: "Volkswagen"});
    expect(result).toEqual(undefined);
});