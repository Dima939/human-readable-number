function toReadable(number){
    number = number.toString();
    let result = '';
    if (number.length === 1){
      switch(number){
        case '0': return 'zero'; break;
        case '1': return 'one'; break;
        case '2': return 'two'; break;
        case '3': return 'three'; break;
        case '4': return 'four'; break;
        case '5': return 'five'; break;
        case '6': return 'six'; break;
        case '7': return 'seven'; break;
        case '8': return 'eight'; break;
        case '9': return 'nine'; break;
        default: return 'error';
      }
    }
  
    if (number.length === 2 && number[0] === '1'){
      switch(number){
        case '10': return 'ten'; break;
        case '11': return 'eleven'; break;
        case '12': return 'twelve'; break;
        case '13': return 'thirteen'; break;
        case '14': return 'fourteen'; break;
        case '15': return 'fifteen'; break;
        case '16': return 'sixteen'; break;
        case '17': return 'seventeen'; break;
        case '18': return 'eightteen'; break;
        case '19': return 'nineteen'; break;
        default: return 'error';
      }
    }
  
    if (number.length === 2 && number[0] !== '1' && number[1] === '0'){
      switch(number[0]){
        case '2': return 'twenty'; break;
        case '3': return 'thirty'; break;
        case '4': return 'fourty'; break;
        case '5': return 'fifty' ; break;
        case '6': return 'sixty' ; break;
        case '7': return 'seventy'; break;
        case '8': return 'eighty' ; break;
        case '9': return 'ninety' ; break;
        default: return 'error';
      } 
    }
    if (number.length === 2 && number[0] !== '1' && number[1] !== '0'){
      switch(number[0]){
        case '2': return 'twenty' + ' ' + toReadable(Number(number.slice(1))); break;
        case '3': return 'thirty' + ' ' + toReadable(Number(number.slice(1))); break;
        case '4': return 'fourty' + ' ' + toReadable(Number(number.slice(1))); break;
        case '5': return 'fifty' + ' ' + toReadable(Number(number.slice(1))); break;
        case '6': return 'sixty' + ' ' + toReadable(Number(number.slice(1))); break;
        case '7': return 'seventy' + ' ' + toReadable(Number(number.slice(1))); break;
        case '8': return 'eighty' + ' ' + toReadable(Number(number.slice(1))); break;
        case '9': return 'ninety' + ' ' + toReadable(Number(number.slice(1))); break;
        default: return 'error';
      } 
    }
  
    if (number.length === 3){
      if (number[1] === '0' && number[2] !== '0'){
        return toReadable(Number(number.slice(0, 1)))+' hundred '+toReadable(Number(number.slice(-1)));
      }
      if (number[1] !== '0' && number[2] !== '0'){
        return toReadable(+number.slice(0, 1))+' hundred '+toReadable(+number.slice(-2));
      }
      if (number[1] === '0' && number[2] === '0'){
        return toReadable(+number.slice(0, 1))+' hundred';
      }
    }
  
    if (number.length === 4){
      if (+number.slice(1) === 0){
        return toReadable(+number.slice(0, 1)) + ' thousand';
      }
      return toReadable(+number.slice(0, 1))+' thousand '+toReadable(+number.slice(1));
    }
    
    if (number.length === 5){
      if (+number.slice(2) === 0){
        return toReadable(+number.slice(0, 2)) + ' thousand';
      }
      return toReadable(+number.slice(0, 2))+' thousand '+toReadable(+number.slice(2));
    }
  
    if (number.length === 6){
      if (+number.slice(3) === 0){
        return toReadable(+number.slice(0, 3)) + ' thousand';
      }
      return toReadable(+number.slice(0, 3))+' thousand '+toReadable(+number.slice(3));
    }
  
    if (number.length === 7){
      if (+number.slice(1) === 0){
        return toReadable(+number.slice(0, 1)) + ' million';
      }
      return toReadable(+number.slice(0, 1))+' million '+toReadable(+number.slice(1));
    }
    if (number.length === 8){
      if (+number.slice(2) === 0){
        return toReadable(+number.slice(0, 2)) + ' million';
      }
      return toReadable(+number.slice(0, 2))+' million '+toReadable(+number.slice(2));
    }
  
    if (number.length === 9){
      if (+number.slice(3) === 0){
        return toReadable(+number.slice(0, 3)) + ' million';
      }
      return toReadable(+number.slice(0, 3))+' million '+toReadable(+number.slice(3));
    }
  
    if (number.length === 10){
      if (+number.slice(1) === 0){
        return toReadable(+number.slice(0, 1)) + ' billion';
      }
      return toReadable(+number.slice(0, 1))+' billion '+toReadable(+number.slice(1));
    }
    if (number.length === 11){
      if (+number.slice(2) === 0){
        return toReadable(+number.slice(0, 2)) + ' billion';
      }
      return toReadable(+number.slice(0, 2))+' billion '+toReadable(+number.slice(2));
    }
  
    if (number.length === 12){
      if (+number.slice(3) === 0){
        return toReadable(+number.slice(0, 3)) + ' billion';
      }
      return toReadable(+number.slice(0, 3))+' billion '+toReadable(+number.slice(3));
    }
  }
  
  
  
  console.log(toReadable(+prompt('enter the number')));