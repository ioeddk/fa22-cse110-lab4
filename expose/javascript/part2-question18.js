function getSecond(){
    let d = new Date();
    let time = d.toLocaleTimeString();
    console.log(time);
}

setInterval(getSecond, 1000);
