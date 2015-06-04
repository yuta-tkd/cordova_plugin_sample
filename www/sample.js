var Sample = function() {};

Sample.prototype.say = function(success, fail) {
    cordova.exec(success, fail, "SamplePlugin","say", []);
};

sample = new Sample();
