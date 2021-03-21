export default function orderByProps(obj, array) {
	let arrayOne = [];
  let arrayTwo = [];
  
  for (let i = 0; i < array.length; i++) {
  	if(array[i] in obj) {
    	arrayOne.push({key: array[i], value: obj[array[i]]});
      delete obj[array[i]];
    }
  }
  

  
  for (let item in obj) {
  	arrayTwo.push({key: item, value: obj[item]});
  }
  

  
  arrayTwo.sort((a, b)=>{
  	let A = a.key;
    let B = b.key;
    
    if (A < B) {
    	return -1;
    } else if (A > B) {
    	return 1;
    } else {
    	return 0;
    };
  });
    
  return arrayOne.concat(arrayTwo);
};

