const mathObj = {
    abs: function(num) {return Math.abs(num)},
    isEven: function(num) {return num%2===0 ? true : false},
    isOdd: function(num) {return num%2===0 ? false : true},
    isStrictlyPositive: function(num) {return num>0 ? true : false},
    min: function(a,b) {return a>b ? b : a},
    max: function(a,b) {return a>b ? a : b}
}