#import <Cordova/CDVPlugin.h>

@interface SamplePlugin : CDVPlugin

- (void) say:(CDVInvokedUrlCommand*)command;

@end