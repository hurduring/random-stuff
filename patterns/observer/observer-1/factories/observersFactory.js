'use strict'
function notificationFactory() {
  let message = 'notify';

  function update(task) {
    console.log(message + ' ' + task.user)
  }

  return {
    update: update
  }
}

function fetchFactory() {
  let message = 'fetch';

  function update(task) {
    console.log(message + ' ' + task.user)
  }

  return {
    update: update
  }
}

module.exports.notification = notificationFactory;
module.exports.fetcher = fetchFactory;