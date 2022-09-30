const Constants = require('../src/utils/Constants');
const Validation = require('../src/utils/validation');

it('Caso válido', () => {
    const result = Validation.create({
        nome: "Duna",
        produtora: "Warner Bros.",
        atores: "Zendaya",
        ano: '2021'
    });
    expect(result).toEqual(undefined);
});

it('Caso inválido - sem o parâmetro nome', () => {
    const result = Validation.create({
        produtora: "Warner Bros.",
        atores: "Zendaya"
    });
    expect(result.name).toEqual(Constants.ErrorValidation.name);
});
