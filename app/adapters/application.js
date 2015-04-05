import DS from 'ember-data';
export default DS.RESTAdapter.extend({
  namespace: 'v2',
  host: 'http://localhost:8183'
});
