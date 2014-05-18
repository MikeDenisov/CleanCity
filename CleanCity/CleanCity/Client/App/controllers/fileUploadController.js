angular.module('noGarbageControllers', [])
    .controller('FileUploadController', function ($scope) {

    $scope.fileFormat = "xls";
    $scope.startImport = false;
    $scope.import_data = { 'overwrite': false };
    $scope.instance;

    $scope.setFiles = function (element, instance) {
        $scope.$apply(function (scope) {
            scope.instance = instance;
            scope.files = []
            for (var i = 0; i < element.files.length; i++) {
                var arr_name = element.files[i].name.split(".");
                // if (arr_name[arr_name.length - 1] == scope.fileFormat) {
                scope.files.push(element.files[i])
                // } else {
                //     alert("File should be ." + scope.fileFormat);
                // }
            }
            scope.startImport = false
            scope.progressVisible = false
        });
    };

    $scope.uploadFile = function(instance) {
        var fd = new FormData();
        fd.append("instance", $scope.instance);

        for (var i in $scope.files) {
            fd.append("uploadedFile", $scope.files[i]);
        }

        var xhr = new XMLHttpRequest();
        xhr.upload.addEventListener("progress", uploadProgress, false);
        xhr.addEventListener("load", uploadComplete, false);
        xhr.addEventListener("error", uploadFailed, false);
        xhr.addEventListener("abort", uploadCanceled, false);
        xhr.open("POST", "/my/server/upload_file.php");
        $scope.progressVisible = true;
        xhr.send(fd);

    };

    $scope.importData = function(instance) {
        $.ajax({
            url: "/selfcare/php/" + $scope.instance + "/import.php?",
            type: "POST",
            data: $scope.import_data,
            timeout: 10000, // 10 seconds for getting result, otherwise error.
            error: function() { alert("Temporary error. Please try again..."); },
            complete: function() { $.unblockUI(); },
            beforeSend: function() { $.blockUI() },
            success: function(data) {
                $scope.$apply(function() {
                    $scope.startImport = false
                    $scope.progressVisible = false
                    $scope.files = []
                })
                alert("Data will be uploaded soon.");
            }
        });
    };

    $scope.cancelUpload = function() {
        alert("The upload has been canceled by the user.");
        $scope.startImport = false;
        $scope.progress = 0;
        $scope.files = [];
        $scope.upload_status = {};
        $scope.progressVisible = false;
    };

    function uploadProgress(evt) {
        $scope.$apply(function() {
            if (evt.lengthComputable) {
                $scope.progress = Math.round(evt.loaded * 100 / evt.total)
            } else {
                $scope.progress = 'unable to compute';
            }
        });
    }

    function uploadComplete(evt) {
        /* This event is raised when the server send back a response */
        $scope.$apply(function () {
            $scope.progress = 100;
            $scope.startImport = true;
            $scope.upload_status = JSON.parse(evt.target.responseText);
        });

        //alert(evt.target.responseText)
    }

    function uploadFailed(evt) {
        alert("There was an error attempting to upload the file.")
    }

    function uploadCanceled(evt) {
        $scope.$apply(function() {
            $scope.startImport = false;
            $scope.files = [];
            $scope.progressVisible = false;
        });
        alert("The upload has been canceled by the user or the browser dropped the connection.")
    }



    $scope.getUploadingStatusClass = function (status) {
        var calss;
        switch (status) {
            case '200':
                calss = 'label-success';
                break;
            case '400':
                calss = 'label-important';
                break;
            default:
                calss = 'label-warning';
        }
        return calss;
    };

});