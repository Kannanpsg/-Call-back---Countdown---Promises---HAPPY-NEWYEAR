

// Call back - Countdown - Promises


function countDown(i) {
    return promise = new Promise( (resolve, reject) => {
  
      console.log(i--);
  
      if (i > 0) {
        setTimeout( () => {
          countDown(i).then(resolve);
        }, 1000);
      } else {
        resolve('HAPPY NEWYEAR');
      }
  
    });
  
  }
  
  let counter = countDown(10);
  counter.then( (msg) => {
    console.log(msg);
  });