let n=5;
let string="";
for(let i =0; i<n;i++){
    for(let j=0;j<n;j++){
        for(let k=0;k<j;k++){
            string+="*"
        }
        {
            string+=" "
        }
    }
    string+="\n"
}
console.log(string);