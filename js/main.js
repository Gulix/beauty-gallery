require.config({
    paths: {
        'jQuery': 'vendor/jquery-3.0.0.min',
        'knockout': 'vendor/knockout-3.4.0',
        'lodash': 'vendor/lodash',
        'tinycolor': 'vendor/tinycolor'
    },
    shim: {
        'jQuery': {
            exports: '$'
        }
    }
});

require(['knockout',
         'components/registration',
         'viewmodels/galerieVM',
         'domReady!'
       ], function(ko, components, GalerieVM){

  components.register();

  var viewModel = GalerieVM.newVM();;

  ko.applyBindings(viewModel);

});
