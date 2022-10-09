const Constants = require('../src/utils/Constants');
const Validation = require('../src/utils/validation');

it('Caso Válido - Cria um filme', () => {
    const result = Validation.create({
        nome: "Duna",
        produtora: "Warner Bros.",
        atores: "Zendaya",
        ano: '2021'
    });
    expect(result).toEqual(undefined);
});

it('Caso Válido - Cria um filme sem o ano', () => {
    const result = Validation.create({
        nome: "Duna",
        produtora: "Warner Bros.",
        atores: "Zendaya"
    });
    expect(result).toEqual(undefined);
});

it('Caso inválido - Cria um filme sem o nome', () => {
    const result = Validation.create({
        produtora: "Warner Bros.",
        atores: "Zendaya"
    });
    expect(result.name).toEqual(Constants.ErrorValidation.name);
});

it('Caso válido - Atualiza o nome de um filme', () => {
    const result = Validation.update({
        nome: "Fast & Furious II",
        produtora: "Universal Pictures",
        atores: "Vin Diesel",
        ano: "2009"
    });
    expect(result).toEqual(undefined);
});

it('Caso válido - Deleta um filme pelo nome', () => {
    const result = Validation.deleteBy({
        nome: "Fast & Furious II"
    });
    expect(result).toEqual(undefined);
});

it('Caso válido - Lista os filmes', () => {
    const result = Validation.get({ });
    expect(result).toEqual(undefined);
});
