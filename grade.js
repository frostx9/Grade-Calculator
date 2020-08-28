let student=function(stscore=0 ,full=20){
    return (stscore*100) / full
    }

let result = student(4)
if(result>=90){
    console.log(`You got A ${(result)}%`)
}else if(result>=80 && result<=89 ){
    console.log(`You got B ${(result)}%`)
}else if(result>=70 && result<=79){
    console.log(`You got C ${(result)}%`)
}else if(result>=60 && result<=69){
    console.log(`You got D ${(result)}%`)
}else{
    console.log(`You got F ${(result)}%`)
}