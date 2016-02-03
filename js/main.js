/**
 * AngularJS Tutorial 1
 * @author Nick Kaye <nick.c.kaye@gmail.com>
 */

/**
 * Main AngularJS Web Application
 */
var app = angular.module('tutorialWebApp', [
  'ngRoute'
]);

/**
 * Configure the Routes
 */
app.config(['$routeProvider', function ($routeProvider) {
  $routeProvider
    // Home
    .when("/", {templateUrl: "partials/home.html", controller: "PageCtrl"})
    // Pages
    .when("/about", {templateUrl: "partials/about.html", controller: "PageCtrl"})
    .when("/faq", {templateUrl: "partials/faq.html", controller: "PageCtrl"})
    .when("/pricing", {templateUrl: "partials/pricing.html", controller: "PageCtrl"})
    .when("/services", {templateUrl: "partials/services.html", controller: "PageCtrl"})
    .when("/contact", {templateUrl: "partials/contact.html", controller: "PageCtrl"})
    // Blog
    .when("/blog", {templateUrl: "partials/blog.html", controller: "BlogCtrl"})
    .when("/blog/post", {templateUrl: "partials/blog_item.html", controller: "BlogCtrl"})
    // else 404
    .otherwise("/404", {templateUrl: "partials/404.html", controller: "PageCtrl"});
}]);

/**
 * Controls the Blog
 */
app.controller('BlogCtrl', function ( $scope, $location, $http) {
  console.log("Blog Controller reporting for duty.");

  $scope.LitersPerGallon = 3.78541;
  $scope.CCPerTeaspoon = 4.92892;
  $scope.CCPerCup = 236.588;
  $scope.gallons = 100;


  var ElementsJson = `{
  "Boron": { "Name":"Boron", "Symbol":"B", "TargetQuantity":0.25, "ActualQuantity":0, "WarnBelow":0.15, "WarnAbove":0.5},
  "Calcium": { "Name":"Calcium", "Symbol":"Ca", "TargetQuantity":200, "ActualQuantity":0, "WarnBelow":100, "WarnAbove":300},
  "Copper": { "Name":"Copper", "Symbol":"Cu", "TargetQuantity":0.05, "ActualQuantity":0, "WarnBelow":0.03, "WarnAbove":0.1},
  "Iron": { "Name":"Iron", "Symbol":"Fe", "TargetQuantity":5, "ActualQuantity":0, "WarnBelow":3, "WarnAbove":7},
  "Potassium": { "Name":"Potassium", "Symbol":"K", "TargetQuantity":250, "ActualQuantity":0, "WarnBelow":150, "WarnAbove":450},
  "Magnesium": { "Name":"Magnesium", "Symbol":"Mg", "TargetQuantity":50, "ActualQuantity":0, "WarnBelow":40, "WarnAbove":100},
  "Manganese": { "Name":"Manganese", "Symbol":"Mn", "TargetQuantity":0.8, "ActualQuantity":0, "WarnBelow":0.4, "WarnAbove":1.5},
  "Molybdenum": { "Name":"Molybdenum", "Symbol":"Mo", "TargetQuantity":0.05, "ActualQuantity":0, "WarnBelow":0.03, "WarnAbove":0.1},
  "Nitrogen": { "Name":"Nitrogen", "Symbol":"N", "TargetQuantity":190, "ActualQuantity":0, "WarnBelow":100, "WarnAbove":250},
  "Phosphorus": { "Name":"Phosphorus", "Symbol":"P", "TargetQuantity":50, "ActualQuantity":0, "WarnBelow":40, "WarnAbove":100},
  "Zinc": { "Name":"Zinc", "Symbol":"Zn", "TargetQuantity":0.3, "ActualQuantity":0, "WarnBelow":0.2, "WarnAbove":1}
}`;

    $scope.elements = angular.fromJson(ElementsJson);


  var json = `
  {
  "Calcium Nitrate": { "Name":"Calcium Nitrate", "B":0.000, "Ca":0.190, "Cu":0.000, "Fe":0.000, "K":0.000, "Mg":0.000, "Mn":0.000, "Mo":0.000, "N":0.155, "P":0.000, "S":0.000, "Zn":0.000, "CalculatedAmount":0.000, "DensityGramsPerCC":2.504},
  "Potassium Nitrate": { "Name":"Potassium Nitrate", "B":0.000, "Ca":0.000, "Cu":0.000, "Fe":0.000, "K":0.384, "Mg":0.000, "Mn":0.000, "Mo":0.000, "N":0.135, "P":0.000, "S":0.000, "Zn":0.000, "CalculatedAmount":0.000, "DensityGramsPerCC":2.103},
  "Potassium Monobasic Phosphate": { "Name":"Potassium Monobasic Phosphate", "B":0.000, "Ca":0.000, "Cu":0.000, "Fe":0.000, "K":0.287, "Mg":0.000, "Mn":0.000, "Mo":0.000, "N":0.000, "P":0.320, "S":0.000, "Zn":0.000, "CalculatedAmount":0.000, "DensityGramsPerCC":2.338},
  "Potassium Sulfate": { "Name":"Potassium Sulfate", "B":0.000, "Ca":0.000, "Cu":0.000, "Fe":0.000, "K":0.520, "Mg":0.000, "Mn":0.000, "Mo":0.000, "N":0.000, "P":0.000, "S":0.180, "Zn":0.000, "CalculatedAmount":0.000, "DensityGramsPerCC":2.660},
  "Magnesium Sulfate": { "Name":"Magnesium Sulfate", "B":0.000, "Ca":0.000, "Cu":0.000, "Fe":0.000, "K":0.000, "Mg":0.098, "Mn":0.000, "Mo":0.000, "N":0.000, "P":0.000, "S":0.120, "Zn":0.000, "CalculatedAmount":0.000, "DensityGramsPerCC":2.660},
  "Iron": { "Name":"Iron", "B":0.000, "Ca":0.000, "Cu":0.000, "Fe":0.100, "K":0.000, "Mg":0.000, "Mn":0.000, "Mo":0.000, "N":0.000, "P":0.000, "S":0.000, "Zn":0.000, "CalculatedAmount":0.000, "DensityGramsPerCC":0.900},
  "Manganese Sulfate": { "Name":"Manganese Sulfate", "B":0.000, "Ca":0.000, "Cu":0.000, "Fe":0.000, "K":0.000, "Mg":0.000, "Mn":0.320, "Mo":0.000, "N":0.000, "P":0.000, "S":0.000, "Zn":0.000, "CalculatedAmount":0.000, "DensityGramsPerCC":3.250},
  "Copper Sulfate": { "Name":"Copper Sulfate", "B":0.000, "Ca":0.000, "Cu":0.251, "Fe":0.000, "K":0.000, "Mg":0.000, "Mn":0.000, "Mo":0.000, "N":0.000, "P":0.000, "S":0.000, "Zn":0.000, "CalculatedAmount":0.000, "DensityGramsPerCC":3.600},
  "Zinc Sulfate": { "Name":"Zinc Sulfate", "B":0.000, "Ca":0.000, "Cu":0.000, "Fe":0.000, "K":0.000, "Mg":0.000, "Mn":0.000, "Mo":0.000, "N":0.000, "P":0.000, "S":0.175, "Zn":0.355, "CalculatedAmount":0.000, "DensityGramsPerCC":3.540},
  "Boric Acid": { "Name":"Boric Acid", "B":0.166, "Ca":0.000, "Cu":0.000, "Fe":0.000, "K":0.000, "Mg":0.000, "Mn":0.000, "Mo":0.000, "N":0.000, "P":0.000, "S":0.000, "Zn":0.000, "CalculatedAmount":0.000, "DensityGramsPerCC":1.440},
  "Sodium Molybdate": { "Name":"Sodium Molybdate", "B":0.000, "Ca":0.000, "Cu":0.000, "Fe":0.000, "K":0.000, "Mg":0.000, "Mn":0.000, "Mo":0.443, "N":0.000, "P":0.000, "S":0.000, "Zn":0.000, "CalculatedAmount":0.000, "DensityGramsPerCC":3.780}
}
 ` ;

$scope.substances = angular.fromJson(json);
$scope.showElements = true;

$scope.changeshowElements = function(setting)
{
	$scope.showElements = setting;
//	$scope.$apply();
	console.log("set showElements to " + setting);
}
$scope.calcWeights = function() {

angular.forEach($scope.elements, function(element, elementName) {
		element.ActualQuantity = 0.0;
});
		calcOne("Calcium Nitrate","Calcium");
		calcOne("Potassium Nitrate","Nitrogen");
		calcOne("Potassium Monobasic Phosphate","Phosphorus");
		calcOne("Potassium Sulfate","Potassium");
		calcOne("Magnesium Sulfate","Magnesium");
		calcOne("Boric Acid","Boron");
		calcOne("Copper Sulfate","Copper");
		calcOne("Sodium Molybdate","Molybdenum");
		calcOne("Iron","Iron");
		calcOne("Manganese Sulfate","Manganese");
		calcOne("Zinc Sulfate","Zinc");
	
	$scope.changeshowElements(false);
}

var calcOne = function(substanceName, elementName)
{
	$scope.substances[substanceName].CalculatedAmount = $scope.gallons * $scope.LitersPerGallon * calcgramsPerLiter($scope.elements[elementName].Symbol,substanceName,$scope.elements[elementName].TargetQuantity-$scope.elements[elementName].ActualQuantity);
	updateActuals();


}


var updateActuals = function()
{

	angular.forEach($scope.elements, function(element, elementName) {
			element.ActualQuantity = 0.0;
  			angular.forEach($scope.substances, function(substance, substanceName) {
  					if(substance[element.Symbol]!=0)
  					{
  						// e.g. 511 grams = 
  						element.ActualQuantity += (substance.CalculatedAmount*substance[element.Symbol]*1000.0) / ($scope.gallons * $scope.LitersPerGallon);

  					}
  				});			

		});

	$scope.elements["Calcium"].TargetQuantity
	

}

var  calcgramsPerLiter = function(elementName,substanceName,targetMgL)
{
	//console.log("Calcgramsperliter parms = " + elementName +":"+substanceName+ ":"+targetMgL);


	var contribution = $scope.substances[substanceName][elementName];
	if(contribution == 0)
	{
		return 0;
	}

	var gramsPerLiter = (targetMgL / contribution) / 1000.0;
	console.log(substanceName + " contributes " + contribution + " to " + elementName + " targeting " + targetMgL + "mg/L returning value=" + gramsPerLiter);
	return gramsPerLiter

} 


});

/**
 * Controls all other Pages
 */
app.controller('PageCtrl', function (/* $scope, $location, $http */) {
  console.log("Page Controller reporting for duty.");

  // Activates the Carousel
  $('.carousel').carousel({
    interval: 5000
  });

  // Activates Tooltips for Social Links
  $('.tooltip-social').tooltip({
    selector: "a[data-toggle=tooltip]"
  })
});