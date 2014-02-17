
$(function(){
//alert($("#empId").val());

/**
* Take picture with camera
*/
$("#takePicture").click(function(){
        navigator.camera.getPicture(
        function(uri) {
                var img = document.getElementById('newSignature');
                img.style.visibility = "visible";
                img.style.display = "block";
                img.src = uri;
                //alert(img.src);
                var canvas = document.getElementById("newSignature");
                ctx = canvas.getContext("2d");
                var dataURL = canvas.toDataURL("image/jpeg");
                var background = new Image();
                background.src = img.src;
                var widthheight = window.innerWidth/2;
                background.onload = function(){
                        ctx.drawImage(background,0,0,widthheight,widthheight);   
                }
                var can_cam_stat = "Success";
                updated(can_cam_stat);
                uploadPicture();
        },
        function(e) {
                console.log("Error getting picture: " + e);
                var can_cam_stat = "Error getting picture.";
                updated(can_cam_stat);
        },
        {quality: 50, destinationType: navigator.camera.DestinationType.FILE_URI});
});

function uploadPicture() {

        // Get URI of picture to upload
        var img = document.getElementById('newSignature');
        var imageURI = img.src;
        if (!imageURI || (img.style.display == "none")) {
                var can_cam_stat = "Take picture or select picture from library first.";
                updated(can_cam_stat);
                return;
        }
        var empid = $("#empId").val();
        //alert(empid);
        // Verify server has been entered
        server = "http://greenocean.in/cpclplus/upload.php";
        if (server) {
                // Specify transfer options
                //  var imgname = "injuries.jpg";
                //   var empid = document.getElementById('empId');
                var options = new FileUploadOptions();
                options.fileKey = "file";
                options.fileName = empid;
                options.mimeType="image/jpeg";
                options.chunkedMode = false;
                // Transfer picture to server
                var ft = new FileTransfer();
                ft.upload(imageURI, server, function(r) {
                        var can_cam_stat = "Upload successful: "+r.bytesSent+" bytes uploaded.";      
                        updated(can_cam_stat);      	
                }, function(error) {
                        var can_cam_stat = "Upload failed: Code = "+error.code;  
                        updated(can_cam_stat);          	
                }, options);
        }

}


$("#camcapimg").click(function(){

        navigator.camera.getPicture(
        function(uri) {
                var img = document.getElementById('proimg');
                img.style.visibility = "visible";
                img.style.display = "block";
                img.src = uri;
                img.width= "100";
                img.height ="110";
                var selected = "Success";
                updated(selected);
                upload_proimg();
                },
        function(e) {
                console.log("Error getting picture: " + e);
                var selected = "Error getting picture.";
                updated(selected);
        },
        { quality: 50, destinationType: navigator.camera.DestinationType.FILE_URI});
        
});


function upload_proimg() {

        // Get URI of picture to upload
        var img = document.getElementById('proimg');
        var imageURI = img.src;
        if (!imageURI || (img.style.display == "none")) {
                var selected = "Take picture or select picture from library first.";
                updated(selected);
        return;
        }
        var empid = $("#empId").val();
        //alert(empid);
        // Verify server has been entered
        server = "http://greenocean.in/cpclplus/upload_primg.php";
        if (server) {

                // Specify transfer options
                //  var imgname = "injuries.jpg";
                //   var empid = document.getElementById('empId');
                var options = new FileUploadOptions();
                options.fileKey = "file";
                options.fileName = empid;
                options.mimeType="image/jpeg";
                options.chunkedMode = false;

                // Transfer picture to server
                var ft = new FileTransfer();
                ft.upload(imageURI, server, function(r) {
                        var selected = "Upload successful: "+r.bytesSent+" bytes uploaded.";   
                        updated(selected);         	
                }, function(error) {
                        var selected = "Upload failed: Code = "+error.code; 
                        updated(selected);           	
                }, options);
        }

}



});

var deviceReady = false;

function updated(msg){
        $("#toast").effect("highlight", {}, 3000);
        $("#toast").text(msg);
        $( "#toast" ).slideUp( 300 );
}
   
 

    /**
     * Select picture from library
     */
function selectPicture() {
        navigator.camera.getPicture(
        function(uri) {
                var img = document.getElementById('camera_image');
                img.style.visibility = "visible";
                img.style.display = "block";
                img.src = uri;
                //alert(img.src)
                var canvas = document.getElementById("newSignature");
                ctx = canvas.getContext("2d");
                var dataURL = canvas.toDataURL("image/jpeg");
                var background = new Image();
                background.src = img.src;
                var widthheight = window.innerWidth/2;
                background.onload = function(){
                    ctx.drawImage(background,0,0,widthheight,widthheight);   
                }
                var can_cam_stat = "Success";
                updated(can_cam_stat);

                
        },
        function(e) {
                console.log("Error getting picture: " + e);
                var can_cam_stat = "Error getting picture.";
                updated(can_cam_stat);
        },
        { quality: 50, destinationType: navigator.camera.DestinationType.FILE_URI, sourceType: navigator.camera.PictureSourceType.PHOTOLIBRARY});
};
    
    /**
     * Upload current picture
     */


    /**
     * View pictures uploaded to the server
     */
    function viewUploadedPictures() {
    	
        // Get server URL
        server = "http://greenocean.in/cpclplus/upload.php";
        if (server) {

                // Get HTML that lists all pictures on server using XHR	
                var xmlhttp = new XMLHttpRequest();

                // Callback function when XMLHttpRequest is ready
                xmlhttp.onreadystatechange=function(){
                        if(xmlhttp.readyState === 4){

                                // HTML is returned, which has pictures to display
                                if (xmlhttp.status === 200) {
                                document.getElementById('server_images').innerHTML = xmlhttp.responseText;
                                }

                                // If error
                                else {
                                document.getElementById('server_images').innerHTML = "Error retrieving pictures from server.";
                                }
                        }
                };
                xmlhttp.open("GET", server , true);
                xmlhttp.send();       	
        }	
    }
    
    /**
     * Function called when page has finished loading.
     */
function init() {
        document.addEventListener("deviceready", function() {deviceReady = true;}, false);
                window.setTimeout(function() {
                if (!deviceReady) {
                alert("Error: PhoneGap did not initialize.");
                }
        },2000);
}
