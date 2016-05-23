'use strict'
function taskFactory(data, observable) {
  function save() {
    console.log('save ' + this.message)
    this.notify()
  }

  function addObserver(observer) {
    this.observable.add(observer);
  }

  function notify() {
    let listLength = this.observable.observerList.length;
    for (let i = 0; i < listLength; i++) {
      this.observable.get(i)(this)
    }
  }

  return {
    message: data.message,
    user: data.user,
    observable: observable,
    save: save,
    addObserver: addObserver,
    notify: notify
  }
}

module.exports = taskFactory;