import Ember from 'ember';
import ValidationMixin from '../mixin/validation';

export default Ember.Controller.extend(ValidationMixin, {
  validations: {
    'model.name': {
      fieldName: 'Name',
      rules: [
        'required'
      ]
    },
    'model.email': {
      fieldName: 'Email',
      rules: [
        'required',
        'email'
      ]
    },
    'model.password1': {
      fieldName: 'Password1',
      rules: [
        'required',
        'password'
      ]
    },
    'model.password2': {
      fieldName: 'Password2',
      rules: [
        'required',
        'password'
      ]
    },
  },

  clearErrors() {
    this.set('errors', []);
  },

  submitForm() {
    let errors = this.validateForm();
    const password1 = this.get('model.password1');
    const password2 = this.get('model.password2');

    if (password1 !== password2) {
      errors.push({
        fieldName: 'Passwords',
        message: 'Passwords should be match'
      });
    }

    if (errors.length) {
      this.set('errors', errors);
      return false;
    }

    this.get('model').save();
  },

  actions: {
    submitForm() {
      this.submitForm();
    },

    closeErrors() {
      this.clearErrors();
    }
  }
});
