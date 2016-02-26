function judgeInput(inputlist){
  var errorinput = 0;
  if(inputlist.length>3)
  errorinput = 1;
  else if(inputlist[0]==inputlist[1]||inputlist[0]==inputlist[2]||inputlist[1]==inputlist[2]||inputlist[0]>9||inputlist[1]>9||inputlist[2]>9)
  errorinput = 1;
  return errorinput;
}
function getRightRes(inputlist,total){
  var result = '';
  var a = inputlist[0];
  var b = inputlist[1];
  var c = inputlist[2];
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
  return result;
}
function main(inputlist,total){
  var errorinput = judgeInput(inputlist);
    var result = '';
    if(errorinput == 1){
      result = 'ERROR INPUT NUMBERS';
    }else{
      result = getRightRes(inputlist,total);
    }
    console.log(result);
    return result;
  }

module.exports = main;
