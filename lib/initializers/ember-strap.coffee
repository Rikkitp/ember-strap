Ember.Application.initializer
  name: "ember-strap"

  initialize: (container, application) ->
    container.register('view:modal', EmberStrap.Modal)
    container.register('component:scroll-to', EmberStrap.ScrollTo)