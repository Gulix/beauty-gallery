define(['knockout',
        'tinycolor',
        'lodash',
        'json/load-photos'],
function(ko,
         TinyColor,
         _,
         Photos) {

function photoVM(file, category, author)
{
  var self = this;

  self.file = ko.observable(file);
  self.category = category;
  self.author = author;

  /*************************/
  /* Variables Declaration */
  /*************************/


  /**********************************/
  /* Accessors & Computed Variables */
  /**********************************/
  self.fullSrc = ko.pureComputed(function() {
    return 'img/photos/' + self.file();
  });

  /*************/
  /* Functions */
  /*************/


  /*************************/
  /* Object Initialization */
  /*************************/

}

return {
    loadAll: function()
      {
        var jsonPhotos = Photos.load();
        var photos = [];
        _.forEach(jsonPhotos, function(p) { photos.push(new photoVM(p.file, p.category, p.author)); });

        return photos;
      }
  }
});
