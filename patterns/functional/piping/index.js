var pipe = {
  where: function (criteria) {
    var temp = [];

    for (var i = 0; i < this.array.length; i++) {
      if (this.array[i] > criteria) {
        temp.push(this.array[i])
      }
    }
    this.array = temp;

    return this;
  },
  log: function (type) {
    if (type = 'warning') {
      console.warn(this.array);
    }

    return this
  }
};

var objectWithPipe = Object.create(pipe);
objectWithPipe.array = [1, 3, 40, 50];

objectWithPipe.where(35).log('warning').where(45).log('warning');

