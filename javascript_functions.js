// javascript function : sum of overlapping elements.
const sum = (arr1, arr2) => {
    let Sum=0;
    let arr3=[];
    for(let a = 0; a < arr1.length; a++) {
      for(let b = 0; b < arr2.length; b++){
        if(arr1[a]==arr2[b])
            arr3.push(arr1[a]);
      }
    }
    for(let a = 0; a < arr2.length; a++){
      for(let b = 0; b < arr1.length; b++){
        if(arr2[a]==arr1[b])
            if(arr3.indexOf(arr2[a])>=0)
                arr3.push(arr2[a]);
      }
    }
    console.log(arr3);
    for(let e=0; e<arr3.length;e++)
        Sum+=arr3[e];
    return Sum;
  }

// javascript function : find the sum of all distinct elements.
  const sum = (arr1, arr2) => {
    let Sum=0;
    for(let a = 0; a < arr1.length; a++) {
      for(let b = 0; b < arr2.length; b++){
        if(arr1[a]==arr2[b])
        break;
        if(b==arr2.length-1)
        Sum+=arr1[a];
      }
    }
    for(let a = 0; a < arr2.length; a++){
      for(let b = 0; b < arr1.length; b++){
        if(arr2[a]==arr1[b])
          break;
        if(b==arr1.length-1)
          Sum+=arr2[a];
      }
    }
    return Sum;
  }