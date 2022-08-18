// Given two strings s and t, return true if t is an anagram of s, and false otherwise.

// An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once.

 

// Example 1:

// Input: s = "anagram", t = "nagaram"
// Output: true
// Example 2:

// Input: s = "rat", t = "car"
// Output: false

var isAnagram = function(s, t) {
    
if(s.length !== t.length){return false}

const sCount={}; 
const tCount={}; 
const N= s.length; 

for(let i=0; i<N; i++){

    if(!sCount[s[i]]){
        sCount[s[i]] = 0; //setting the count for eachkey  to zero 
    }
    if(!tCount[t[i]]){
        tCount[t[i]]=0; //setting the count for each key to zero 
    }
    sCount[s[i]]++          //then we increment everytime we see the char again for each one 
    tCount[t[i]]++
}

for (let ch in sCount){                //iterate through the hash 
    if(sCount[ch] !== tCount[ch]){
        return false
    }
}

return true 

};