import DS from 'ember-data';
export default DS.RESTSerializer.extend({
  primaryKey: 'Id',

  keyForAttribute(key){
    console.log(key);
    return key.classify();
    // this._super(key);
  },

  extractFind(store, type, payload, id, requestType) {
    payload = {[store.modelFor(type).typeKey.classify()]: payload};
    return this._super(store, type, payload, id, requestType);
  }
});