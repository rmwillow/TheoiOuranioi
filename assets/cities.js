async function myDisplay() {
    let myPromise = new Promise(function(myResolve, myReject) {
        setTimeout(function() { myResolve("I love You !!"); }, 3000);
    });
    document.getElementById("demo").innerHTML = await myPromise;
}

myDisplay();