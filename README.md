angular-dropbox-box-picker
==========================

A simple and cool angular directive which interacts with box and dropbox file pickers

Demo
==========================

http://geojacobm6.github.io/angular-onedrive-picker/

Installation
==========================

Download https://github.com/geojacobm6/angular-dropbox-box-picker/archive/master.zip

Usage
==========================


 1. Include script in html
 
   ```html
  <script src="dropbox-picker.min.js"></script>
  ```
    For OneDrive:
    ```html
  <script type="text/javascript" src="https://js.live.net/v5.0/OneDrive.js" id="onedrive-js" client-id="APP_ID"></script>
  ```
    Don't forgot ot replace APP_ID with appkey which get from onedrive app console    https://account.live.com/developers/applications
    

 2. Include the dropbox-picker as a dependency for your app

      angular.module('myApp', ['onedrive-picker'])

 3. Configuration
 
  for more details about options got https://dev.onedrive.com/sdk/javascript-picker-saver.htm

       angular.module('OnedriveControllers', ['onedrive-picker'])

        .config(['OneDriveSettingsProvider', function(OneDriveSettingsProvider) {

          // Configure the options
            OneDriveSettingsProvider.configure({
                linkType: 'webViewLink',//or downloadLink
                multiSelect: true,//or false
              });
        }])
        
 4.  Create scope to handle choosed files
 
      .controller('OneDriveCtrl', ['$scope', 'OneDriveSettings', function($scope, OneDriveSettings) {
          $scope.odfiles = [];
          
      }]);   

 5. Add the directive to your HTML element
 
      
          <a href="javascript:;" one-drive-picker odpicker-files="odfiles">OneDrive Picker</a

          
 6. Done.

 
