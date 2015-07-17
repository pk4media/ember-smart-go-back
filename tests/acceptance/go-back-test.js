import Ember from 'ember';
import { module, test } from 'qunit';
import startApp from '../../tests/helpers/start-app';

var application;

module('Acceptance | go back', {
  beforeEach: function() {
    application = startApp();
  },

  afterEach: function() {
    Ember.run(application, 'destroy');
  }
});

test('basic goBack', function(assert) {
  visit('/cupcakes');
  click('a:contains("Cookies")');
  click('#goBack');
  andThen(function() {
    assert.equal(currentRouteName(), 'cupcakes');
  });
});
