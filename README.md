# Hello World PhoneGap plugin
Work with PhoneGap 5.1.0

## How To Use

        document.addEventListener("deviceready", onDeviceReady, false);

        function onDeviceReady() {        
            sample.say( 
                function(result) {
                    alert(result);
                },
                function() {
                    alert("error");
                }
            );
        }