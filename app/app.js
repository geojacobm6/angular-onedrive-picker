'use strict';

angular.module('OnedriveControllers', ['onedrive-picker'])

    .config(['OneDriveSettingsProvider', function(OneDriveSettingsProvider) {

      // Configure the options
        OneDriveSettingsProvider.configure({
            linkType: 'webViewLink',//downloadLink
            multiSelect: true,//multiselect
            theme: 'blue',//button color, whilte
          });
    }])

    .controller('OneDriveCtrl', ['$scope', 'OneDriveSettings', function($scope, OneDriveSettings) {
        $scope.odfiles = [];
        $scope.remove = function(idx){
            $scope.odfiles.splice(idx,1);
            }
    }]);