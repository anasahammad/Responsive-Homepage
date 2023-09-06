const paymentStatus = true;
const marks = 80;

function enroll(){
    console.log("Course enrollment is in progress");
    const promis = new Promise(function(resolve, reject){
        setTimeout(function(){
            if(paymentStatus){
               resolve();
            } else {
                reject("Payment faild")
            }
        },2000);

    })
    return promis;
    
}

function progress() {
    console.log("Course on progress");
    const promis = new Promise(function(resolve, reject){
        setTimeout(function(){
            if(marks >= 80) {
                resolve();
            } else {
                reject("You could not get enough maks to get the Certificate")
            }
        },3000);

    })
    return promis;
    
}

function getCertificate() {
    console.log("Preparing Your Certificate");
    const promis = Promise.resolve("Congrats! You got the Certificate")
        
    return promis;

    
}

 async function course(){
     try {
        await enroll();
        await progress();
        const message = await getCertificate();
        console.log(message);

     }
     catch(err) {
        console.log(err);
     }
     
}
course();



