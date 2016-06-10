'use strict';
let observersFactory = require('./factories/observersFactory');
let taskFactory = require('./factories/taskFactory')
let observableFactory = require('./factories/observableFactory')

let task = taskFactory({message: 'dfa', user: 'dildo'}, observableFactory());
let notificationService = observersFactory.notification()
let fetchService = observersFactory.fetcher()

task.addObserver(notificationService.update)
task.addObserver(notificationService.update)
task.addObserver(fetchService.update)
task.addObserver(fetchService.update)
task.save()

console.log(notificationService.getMessage())
console.log(fetchService.getMessage())

//let derp = [
//  function(){
//    console.log('fdsa')
//  },
//  function(){
//    console.log('11111')
//  }
//]
//
//derp.forEach(Function.prototype.call,{})
//console.dir(Function.prototype.call.call(Function.prototype.call,function(){console.log('fda')}))
//Function.prototype.call.call()
//
//let kerp = function(){
//  console.log('fdas')
//}
//
//kerp.call(undefined)
//
//
//
//
//
//
//