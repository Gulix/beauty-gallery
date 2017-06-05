define(['knockout',
        'lodash'],
function(ko,
         _) {

function authorVM(authorKey, authorLabel)
{
  var self = this;

  self.authorKey = authorKey;
  self.authorLabel = authorLabel;

  /*************************/
  /* Variables Declaration */
  /*************************/


  /**********************************/
  /* Accessors & Computed Variables */
  /**********************************/
  self.infosAuthor = ko.pureComputed(function() {
    return "photo par " + authorLabel;
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
        var eric = new authorVM("Eric", "Eric Paul Macaire, notre photographe");
        var audrey = new authorVM("audrey", "Audrey, la soeur du marié");
        var pavie = new authorVM("pavie", "les Pavie, nos voisins");
        var nous = new authorVM("nous", "les Mariés");

        return [ eric, audrey, pavie, nous ];
      }
  }
});
