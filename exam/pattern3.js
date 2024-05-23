let n = 5;
let string = "";

for(let i = 1; i <=  n ; i++){
    for(let j = i-1; j < n +1 ; j++){
    if(j===0 || j===n){
    
        string +="*"
        
    }
    else{
        string +=n-j
    }  
    }
    string +="\n"
}
console.log(string)