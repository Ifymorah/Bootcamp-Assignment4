module.exports = function (arr1,arr2) {
  	var arr1size = arr1.length;
  	var arr2size = arr2.length;
  	for (var i = 0; i < arr2size; i++) {
    	if (arr1.indexOf(arr2[i]) === -1) { 
      	return arr2[i];
    	}
   	}
   	return 0;
	}
