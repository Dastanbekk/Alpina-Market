// ForEach
// Array.prototype.myForEach = function(cb){
//     for(let i =0; i<this.length; i++){
//         cb(this[i], i, this)
//     }
// }
// users.myForEach((value,index,arr)=>{
//     console.log(value, index,arr)
// })

let users = [
    {
        id:1,
        username:"Doston",
        password:"Doston123"
    },
    {
        id:2,
        username:"Farxod",
        password:"Farxod123"
    },
    {
        id:3,
        username:"Dilfuza",
        password:"Dilfuza123"
    }
]



// Map
// let newArr = [];
// Array.prototype.myMap = function(cb){
//     for(let i = 0; i<this.length; i++){
//         if(i in this){
//             cb(this[i],i, this)
//         }
//     }
// }
// users.myMap((value, index, arr)=>{
//     console.log(value,index, arr)
// })


// Filter
// numArr = [1,2,3,4,5,6]
// newArr = [ ]

// Array.prototype.myFilter = function(cb){
//     for(let i= 0; i<this.length;i++){
//         if(numArr[i] % 2 == 0){
//            cb(newArr.push(this[i])) 
//         }
//     }
// }
// numArr.myFilter(()=>{
//     console.log(newArr)
// })

// let arr = [1,2,3,4,5,6]

// Array.prototype.mySome = function(cb){
//     for(let i= 0; i<this.length;i++){
//         if(cb(this[i], i, i++)){
//             return true
//         }
//     }
//     return false
// };

//     let some =arr.mySome((value) => {
//         return value % 2 ===0
//     })
// console.log(some)


// let arr = [1,2,3,4,5,6];
// Array.prototype.myEvery = function(cb){
//     for(let i=0; i<this.length; i++){
//         if(!cb(this[i],i,this)){
//             return false
//         }
//     }
//     return true
// }
// let every = arr.myEvery((value)=>{
//     return value % 2===0
// })
// console.log(every)