//var c = 300
let a = 300
if (true) {
    let a = 10
    const b = 20
    // console.log("INNER: ", a);
    
}



// console.log(a);
// console.log(b);
// console.log(c);


function one(){
    const username =neel

    function two(){
        const website = "youtube"
        console.log(username);
    }
    // console.log(website);

     two()

}

// one()

if (true) {
    const username = "neel"
    if (username === "neel") {
        const website = " youtube"
        // console.log(username + website);
    }
    // console.log(website);
}

// console.log(username);


// ++++++++++++++++++ interesting ++++++++++++++++++


console.log(addone(5)) // op will be 6

function addone(num){
    return num + 1
}



//addTwo(5) // we can't declare this first if made function in other variable. if there's only function addTwo(num) then op will be 7
const addTwo = function(num){
    return num + 2
}