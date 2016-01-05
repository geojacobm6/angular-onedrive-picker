angular.module("onedrive-picker", []).provider("OneDriveSettings", function() {
    this.linkType = 'webViewLink', this.multiselect = false, this.theme = 'blue', this.$get = function() {
        return {
            linkType: this.linkType,
            multiSelect: this.multiSelect,
            theme: this.theme,
        }
    },
    this.configure = function(e) {
        for (key in e) this[key] = e[key]
    }

})
.directive("oneDrivePicker", ["OneDriveSettings",
            function(OneDriveSettings) {
    return {
        restrict: "A",
        scope: {
            odpickerFiles: "="
        },
        link: function(scope, element, attrs) {
            function instanciate() {
                OneDrive.open(pickerOptions);
            }
            var pickerOptions = {
                success: onedrivesuccess,
                cancel: function() {},
                linkType : OneDriveSettings.linkType,
                multiselect: OneDriveSettings.multiselect,
            };
            function onedrivesuccess(files){
                console.log(files);
                scope.$apply(function() {
                    for (var i = 0; i < files.length; i++){
                        scope.odpickerFiles.push(files[i]);
                    }
                    console.log(scope.odpickerFiles);
                });
            };
            element.bind("click", function() {
                instanciate()
            })
        }
    }
}])
