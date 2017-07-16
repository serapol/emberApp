import Ember from 'ember';
import { EMAIL_REGEXP } from '../constants/Regexp';
import { PASSWORD_REGEXP } from '../constants/Regexp';

const validationHandlers = {
  required: (value) => {
    if (!value) {
      return 'Field cannot be empty';
    }
  },

  email: (value) => {
    if (value && !EMAIL_REGEXP.test(value)) {
      return 'Email address should be valid!';
    }
  },

  password: (value) => {
    if (!value) return false;

    if (value.length < 8) {
      return 'Password should be at least 8 symbols length!';
    }

    if (value.length > 100) {
      return 'Password should be maximum 100 symbols length!';
    }

    if (value && !PASSWORD_REGEXP.test(value)) {
      return 'Password can contain all latin alphabetical chars, numeric and some special chars!';
    }
  }
};

const ValidationMixin = Ember.Mixin.create({
  validateForm() {
    const validations = this.get('validations');
    let errors = [];

    Object.keys(validations).forEach((modelFieldName) => {
      const fieldValue = this.get(modelFieldName);
      const validation = validations[modelFieldName];
      const fieldName = validation.fieldName;
      const rules = validation.rules;

      rules.forEach((rule) => {
        const error = validationHandlers[rule](fieldValue);

        if (error) {
          errors.push({
            fieldName: fieldName,
            message: error
          });
        }
      })
    });

    return errors;
  }
});

export default ValidationMixin;
