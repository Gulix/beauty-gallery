define(['knockout',
        'tinycolor',
        'lodash',
        'viewmodels/photoVM'],
function(ko,
         TinyColor,
         _,
         PhotoVM) {

function categoryVM(name, key)
{
  var self = this;

  self.name = name;
  self.key = key;

  self.photos = ko.observableArray([]);

  /*************************/
  /* Variables Declaration */
  /*************************/


  /**********************************/
  /* Accessors & Computed Variables */
  /**********************************/


  /*************/
  /* Functions */
  /*************/
  self.loadPhotos = function() {
    var photos = PhotoVM.loadAll();
    photos = _.filter(photos, function(p) { return p.category == self.key; });

    self.photos(photos);
  }

  /*************************/
  /* Object Initialization */
  /*************************/
  self.loadPhotos();
}

return {
    loadAll: function()
      {
        var categories = [];
        categories.push(new categoryVM("Nous deux", "nous2"));
        categories.push(new categoryVM("À la mairie", "mairie"));

        return categories;
      }
  }
});
