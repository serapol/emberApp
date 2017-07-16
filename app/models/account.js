import DS from 'ember-data';

DS.JSONAPIAdapter.extend({
  namespace: 'api/account'
});

export default DS.Model.extend({
  name: DS.attr('string'),
  email: DS.attr('string'),
  password1: DS.attr('string'),
  password2: DS.attr('string')
});
