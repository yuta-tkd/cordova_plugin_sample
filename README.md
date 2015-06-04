# Cordova Sample Plugin Android/iOS
Work with Cordova 5.1.0

##説明
Cordova(5.1.0)での自作プラグイン(Android/iOS)の初期サンプルです。
このプラグインを編集することによって、自作プラグインを作ることを薦めます。

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