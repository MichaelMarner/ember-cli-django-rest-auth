import Base from 'ember-simple-auth/authorizers/base';
import isSecureUrl from './../utils/is-secure-url';

export default Base.extend({
  authorize(data, block) {
    let accessToken = data['token'];
    if (!isEmpty(accessToken)) {
      block('Authorization', 'Token ' + accessToken);
    }
  }
});
