'use strict'
function observableFactory() {
  function add(obj) {
    this.observerList.push(obj)
  }

  function get(index) {
    return this.observerList[index];
  }

  return {
    observerList: [],
    add: add,
    get: get
  }
}

module.exports = observableFactory;