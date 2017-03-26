var appX = angular.module("myApp",[]);
appX.controller("myCtrl", function($scope){
   $scope.tasks = [];
   $scope.searchEnter = function(){
   if(event.which == 13 && $scope.task !== ""){
   	addTask();
   }

   }; // end searchEnter
  var addTask = function(){
      
   	$scope.tasks.push({'taskMessage': $scope.task, 'Status': false});
    $scope.task = "";
   	console.log($scope.tasks);
  };

  $scope.contentEdit  = function(){
  	//event.target.contentEditable = true; //contenteditable is a html attribute
  	event.target.contentEditable = event.target.contentEditable == "false" ? "true" :"false";
  	//if(event.which == 13 && msg!==""){
  		//contentEdit(msg);
  	//}
  }

  $scope.enterAgain = function(msg){
  	if(event.which == 13 && msg!==""){
  		$scope.contentEdit();
  		//console.log("here");
  	}
  }
}); //end controller  // ng-model here will store either true/false (line 23 of html file - as checkbox in its checked state stores true and in unchecked stores false)