Array.prototype.toTwenty = function () {
  var num = [];
  for (var i = 1; i <= 20; i++) {
    num.push(i);
    }
  return num;
}


Array.prototype.toForty = function () {
  var num = [];
    for (var i = 2; i <= 40; i +=2) {
    num.push(i);
      }
    return num;
};

Array.prototype.toOneThousand = function() {
    var num = [];
    for (var i = 10; i <= 1000; i +=10) {
    num.push(i);
      }
    return num;
};

Array.prototype.search = function(num) {
  var left = 0;
  var right = this.length - 1;
  var result = {count:0, index:-1, length:this.length};
  while (left <= right) {
    var mid = Math.floor((left + right)/2);

    if (this[mid] === num) {
      result.index = mid;
      break;
    } else if (this[left] === num) {
      result.index = left;
      break;
    } else if (this[right] === num) {
      result.index = right;
      break;
    } 
    else if (this[mid] > num) {
      right = mid - 1;
    } else if (this[mid] < num) {
      left = mid + 1;
    } 
    result.count++;
  }
  return result;
};

