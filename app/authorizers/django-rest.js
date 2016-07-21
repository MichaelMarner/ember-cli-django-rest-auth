import Base from 'ember-simple-auth/authorizers/base';
import isSecureUrl from './../utils/is-secure-url';
import Ember from 'ember'

export default Base.extend({
  authorize(data, block) {
    let accessToken = data['token'];
    if (!Ember.isEmpty(accessToken)) {
      block('Authorization', 'Token ' + accessToken);
    }
  }
});
