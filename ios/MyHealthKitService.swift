//
//  MyHealthKitService.swift
//  HealthAppReactNative
//
//  Created by Geovanni Fuentes on 2023-12-02.
//

import Foundation
import HealthKit

@objc(MyHealthKitService)
class MyHealthKitService: NSObject {
  private let healthStore = HKHealthStore()
  private let stepsType = HKQuantityType(.stepCount)
  
  private var startOfDay: Date {
      Calendar.current.startOfDay(for: Date())
  }
  
  @objc
  static func requiresMainQueueSetup() -> Bool {
    return true
  }

  @objc
  func requestPermissions(_ resolve: @escaping RCTPromiseResolveBlock, rejecter reject: @escaping RCTPromiseRejectBlock) {
    healthStore.requestAuthorization(toShare: [], read: [stepsType]) { status, error in
      guard error == nil else {
        print("error requesting permission")
        reject("", "", NSError(domain: "", code: 8000))
        return
      }
      resolve(status)
    }
  }
  
  @objc
  func fetchSteps(_ resolve: @escaping RCTPromiseResolveBlock, rejecter reject: @escaping RCTPromiseRejectBlock) {
    let predicate = HKQuery.predicateForSamples(withStart: startOfDay, end: Date())
    let query = HKStatisticsQuery(quantityType: stepsType, quantitySamplePredicate: predicate) { _, result, error in
        guard let quantity = result?.sumQuantity(), error == nil else {
            print("error fetching steps")
            reject("", "", NSError(domain: "", code: 8000))
            return
        }
      resolve(Int(quantity.doubleValue(for: .count()).rounded(.up)))
    }
    healthStore.execute(query)
  }
}
