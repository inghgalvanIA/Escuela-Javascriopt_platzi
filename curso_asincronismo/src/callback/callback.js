function sum(num_uno,num_dos){
    return num_uno + num_dos
}


function calc(num_uno,num_dos,callback){
    return callback(num_uno,num_dos)
}

console.log(calc(2,2,sum));

function date(callback){
    console.log(new Date);
}

function date(callback){
    console.log(new Date);
    setTimeout(function(){
        let date = new Date;
        callback(date);
    }, 3000)
}

function printDate (dateNow) {
 console.log(dateNow);
}

date(printDate);