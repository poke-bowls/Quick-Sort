//pivot
//partitioning ( left and right partitions, pivot is not a part of either of them but must be saved )
//recursion ( recursively pass in the left and right partitions until they are sorted )
//concatenation

var quickModule = function() {

  //private
  var left = [];
  var right = [];

  quickSort = function quickSort( input ) {
    var left = [];
    var right = [];

    if ( Array.isArray( input ) === false ) {
      throw new TypeError( 'Input must be an array!' );
    }

    var length = input.length;
    var pivot = input[Math.round( length / 2 ) - 1];


    //iterate through the values of the array, pushing into 'left' or 'right'
    //if the numbers are less than or greater than the pivot index

    for ( var k = 0; k < input.length; k++ ) {

      if ( pivot > input[k]  ) {
        left.push( input[k] );
      } else if ( pivot < input[k] ){
        right.push( input[k] );
      }
    }

    if ( length <= 1 ){
      return input;
    } else {
      return quickSort(left).concat( pivot, quickSort(right));
    }
  };


  //public
  return {
    quickSort: quickSort
  };

}();