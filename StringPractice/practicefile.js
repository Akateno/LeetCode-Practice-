

let s = "A man, a plan, a canal: Panama"


function running (){
   let sol = s.replace(/\W/g,'').toLowerCase(); 
   console.log(sol)
   console.log(sol[sol.length-1])

   let left=0; 
   let right=sol.length-1

   while(left<=right){


    if(sol[left]!==sol[right]){
        return console.log("false")
    }
    left++
    right--
   }
   return console.log("true")
}

running(s); 