'use strict';
let observersFactory = require('./factories/observersFactory');
let taskFactory = require('./factories/taskFactory')
let observableFactory = require('./factories/observableFactory')

let task = taskFactory({message: 'dfa', user: 'dildo'}, observableFactory());
let notificationService = observersFactory.notification()
let fetchService = observersFactory.fetcher()

task.addObserver(notificationService.update)
task.addObserver(fetchService.update)
task.notify()

