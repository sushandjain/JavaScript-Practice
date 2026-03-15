let num=1634;

let temp=num;
let digits=temp.toString().length;
let sum=0

while(temp>0){
    let digit=temp%10;
    sum+= Math.pow(digit,digits);
    temp=parseInt(temp/10)
}
if(num===sum){
    console.log("is armstrong number");
    
}else{
    console.log("fuck its not an armstrong number!!!!!");
}