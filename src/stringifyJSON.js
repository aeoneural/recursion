// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:


var stringifyJSON = function(obj) {
  // your code goes here

  // Symbolic primitive such as null, true, false are rendered as string(themselves)
  
  if(typeof obj === 'string') {
    return '"' + obj + '"';
  }

  if(typeof obj === 'number' || obj === null || typeof obj === 'boolean') {
    return String(obj);
  }

  //Values that do not have a JSON representation (such as undefined and functions) do not produce a String.
  if(obj === undefined) {return ;}


  if (Array.isArray(obj)){
    var temp = obj.reduce(function(acc, curr){
      acc.push(stringifyJSON(curr));
      return acc;      
    },[]);
    return '[' + temp.join(',') + ']';
    }

  if (typeof obj === 'object') {
    let temp = [];
	  for (var key in obj) {
	    if (typeof obj[key] === 'undefined' || typeof obj[key] === 'function') {
	      continue;
	    } else {
	      temp.push(stringifyJSON(key) + ':' + stringifyJSON(obj[key]));
	    }
	  }
	  return '{' + temp.join(',') + '}';   
  }
};


