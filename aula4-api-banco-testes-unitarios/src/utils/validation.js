const validate = require('validate.js');
const Constants = require('./Constants');
const Constraints = require('./user_validation');

const Validation = {
    create(data) {
        const validation = validate.validate(data, Constraints.create);
        if (validation) {
            const response = Constants.ErrorValidation;
            response.message = validation;
            return response;
        }
        return validation;
    },

    update(data) {
        const validation = validate.validate(data, Constraints.update);
        if (validation) {
            const response = Constants.ErrorValidation;
            response.message = validation;
            return response;
        }
        return validation;
    },

    deleteBy(data) {
        const validation = validate.validate(data, Constraints.deleteBy);
        if (validation) {
            const response = Constants.ErrorValidation;
            response.message = validation;
            return response;
        }
        return validation;
    },

    get(data) {
        const validation = validate.validate(data, Constraints.get);
        if (validation) {
            const response = Constants.ErrorValidation;
            response.message = validation;
            return response;
        }
        return validation;
    }
};
module.exports = Validation;
