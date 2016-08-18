import DS from 'ember-data';

export default DS.Model.extend({
  userName: DS.attr(),
  comment: DS.attr(),
  post: DS.belongsTo('post', { async: true }),
  date: DS.attr()
});
