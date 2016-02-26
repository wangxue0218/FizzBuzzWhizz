function fizzbuzz(inputlist) {
  return {
    core: function(n) {
      var a = inputlist[0];
      var b = inputlist[1];
      var c = inputlist[2];
      if (n.toString().indexOf(a.toString()) >= 0) {
        return "Fizz";
      }

      var str = "";
      if (n % a == 0) {
        str += "Fizz";
      }
      if (n % b == 0) {
        str += "Buzz";
      }
      if (n % c == 0) {
        str += "Whizz";
      }

      if (str == '') {
        return n.toString();
      } else {
        return str;
      }
    },

    connect: function(n) {
      var res = "";
      if(inputlist.length>3)
      res = "ERROR INPUT NUMBERS";
      else{
        var a = inputlist[0];
        var b = inputlist[1];
        var c = inputlist[2];
        if(a==b || a==c || b==c || a>9 || b>9 || c>9)
      res = "ERROR INPUT NUMBERS";
      else{
        for (var i = 1; i <= n; i++) {
          res += this.core(i) + " ";
        }
      }
    }
      return res;
    },

    main: function() {
      var result = this.connect(100);
      console.log(result);
    }
  }
}

module.exports = fizzbuzz;
