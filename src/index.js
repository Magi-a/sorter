class Sorter {
  constructor() {
    this.array = [];

    this.defaultComparator = function (a, b) {
      return a - b;
    }

    this.comparator = this.defaultComparator;
  }

  add(element) {
    this.array.push(element);
  }

  at(index) {
    return this.array[index];///
  }

  get length() {
    return this.array.length;
  }

  toArray() {
    
    return this.array;
  }

  sort(indices) {

    var startIndex = Math.min.apply(Math,indices);

    var tempArray = [];

    for(let i = 0; i < indices.length; i++){
      tempArray[i] = this.array[indices[i]];
    }

    tempArray.sort(this.comparator);

    for(let i = 0; i < indices.length; i++){

      this.array[i + startIndex] = tempArray[i];
    }

    console.log(this.array);
  }

  setComparator(compareFunction) {
    
    this.comparator = compareFunction;

  }


}

module.exports = Sorter;