colorBlocks.controller('SettingsController', ['$scope', "DataFactory", function($scope, DataFactory) {
  console.log("settings controller running");

  //inputcolors

  // DataFactory.x = input
  var self = this;
  self.colors = DataFactory;
  console.log(DataFactory);
  self.addColor = function() {
    self.colors.push(self.newColor);
    self.newColor = "";
    DataFactory = self.colors;
    console.log(self.colors);
  }

}]);
