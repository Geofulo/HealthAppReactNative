//
//  MyHealthKitService.m
//  HealthAppReactNative
//
//  Created by Geovanni Fuentes on 2023-12-02.
//

#import <Foundation/Foundation.h>
#import <React/RCTBridgeModule.h>

@interface RCT_EXTERN_MODULE(MyHealthKitService, NSObject)

RCT_EXTERN_METHOD(requestPermissions: (RCTPromiseResolveBlock)resolve rejecter: (RCTPromiseRejectBlock)reject)
RCT_EXTERN_METHOD(fetchSteps: (RCTPromiseResolveBlock)resolve rejecter: (RCTPromiseRejectBlock)reject)

@end
