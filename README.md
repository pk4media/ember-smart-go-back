# ember-smart-go-back
Go back to the application root if history wants to redirect out of the Ember app.

## Installation
`npm install --save-dev ember-smart-go-back`

## Usage

Include the `ApplicaitonRouteMixin` in your application route.

```
import Ember from 'ember';
import GoBackMixin from 'ember-smart-go-back/mixins/application-route';

export default Ember.Route.extend(GoBackMixin, {

});
```

Then whenever you want the smart go back behavior simply send the action ```smartGoBack```.

```
  <button {{action 'smartGoBack'}}>Go Back</button>
```
