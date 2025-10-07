function count(str){
    str=str.toLowerCase();
 let count=0;
 for(let char of str){
    if(char==='a'|| char==='e'||  char==='i'|| char==='o' || char==='u'){
        count++;
    }
 }
 return count;
}
console.log(count("javascript"));
console.log(count("SKY"));
console.log(count("HELLOW"));
