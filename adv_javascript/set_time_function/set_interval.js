let intervalId = setInterval(() => {
    console.log("hiiiii");
}, 1000); 

setTimeout(() => {
    clearInterval(intervalId); 
    console.log("Interval stopped!");
}, 5000);