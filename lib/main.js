function main(a,b,c,total){
    var result = '';
    if(a==b||b==c||a==c ||a>9||b>9||c>9){
      result = 'ERROR INPUT NUMBERS';
    }else{
      for(var i=1;i<=total;i++){
        var i_str = i.toString();
        var a_str = a.toString();
        if(i_str.indexOf(a_str)>=0){
          result += 'Fizz ';
        }else if(i%a==0 && i%b==0 && i%c==0){
          rerult += 'FizzBuzzWhizz ';
        }else if(i%a==0 && i%b==0){
          result += 'FizzBuzz ';
        }else if(i%a==0 && i%c==0){
          result += 'FizzWhizz ';
        }else if(i%b==0 && i%c==0){
          result += 'BuzzWhizz ';
        }else if(i%a==0){
          result += 'Fizz ';
        }else if(i%b==0){
          result += 'Buzz ';
        }else if(i%c==0){
          result += 'Whizz ';
        }else result += (i.toString()+' ');
      }
      console.log(result);
    }

    return result;
}

module.exports = main;
