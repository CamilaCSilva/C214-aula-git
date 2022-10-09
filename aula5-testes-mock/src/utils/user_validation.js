const create = {
    carro: {
        presence: {
            allowEmpty: false,
        },
        type: 'string',
    },
    marca: {
        presence: {
            allowEmpty: false,
        },
        type: 'string',
    },
    ano: {
        presence: {
            allowEmpty: false,
        },
        type: 'string',
    },
};

const update = {
    carro: {
        presence: {
            allowEmpty: false,
        },
        type: 'string',
    },
    ano: { type: 'string' },
};

const get = {
    marca: { type: 'string' }
};

const deleteBy = {
    carro: {
        presence: {
            allowEmpty: false,
        },
        type: 'string',
    },
};

module.exports = {
    update,
    create,
    get,
    deleteBy,
};