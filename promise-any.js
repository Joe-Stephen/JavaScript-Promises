const promise1 = new Promise((resolve, reject) => {
    setTimeout(reject, 100, "Timer1 rejected.");
  });
  const promise2 = new Promise((resolve, reject) => {
    setTimeout(resolve, 3000, "Timer2 resolved.");
  });
  const promise3 = new Promise((resolve, reject) => {
    setTimeout(resolve, 5000, "Timer3 resolved.");
  });
  
  Promise.any([promise1, promise2, promise3])
    .then((values) => {
      console.log("Values : ", values);
    })
    .catch((error) => {
      console.error("The error : ", error);
    });
  