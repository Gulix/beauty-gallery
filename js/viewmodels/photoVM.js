define(['knockout',
        'tinycolor',
        'lodash',
        'json/load-photos',
        'viewmodels/authorVM'],
function(ko,
         TinyColor,
         _,
         Photos,
         AuthorVM) {

function photoVM(file, category, author)
{
  var self = this;

  self.file = ko.observable(file);
  self.category = category;
  self.authorKey = author;
  self.authorVM = ko.observable(null);

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
  self.getAuthor = function() {
    var authors = AuthorVM.loadAll();
    self.authorVM(_.find(authors, function(a) { return a.authorKey == self.authorKey; }));
    //console.log("getAuthor : " + self.authorVM().infosAuthor())
  }

  /*************************/
  /* Object Initialization */
  /*************************/
  self.getAuthor();
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
