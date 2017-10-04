// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:
var getElementsByClassName = function(className
) {
  // your code here
  var root = document.body; 
  var result = []; 

  //traverse the tree 
  function traverseTree(node){ 
  	if(node.classList.contains(className)){ 
  		result.push(node)
  	}

  	for(var i = 0; i < node.children.length; i++){
  		traverseTree(node.children[i])
  	}
  }

  traverseTree(root)
  return result;

};
