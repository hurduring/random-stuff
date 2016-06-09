'use strict'
function notificationFactory() {
  let message = 'notify';

  function update(task) {
    console.log(message + ' ' + task.user)
    message = 'derp';
  }

  return {
    update: update,
    getMessage: function(){
      return message
    }
  }
}

function fetchFactory() {
  let message = 'fetch';

  function update(task) {
    console.log(message + ' ' + task.user)
  }

  return {
    update: update,
    getMessage: function(){
      return message
    }
  }
}

module.exports.notification = notificationFactory;
module.exports.fetcher = fetchFactory;