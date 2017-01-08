define(['knockout',
        'tinycolor',
        'lodash',
        'viewmodels/categoryVM'],
function(ko,
         TinyColor,
         _,
         CategoryVM) {

function galerieVM()
{
  var self = this;

  /*************************/
  /* Variables Declaration */
  /*************************/
  self.isHome = ko.observable(true);
  self.isChooseCategory = ko.observable(false);
  self.isDisplayCategory = ko.observable(false);

  self.displayedCategory = ko.observable(null);
  self.categories = ko.observableArray([]);
  /**********************************/
  /* Accessors & Computed Variables */
  /**********************************/


  /*************/
  /* Functions */
  /*************/
  self.enterGallery = function() {
    self.isHome(false);
    self.isChooseCategory(true);
    self.isDisplayCategory(false);
    self.loadCategories();
  }
  self.backHome = function() {
    self.isHome(true);
    self.isChooseCategory(false);
    self.isDisplayCategory(false);
  }
  self.chooseCategory = function(category) {
    self.displayedCategory(category);

    self.isHome(false);
    self.isChooseCategory(false);
    self.isDisplayCategory(true);
  }

  self.loadCategories = function() {
    self.categories(CategoryVM.loadAll());
  }

  /*************************/
  /* Object Initialization */
  /*************************/
  self.loadCategories();
}

return {
    newVM: function()
      { return new galerieVM(); }
  }
});
