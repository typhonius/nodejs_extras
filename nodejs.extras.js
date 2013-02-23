(function ($) {

Drupal.Nodejs.callbacks.nodejsExtras = {
  callback: function (message) {
    Drupal.nodejs_ajax.runCommands(message);
  }
};
}(jQuery));
