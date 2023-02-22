let a=[]
let s=true
for(let i=0;i<300;i++)
{
    a.push(Math.floor(Math.random()*20))
}
for(let i=0;i<3000;i++)
{
    let c=a.pop()
    if(c<0||c>20)
    {s=false}
}
s===true?console.log("Pass"):console.log("Fail")