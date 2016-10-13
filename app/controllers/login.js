import Ember from 'ember';
var LoginController = Ember.Controller.extend({
  session: Ember.inject.service(),
  errorMessage: null,
  identification: null,
  password: null,

  actions: {
    authenticate() { 
      console.log("authenticating...");
      let { identification, password } = this.getProperties('identification', 'password');
      this.get('session').authenticate('authenticator:custom', {
        identification: identification,
        password: password
      }).catch((error) => {
        this.set('errorMessage', 'Error from controller');
      });
    }
  }
});

export default LoginController;
